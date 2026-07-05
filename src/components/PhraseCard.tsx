import React, { useState, useEffect } from 'react';
import type { Phrase } from '../data/phrases';
import { Volume2, Mic, CheckCircle, Circle } from 'lucide-react';
import { useSpeech } from '../hooks/useSpeech';

interface PhraseCardProps {
  phrase: Phrase;
  showNative: boolean;
  isLearned: boolean;
  onToggleLearned: (id: number) => void;
}

export const PhraseCard: React.FC<PhraseCardProps> = ({ phrase, showNative, isLearned, onToggleLearned }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { isListening, transcript, startListening, stopListening, setTranscript } = useSpeech();
  const [speechFeedback, setSpeechFeedback] = useState<'none' | 'correct' | 'incorrect'>('none');

  useEffect(() => {
    setIsFlipped(false);
    setTranscript('');
    setSpeechFeedback('none');
  }, [phrase.id]);

  useEffect(() => {
    if (transcript && !isListening) {
      // Basic normalization for evaluation
      const cleanTarget = phrase.english.toLowerCase().replace(/[^\w\s]|_/g, "").trim();
      const cleanTranscript = transcript.toLowerCase().replace(/[^\w\s]|_/g, "").trim();
      
      if (cleanTranscript === cleanTarget || cleanTarget.includes(cleanTranscript) && cleanTranscript.length > 2) {
        setSpeechFeedback('correct');
      } else {
        setSpeechFeedback('incorrect');
      }
    }
  }, [transcript, isListening, phrase.english]);

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    const utterance = new SpeechSynthesisUtterance(phrase.english);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  const handleMic = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isListening) stopListening();
    else startListening('en-US');
  };

  return (
    <div 
      className="glass-panel"
      style={{
        padding: '2rem',
        minHeight: '320px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        cursor: 'pointer',
        position: 'relative',
        transition: 'transform 0.3s ease',
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
        border: isLearned ? '1px solid var(--accent-secondary)' : '1px solid var(--glass-border)',
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div style={{ position: 'absolute', top: '16px', right: '16px', display: 'flex', gap: '8px' }}>
        <button 
          className={`btn-icon btn-glass ${isListening ? 'animate-pulse' : ''}`}
          onClick={handleMic}
          title="Test Pronunciation"
          style={{ color: isListening ? '#ef4444' : 'inherit' }}
        >
          <Mic size={20} />
        </button>
        <button 
          className="btn-icon btn-glass"
          onClick={handleSpeak}
          title="Listen"
        >
          <Volume2 size={20} />
        </button>
      </div>

      <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
        <button 
          className="btn-glass"
          style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '16px', border: 'none', cursor: 'pointer' }}
          onClick={(e) => { e.stopPropagation(); onToggleLearned(phrase.id); }}
        >
          {isLearned ? <CheckCircle size={18} color="var(--accent-secondary)" /> : <Circle size={18} />}
          <span style={{ fontSize: '0.75rem', color: isLearned ? 'var(--accent-secondary)' : 'inherit' }}>
            {isLearned ? 'Learned' : 'Mark Learned'}
          </span>
        </button>
      </div>

      <div style={{ marginTop: '2.5rem', width: '100%', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontSize: '0.875rem', color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>
          {/* phrase.category was removed */}
        </div>
        
        <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', wordBreak: 'break-word' }}>
          {phrase.english}
        </h2>
        
        <div style={{ minHeight: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {(showNative || isFlipped) ? (
            <p className="animate-fade-in" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
              {phrase.translations['pt'] || phrase.english}
            </p>
          ) : (
            <p className="animate-pulse" style={{ fontSize: '1rem', color: 'var(--text-secondary)', opacity: 0.6 }}>
              Click to reveal translation
            </p>
          )}
        </div>
      </div>

      {/* Speech Feedback UI */}
      {transcript && (
        <div style={{ marginTop: '1rem', padding: '10px', width: '100%', background: 'rgba(0,0,0,0.3)', borderRadius: '8px' }}>
          <p style={{ fontSize: '0.875rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>You said: "{transcript}"</p>
          {speechFeedback === 'correct' && <p style={{ color: '#22c55e', fontWeight: 'bold', marginTop: '4px' }}>Excellent! 🎉</p>}
          {speechFeedback === 'incorrect' && <p style={{ color: '#ef4444', fontWeight: 'bold', marginTop: '4px' }}>Keep trying!</p>}
        </div>
      )}
    </div>
  );
};
