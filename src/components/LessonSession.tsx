import React, { useState } from 'react';
import { useGameEngine } from '../hooks/useGameEngine';
import { Heart, X, CheckCircle, Volume2 } from 'lucide-react';

interface LessonSessionProps {
  lessonId: number;
  nativeLang: string;
  onComplete: (earnedXp: number) => void;
  onQuit: () => void;
}

export const LessonSession: React.FC<LessonSessionProps> = ({ lessonId, nativeLang, onComplete, onQuit }) => {
  const { hearts, currentQuestion, progressPercent, isFinished, submitAnswer, totalQuestions } = useGameEngine(lessonId, nativeLang);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'none' | 'correct' | 'wrong'>('none');

  if (isFinished) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center' }}>
        <img src="/mascot.png" alt="Mascot" style={{ width: '240px', height: '240px', objectFit: 'contain', marginBottom: '1.5rem', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))' }} />
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'white' }}>Lesson Complete!</h1>
        <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>You earned <span style={{color: '#3b82f6', fontWeight: 'bold'}}>{totalQuestions * 10} XP</span>!</p>
        <button className="btn btn-primary" onClick={() => onComplete(totalQuestions * 10)} style={{ padding: '16px 48px', fontSize: '1.25rem' }}>Continue</button>
      </div>
    );
  }

  if (hearts === 0) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center' }}>
        <Heart size={80} fill="#ef4444" color="#ef4444" style={{ marginBottom: '2rem', opacity: 0.5 }} />
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'white' }}>Out of Hearts!</h1>
        <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>Don't give up, try again tomorrow or retry the lesson.</p>
        <button className="btn btn-primary" onClick={onQuit} style={{ padding: '16px 48px', fontSize: '1.25rem' }}>Back to Map</button>
      </div>
    );
  }

  if (!currentQuestion) return null;

  const handleCheck = () => {
    if (!selectedAnswer) return;
    const isCorrect = submitAnswer(selectedAnswer);
    setFeedback(isCorrect ? 'correct' : 'wrong');
    
    setTimeout(() => {
      setFeedback('none');
      setSelectedAnswer(null);
    }, 1500);
  };

  const questionPrompt = currentQuestion.type === 'translate_to_native' 
    ? `Translate to your language:` 
    : `Translate to English:`;

  const displayPhrase = currentQuestion.type === 'translate_to_native' 
    ? currentQuestion.phrase.english 
    : (currentQuestion.phrase.translations[nativeLang] || currentQuestion.phrase.english);

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', padding: '1rem', display: 'flex', flexDirection: 'column', minHeight: '90vh' }}>
      {/* Top Bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
        <button className="btn-icon" onClick={onQuit} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>
          <X size={28} />
        </button>
        <div style={{ flex: 1, height: '20px', background: 'var(--glass-bg)', borderRadius: '10px', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.1)' }}>
          <div style={{ width: `${progressPercent}%`, height: '100%', background: 'linear-gradient(90deg, #22c55e, #4ade80)', transition: 'width 0.5s ease-out', borderRadius: '10px' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ef4444', fontWeight: 'bold', fontSize: '1.25rem' }}>
          <Heart size={28} fill="#ef4444" /> {hearts}
        </div>
      </div>

      <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem', fontWeight: 600 }}>{questionPrompt}</h2>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>
        <div style={{ padding: '1.5rem', background: 'var(--glass-bg)', borderRadius: '16px', flex: 1, fontSize: '1.75rem', border: '2px solid var(--glass-border)', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
          {displayPhrase}
        </div>
        {currentQuestion.type === 'translate_to_native' && (
          <button className="btn-icon btn-glass" onClick={() => {
            const u = new SpeechSynthesisUtterance(currentQuestion.phrase.english);
            u.lang = 'en-US';
            window.speechSynthesis.speak(u);
          }} style={{ padding: '1.5rem', borderRadius: '16px' }}>
            <Volume2 size={32} />
          </button>
        )}
      </div>

      {/* Options Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', flex: 1 }}>
        {currentQuestion.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedAnswer(opt)}
            disabled={feedback !== 'none'}
            style={{
              padding: '1.5rem 1rem',
              borderRadius: '16px',
              border: `2px solid ${selectedAnswer === opt ? 'var(--accent-secondary)' : 'var(--glass-border)'}`,
              background: selectedAnswer === opt ? 'rgba(6, 182, 212, 0.15)' : 'var(--glass-bg)',
              color: 'white',
              fontSize: '1.25rem',
              fontWeight: 500,
              cursor: feedback === 'none' ? 'pointer' : 'default',
              transition: 'all 0.2s',
              display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
              boxShadow: selectedAnswer === opt ? '0 4px 0 rgba(6, 182, 212, 0.4)' : '0 4px 0 rgba(0,0,0,0.2)',
              transform: selectedAnswer === opt ? 'translateY(2px)' : 'translateY(0)'
            }}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* Bottom Check Bar */}
      <div style={{ 
        marginTop: '3rem', padding: '1.5rem 2rem', borderRadius: '20px',
        background: feedback === 'correct' ? 'rgba(34, 197, 94, 0.15)' : feedback === 'wrong' ? 'rgba(239, 68, 68, 0.15)' : 'transparent',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        border: feedback !== 'none' ? `2px solid ${feedback === 'correct' ? '#22c55e' : '#ef4444'}` : '2px solid transparent',
        transition: 'all 0.3s'
      }}>
        <div style={{ fontWeight: 'bold', color: feedback === 'correct' ? '#4ade80' : '#f87171', fontSize: '1.5rem', flex: 1 }}>
          {feedback === 'correct' && "Excellent! 🎉"}
          {feedback === 'wrong' && "Incorrect! 😢"}
        </div>
        <button 
          className="btn btn-primary" 
          disabled={!selectedAnswer || feedback !== 'none'} 
          onClick={handleCheck}
          style={{ 
            padding: '16px 48px', fontSize: '1.25rem',
            opacity: (!selectedAnswer || feedback !== 'none') ? 0.5 : 1,
            background: feedback === 'correct' ? '#22c55e' : feedback === 'wrong' ? '#ef4444' : 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))'
          }}
        >
          {feedback !== 'none' ? 'Checking...' : 'Check'}
        </button>
      </div>
    </div>
  );
};
