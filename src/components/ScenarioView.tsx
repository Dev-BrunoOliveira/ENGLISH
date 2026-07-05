import { useState, useEffect } from 'react';
import type { Scenario, DialogueOption } from '../data/levelScenarios';
import { X, AlertCircle, CheckCircle2, Mic, MicOff, SkipForward, Volume2, Flame, Star } from 'lucide-react';
import { useSpeech } from '../hooks/useSpeech';
import './SurvivalGame.css'; // Reusing the CSS styles

interface ScenarioViewProps {
  scenario: Scenario;
  progressPercent: number;
  levelTitle: string;
  streak: number;
  xp: number;
  onQuit: () => void;
  onOptionSelect: (isCorrect: boolean, option?: DialogueOption) => void;
  onDisableMic: () => void;
  nativeLang: string;
}

export function ScenarioView({ scenario, progressPercent, levelTitle, streak, xp, onQuit, onOptionSelect, onDisableMic, nativeLang }: ScenarioViewProps) {
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

  let rank = "Novice";
  if (xp >= 500) rank = "Explorer";
  if (xp >= 1500) rank = "Linguist";
  if (xp >= 3000) rank = "Master";
  if (xp >= 5000) rank = "Legend";

  return (
    <div className="scenario-container">
      
      {/* Top Bar / HUD */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>
            {levelTitle}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(0,0,0,0.4)', padding: '6px 12px', borderRadius: '999px', fontSize: '0.9rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent-primary)', fontWeight: 'bold' }}>
              <Flame size={16} fill={streak > 0 ? "var(--accent-primary)" : "none"} /> {streak}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent-primary)', fontWeight: 'bold' }}>
              <Star size={16} fill={xp > 0 ? "var(--accent-primary)" : "none"} /> {xp} XP
            </div>
            <span style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))', color: 'white', padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold' }}>
              {rank}
            </span>
          </div>
          <button className="btn-icon" onClick={onQuit} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: 0 }}>
            <X size={28} />
          </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ flex: 1, height: '16px', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ width: `${progressPercent}%`, height: '100%', background: 'linear-gradient(90deg, var(--accent-secondary), var(--accent-primary))', transition: 'width 0.5s ease-out', borderRadius: '8px' }} />
          </div>
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
               {!scenario.hideTranslation && scenario.translatedDialogue && (
                 <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>
                   ({scenario.translatedDialogue[nativeLang] || scenario.translatedDialogue['en'] || ''})
                 </span>
               )}
               <button 
                  onClick={() => {
                    const u = new SpeechSynthesisUtterance(scenario.npcDialogue);
                    u.lang = 'en-US';
                    window.speechSynthesis.speak(u);
                  }}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--accent-primary)' }}
               >
                 <Volume2 size={20} />
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* Player Options or Microphone */}
      <div className="options-area" style={{ marginTop: 'auto', position: 'relative' }}>
        
        {/* Feedback Overlay */}
        {showFeedback && (
          <div className={`feedback-overlay ${feedbackType}`}>
            <div className="feedback-card">
              <div className="feedback-card-icon">
                {feedbackType === 'success' ? (
                  <CheckCircle2 size={18} color="#4ade80" />
                ) : (
                  <AlertCircle size={18} color="#f87171" />
                )}
              </div>
              <div className="feedback-card-content" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <strong style={{ color: feedbackType === 'success' ? '#22c55e' : '#ef4444', fontSize: '0.9rem' }}>
                  {feedbackType === 'success' ? 'Correct!' : 'Wrong!'}
                </strong>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  {selectedOption ? selectedOption.feedback : "Try again!"}
                </span>
              </div>
            </div>
          </div>
        )}

        {scenario.requiresSpeaking ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', width: '100%' }}>
            
            {/* Suggested Phrases */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '0.5rem' }}>
               {scenario.options.map(opt => (
                 <div key={opt.id} style={{ padding: '8px 14px', background: 'rgba(255,255,255,0.1)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)', fontSize: '0.95rem' }}>
                    {opt.text}
                 </div>
               ))}
            </div>
            
            {/* Main Action Row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', width: '100%', marginTop: '0.5rem' }}>
              
              <button onClick={onDisableMic} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', transition: 'all 0.2s' }}>
                <MicOff size={24} />
                <span style={{ fontSize: '0.75rem', marginTop: '6px' }}>Can't speak</span>
              </button>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <button 
                  onMouseDown={() => startListening('en-US')}
                  onMouseUp={() => stopListening()}
                  onTouchStart={() => startListening('en-US')}
                  onTouchEnd={() => stopListening()}
                  className={isListening ? "animate-pulse" : ""}
                  style={{
                    width: '80px', height: '80px', borderRadius: '50%',
                    background: isListening ? '#ef4444' : 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                    border: '4px solid rgba(255,255,255,0.2)',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    color: 'white', cursor: 'pointer',
                    boxShadow: isListening ? '0 0 30px rgba(239, 68, 68, 0.6)' : '0 10px 25px rgba(0,0,0,0.3)',
                    transition: 'all 0.2s'
                  }}
                >
                  <Mic size={36} />
                </button>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, marginTop: '12px' }}>
                  {isListening ? "Listening..." : "Hold to speak"}
                </p>
              </div>

              <button onClick={() => onOptionSelect(true)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', transition: 'all 0.2s' }}>
                <SkipForward size={24} />
                <span style={{ fontSize: '0.75rem', marginTop: '6px' }}>Skip</span>
              </button>

            </div>
            
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
    </div>
  );
}
