import { useState, useEffect } from 'react';
import type { Scenario, DialogueOption } from '../data/levelScenarios';
import { Heart, X, AlertCircle, CheckCircle2, Mic, Volume2 } from 'lucide-react';
import { useSpeech } from '../hooks/useSpeech';
import './SurvivalGame.css'; // Reusing the CSS styles

interface ScenarioViewProps {
  scenario: Scenario;
  hearts: number;
  progressPercent: number;
  onQuit: () => void;
  onOptionSelect: (isCorrect: boolean, option?: DialogueOption) => void;
}

export function ScenarioView({ scenario, hearts, progressPercent, onQuit, onOptionSelect }: ScenarioViewProps) {
  const [selectedOption, setSelectedOption] = useState<DialogueOption | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackType, setFeedbackType] = useState<'success' | 'error' | null>(null);
  const { isListening, transcript, startListening, stopListening, setTranscript } = useSpeech();

  useEffect(() => {
    // Reset state when scenario changes
    setSelectedOption(null);
    setShowFeedback(false);
    setFeedbackType(null);
    setTranscript('');

    // Auto-play NPC dialogue
    const u = new SpeechSynthesisUtterance(scenario.npcDialogue);
    u.lang = 'en-US';
    setTimeout(() => window.speechSynthesis.speak(u), 400);
  }, [scenario, setTranscript]);

  const triggerFeedback = (isCorrect: boolean, option?: DialogueOption) => {
    if (showFeedback) return;

    if (option) setSelectedOption(option);
    setShowFeedback(true);
    setFeedbackType(isCorrect ? 'success' : 'error');

    setTimeout(() => {
      onOptionSelect(isCorrect, option);
      if (!isCorrect) {
        setShowFeedback(false);
        setSelectedOption(null);
        setTranscript('');
      }
    }, 1500);
  };

  const handleOptionClick = (option: DialogueOption) => {
    if (scenario.requiresSpeaking) return; // Must use microphone if required
    triggerFeedback(option.isCorrect, option);
  };

  const handleCheckSpeech = () => {
    if (!transcript) return;
    
    // Find the correct option text to compare against
    const correctOption = scenario.options.find(o => o.isCorrect);
    if (!correctOption) return;

    const cleanTarget = correctOption.text.toLowerCase().replace(/[^\w\s]|_/g, "").trim();
    const cleanTranscript = transcript.toLowerCase().replace(/[^\w\s]|_/g, "").trim();
    const isCorrect = cleanTranscript === cleanTarget || (cleanTranscript.length > 2 && cleanTarget.includes(cleanTranscript));

    triggerFeedback(isCorrect, isCorrect ? correctOption : undefined);
  };

  const getBgColor = (bgClass: string) => {
    if (bgClass.includes('slate')) return '#1e293b';
    if (bgClass.includes('orange')) return '#c2410c';
    if (bgClass.includes('blue')) return '#1e3a8a';
    if (bgClass.includes('gray')) return '#374151';
    if (bgClass.includes('red')) return '#7f1d1d';
    return '#1e293b';
  };

  return (
    <div className="scenario-container" style={{ backgroundColor: getBgColor(scenario.backgroundClass) }}>
      
      {/* Top Bar / HUD */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <button className="btn-icon" onClick={onQuit} style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer' }}>
          <X size={28} />
        </button>
        <div style={{ flex: 1, height: '16px', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', overflow: 'hidden' }}>
          <div style={{ width: `${progressPercent}%`, height: '100%', background: 'linear-gradient(90deg, #22c55e, #4ade80)', transition: 'width 0.5s ease-out', borderRadius: '8px' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ef4444', fontWeight: 'bold', fontSize: '1.25rem' }}>
          <Heart size={28} fill="#ef4444" /> {hearts}
        </div>
      </div>

      {/* NPC Area */}
      <div className="npc-area" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '2rem 0' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '20px' }}>
          <div className="npc-avatar">
            <div className="avatar-circle">
               {scenario.npcName.charAt(0)}
            </div>
          </div>
          <div className="npc-dialogue-box">
            <h3>{scenario.npcName} <span>({scenario.npcRole})</span></h3>
            <p className="dialogue-text">"{scenario.npcDialogue}"</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
               <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>({scenario.translatedDialogue['pt']})</span>
               <button 
                  onClick={() => {
                    const u = new SpeechSynthesisUtterance(scenario.npcDialogue);
                    u.lang = 'en-US';
                    window.speechSynthesis.speak(u);
                  }}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#4f46e5' }}
               >
                 <Volume2 size={20} />
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* Player Options or Microphone */}
      <div className="options-area" style={{ marginTop: 'auto' }}>
        {scenario.requiresSpeaking ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%' }}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '1rem' }}>
               {scenario.options.map(opt => (
                 <div key={opt.id} style={{ padding: '12px 20px', background: 'rgba(255,255,255,0.1)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)' }}>
                    {opt.text}
                 </div>
               ))}
            </div>
            
            <button 
              onMouseDown={() => startListening('en-US')}
              onMouseUp={() => stopListening()}
              onTouchStart={() => startListening('en-US')}
              onTouchEnd={() => stopListening()}
              className={isListening ? "animate-pulse" : ""}
              style={{
                width: '100px', height: '100px', borderRadius: '50%',
                background: isListening ? '#ef4444' : 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                border: '4px solid rgba(255,255,255,0.2)',
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                color: 'white', cursor: 'pointer',
                boxShadow: isListening ? '0 0 30px rgba(239, 68, 68, 0.6)' : '0 10px 25px rgba(0,0,0,0.3)',
                transition: 'all 0.2s'
              }}
            >
              <Mic size={40} />
            </button>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>
              {isListening ? "Listening..." : "Hold to speak your answer"}
            </p>
            
            {transcript && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.8rem 1.5rem', background: 'rgba(255,255,255,0.2)', borderRadius: '12px', fontSize: '1.2rem' }}>
                  "{transcript}"
                </div>
                <button 
                   onClick={handleCheckSpeech}
                   disabled={showFeedback}
                   style={{ padding: '10px 20px', background: '#22c55e', border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}
                >
                   Check
                </button>
              </div>
            )}
          </div>
        ) : (
          scenario.options.map((option) => (
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
          ))
        )}
      </div>

      {/* Feedback Overlay */}
      {showFeedback && (
        <div className={`feedback-overlay ${feedbackType}`}>
          <div className="feedback-card">
            {feedbackType === 'success' ? (
              <CheckCircle2 size={48} color="#22c55e" />
            ) : (
              <AlertCircle size={48} color="#ef4444" />
            )}
            <h2>{feedbackType === 'success' ? 'Correct!' : 'Wrong!'}</h2>
            <p>{selectedOption ? selectedOption.feedback : "Try again!"}</p>
            {feedbackType === 'error' && (
              <p className="penalty-text">-1 Heart</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
