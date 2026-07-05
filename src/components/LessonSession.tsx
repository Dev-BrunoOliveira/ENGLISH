import React, { useState, useMemo } from 'react';
import { getLevelsForGoal, type DialogueOption } from '../data/levelScenarios';
import { ScenarioView } from './ScenarioView';
import { Heart } from 'lucide-react';
import { playSuccessSound } from '../utils/audio';

interface LessonSessionProps {
  lessonId: number;
  nativeLang: string;
  onComplete: (earnedXp: number) => void;
  onQuit: () => void;
  goal?: 'work' | 'travel' | 'entertainment' | 'study' | null;
}

export const LessonSession: React.FC<LessonSessionProps> = ({ lessonId, nativeLang: _nativeLang, goal, onComplete, onQuit }) => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [microphoneEnabled, setMicrophoneEnabled] = useState(true);

  const levelData = useMemo(() => {
    const levels = getLevelsForGoal(goal, _nativeLang);
    const data = levels.find(l => l.id === lessonId);
    if (!data) return undefined;

    if (!microphoneEnabled) {
      return {
        ...data,
        scenarios: data.scenarios.filter(s => !s.requiresSpeaking)
      };
    }
    
    return data;
  }, [lessonId, goal, _nativeLang, microphoneEnabled]);

  if (!levelData) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Level Not Found</h1>
        <button className="btn btn-primary" onClick={onQuit} style={{ padding: '16px 48px' }}>Back</button>
      </div>
    );
  }

  if (levelData.scenarios.length === 0) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>No Text Scenarios Available</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '500px' }}>
          This level only contained speaking tasks.
        </p>
        <button className="btn btn-primary" onClick={onQuit} style={{ padding: '16px 48px' }}>Back to Map</button>
      </div>
    );
  }

  // Handle case where filtering out speaking tasks makes current index out of bounds
  if (currentScenarioIndex >= levelData.scenarios.length && !isFinished) {
    setTimeout(() => setIsFinished(true), 0);
    return null;
  }

  const handleOptionSelect = (isCorrect: boolean, _option?: DialogueOption) => {
    if (isCorrect) {
      playSuccessSound(); // Dispara o som sintético WebAudio!
      
      if (currentScenarioIndex + 1 >= levelData.scenarios.length) {
        setIsFinished(true);
      } else {
        setCurrentScenarioIndex(currentScenarioIndex + 1);
      }
    }
  };

  if (isFinished) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center' }}>
        <img src="/mascot.png" alt="Mascot" style={{ width: '240px', height: '240px', objectFit: 'contain', marginBottom: '1.5rem', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))' }} />
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'white' }}>Level Complete!</h1>
        <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>You earned <span style={{color: '#3b82f6', fontWeight: 'bold'}}>{levelData.scenarios.length * 15} XP</span>!</p>
        <button className="btn btn-primary" onClick={() => onComplete(levelData.scenarios.length * 15)} style={{ padding: '16px 48px', fontSize: '1.25rem' }}>Continue</button>
      </div>
    );
  }

  const currentScenario = levelData.scenarios[currentScenarioIndex];
  const progressPercent = Math.round((currentScenarioIndex / levelData.scenarios.length) * 100);

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', height: '100vh', display: 'flex', flexDirection: 'column', padding: '1rem' }}>
       <ScenarioView 
         scenario={currentScenario}
         progressPercent={progressPercent}
         onQuit={onQuit}
         onOptionSelect={handleOptionSelect}
         onDisableMic={() => setMicrophoneEnabled(false)}
         nativeLang={_nativeLang}
       />
    </div>
  );
};
