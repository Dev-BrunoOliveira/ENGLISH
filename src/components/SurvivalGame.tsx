import { useState } from 'react';
import { scenarios } from '../data/scenarios';
import { ScenarioView } from './ScenarioView';
import './SurvivalGame.css';
import { Plane, AlertTriangle } from 'lucide-react';

interface SurvivalGameProps {
  onQuit: () => void;
  onWin: (remainingTime: number) => void;
}

export function SurvivalGame({ onQuit, onWin }: SurvivalGameProps) {
  // 3 hours = 180 minutes
  const INITIAL_TIME = 180;
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [gameState, setGameState] = useState<'playing' | 'gameover' | 'victory'>('playing');

  const currentScenario = scenarios[currentScenarioIndex];

  const handleOptionSelect = (isCorrect: boolean) => {
    if (isCorrect) {
      // Progress to next scenario
      if (currentScenarioIndex < scenarios.length - 1) {
        setCurrentScenarioIndex(prev => prev + 1);
      } else {
        // Won the game
        setGameState('victory');
      }
    } else {
      // Penalty: lose 15 minutes
      setTimeLeft(prev => {
        const newTime = prev - 15;
        if (newTime <= 0) {
          setGameState('gameover');
          return 0;
        }
        return newTime;
      });
    }
  };

  if (gameState === 'gameover') {
    return (
      <div className="game-over-screen">
        <AlertTriangle size={80} color="#ef4444" style={{ marginBottom: '20px' }} />
        <h1>Game Over</h1>
        <p>You ran out of time and missed your flight! You need to improve your English survival skills to make it next time.</p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button className="action-btn" onClick={() => {
            setTimeLeft(INITIAL_TIME);
            setCurrentScenarioIndex(0);
            setGameState('playing');
          }}>Try Again</button>
          <button className="action-btn" style={{ background: '#4b5563' }} onClick={onQuit}>Quit</button>
        </div>
      </div>
    );
  }

  if (gameState === 'victory') {
    return (
      <div className="victory-screen">
        <Plane size={80} color="#22c55e" style={{ marginBottom: '20px' }} />
        <h1>You Made It!</h1>
        <p>Congratulations! You successfully navigated through the city and caught your flight with {Math.floor(timeLeft / 60)}h {timeLeft % 60}m to spare.</p>
        <button className="action-btn" onClick={() => onWin(timeLeft)}>Complete & Return</button>
      </div>
    );
  }

  return (
    <ScenarioView 
      scenario={currentScenario} 
      timeLeft={timeLeft} 
      onOptionSelect={handleOptionSelect} 
    />
  );
}
