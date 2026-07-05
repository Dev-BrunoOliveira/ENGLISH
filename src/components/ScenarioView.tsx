import { useState, useEffect } from 'react';
import type { Scenario, DialogueOption } from '../data/scenarios';
import { Clock, AlertCircle, CheckCircle2 } from 'lucide-react';
import './SurvivalGame.css';

interface ScenarioViewProps {
  scenario: Scenario;
  timeLeft: number;
  onOptionSelect: (isCorrect: boolean, option: DialogueOption) => void;
}

export function ScenarioView({ scenario, timeLeft, onOptionSelect }: ScenarioViewProps) {
  const [selectedOption, setSelectedOption] = useState<DialogueOption | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackType, setFeedbackType] = useState<'success' | 'error' | null>(null);

  useEffect(() => {
    // Reset state when scenario changes
    setSelectedOption(null);
    setShowFeedback(false);
    setFeedbackType(null);
  }, [scenario]);

  const handleOptionClick = (option: DialogueOption) => {
    if (showFeedback) return; // Prevent multiple clicks

    setSelectedOption(option);
    setShowFeedback(true);
    setFeedbackType(option.isCorrect ? 'success' : 'error');

    setTimeout(() => {
      onOptionSelect(option.isCorrect, option);
      if (!option.isCorrect) {
        // If wrong, we keep showing feedback shortly, then reset to let them try again if they want, 
        // but in our game logic, we might just let the game engine handle if they stay in the same scenario or fail.
        setShowFeedback(false);
        setSelectedOption(null);
      }
    }, 1200);
  };

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins.toString().padStart(2, '0')}m`;
  };

  // Simple background colors mapped from the backgroundClass if we use vanilla CSS
  const getBgColor = (bgClass: string) => {
    if (bgClass.includes('slate')) return '#1e293b';
    if (bgClass.includes('orange')) return '#c2410c';
    if (bgClass.includes('blue')) return '#1e3a8a';
    if (bgClass.includes('gray')) return '#374151';
    return '#1e293b';
  };

  return (
    <div className="scenario-container" style={{ backgroundColor: getBgColor(scenario.backgroundClass) }}>
      
      {/* HUD (Heads Up Display) */}
      <div className="hud">
        <div className={`time-badge ${timeLeft <= 30 ? 'critical-time' : ''}`}>
          <Clock className="icon" />
          <span>{formatTime(timeLeft)} Left!</span>
        </div>
        <div className="location-badge">
          <span>{scenario.title}</span>
        </div>
      </div>

      {/* NPC Area */}
      <div className="npc-area">
        <div className="npc-avatar">
          {/* Placeholder for NPC Avatar */}
          <div className="avatar-circle">
             {scenario.npcName.charAt(0)}
          </div>
        </div>
        <div className="npc-dialogue-box">
          <h3>{scenario.npcName} <span>({scenario.npcRole})</span></h3>
          <p className="dialogue-text">"{scenario.npcDialogue}"</p>
        </div>
      </div>

      {/* Player Options */}
      <div className="options-area">
        {scenario.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleOptionClick(option)}
            disabled={showFeedback}
            className={`option-btn ${
              selectedOption?.id === option.id 
                ? (option.isCorrect ? 'correct' : 'wrong') 
                : ''
            }`}
          >
            {option.text}
          </button>
        ))}
      </div>

      {/* Feedback Overlay */}
      {showFeedback && selectedOption && (
        <div className={`feedback-overlay ${feedbackType}`}>
          <div className="feedback-card">
            {feedbackType === 'success' ? (
              <CheckCircle2 size={48} color="#22c55e" />
            ) : (
              <AlertCircle size={48} color="#ef4444" />
            )}
            <h2>{feedbackType === 'success' ? 'Correct!' : 'Wrong!'}</h2>
            <p>{selectedOption.feedback}</p>
            {feedbackType === 'error' && (
              <p className="penalty-text">-15 Minutes</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
