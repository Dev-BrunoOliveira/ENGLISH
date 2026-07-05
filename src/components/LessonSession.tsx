import React, { useState, useMemo } from 'react';
import { top1000Levels, type DialogueOption } from '../data/levelScenarios';
import { ScenarioView } from './ScenarioView';
import { Heart } from 'lucide-react';
import { playSuccessSound } from '../utils/audio';

interface LessonSessionProps {
  lessonId: number;
  nativeLang: string;
  onComplete: (earnedXp: number) => void;
  onQuit: () => void;
}

export const LessonSession: React.FC<LessonSessionProps> = ({ lessonId, nativeLang: _nativeLang, onComplete, onQuit }) => {
  const [hearts, setHearts] = useState(5);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const levelData = useMemo(() => top1000Levels.find(l => l.id === lessonId), [lessonId]);

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
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Coming Soon!</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '500px' }}>
          This level's scenarios are currently under construction. Check back soon for more 1000 phrase content!
        </p>
        <button className="btn btn-primary" onClick={onQuit} style={{ padding: '16px 48px' }}>Back to Map</button>
      </div>
    );
  }

  const handleOptionSelect = (isCorrect: boolean, _option?: DialogueOption) => {
    if (isCorrect) {
      playSuccessSound(); // Dispara o som sintético WebAudio!
      
      if (currentScenarioIndex + 1 >= levelData.scenarios.length) {
        setIsFinished(true);
      } else {
        setCurrentScenarioIndex(currentScenarioIndex + 1);
      }
    } else {
      setHearts(prev => Math.max(0, prev - 1));
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

  if (hearts === 0) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center' }}>
        <Heart size={80} fill="#ef4444" color="#ef4444" style={{ marginBottom: '2rem', opacity: 0.5 }} />
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'white' }}>Out of Hearts!</h1>
        <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>Don't give up, try again!</p>
        <button className="btn btn-primary" onClick={onQuit} style={{ padding: '16px 48px', fontSize: '1.25rem' }}>Back to Map</button>
      </div>
    );
  }

  const currentScenario = levelData.scenarios[currentScenarioIndex];
  const progressPercent = Math.round((currentScenarioIndex / levelData.scenarios.length) * 100);

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', height: '100vh', display: 'flex', flexDirection: 'column', padding: '1rem' }}>
       <ScenarioView 
         scenario={currentScenario}
         hearts={hearts}
         progressPercent={progressPercent}
         onQuit={onQuit}
         onOptionSelect={handleOptionSelect}
       />
    </div>
  );
};
