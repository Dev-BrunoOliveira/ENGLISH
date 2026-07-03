import React from 'react';
import { lessons, availableLanguages } from '../data/phrases';
import { BookOpen, Lock, Flame, Star, Settings as SettingsIcon } from 'lucide-react';

interface HomeMapProps {
  unlockedLessonId: number;
  streak: number;
  xp: number;
  nativeLang: string;
  onSetNativeLang: (lang: string) => void;
  onStartLesson: (id: number) => void;
  onOpenSettings: () => void;
}

export const HomeMap: React.FC<HomeMapProps> = ({ unlockedLessonId, streak, xp, nativeLang, onSetNativeLang, onStartLesson, onOpenSettings }) => {
  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
      {/* Top Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', background: 'var(--glass-bg)', padding: '1rem', borderRadius: '16px', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#f59e0b', fontWeight: 'bold' }}>
            <Flame size={20} fill={streak > 0 ? "#f59e0b" : "none"} /> {streak}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#3b82f6', fontWeight: 'bold' }}>
            <Star size={20} fill={xp > 0 ? "#3b82f6" : "none"} /> {xp} XP
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <select 
            value={nativeLang}
            onChange={(e) => onSetNativeLang(e.target.value)}
            style={{ 
              padding: '8px 12px', 
              borderRadius: '8px', border: '1px solid var(--glass-border)',
              background: 'rgba(0,0,0,0.2)', color: 'white',
              outline: 'none', fontFamily: 'inherit', fontSize: '0.875rem',
              cursor: 'pointer'
            }}
          >
            {availableLanguages.map(lang => (
              <option key={lang.code} value={lang.code} style={{ color: 'black' }}>{lang.name}</option>
            ))}
          </select>

          <button className="btn-icon btn-glass" onClick={onOpenSettings} title="Settings" style={{ padding: '8px' }}>
            <SettingsIcon size={20} />
          </button>
        </div>
      </div>

      <h1 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
        <img src="/mascot.png" alt="Mascot" style={{ width: '100px', height: '100px', objectFit: 'contain', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }} />
        Learning Path
      </h1>

      {/* Path */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        {lessons.map((lesson, index) => {
          const isUnlocked = lesson.id <= unlockedLessonId;
          const isCurrent = lesson.id === unlockedLessonId;
          
          // Zig-zag pattern
          const offset = index % 2 === 0 ? '-40px' : '40px';

          return (
            <div key={lesson.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: `translateX(${offset})` }}>
              <button 
                onClick={() => isUnlocked && onStartLesson(lesson.id)}
                style={{
                  width: '80px', height: '80px',
                  borderRadius: '50%',
                  border: 'none',
                  background: isUnlocked 
                    ? (isCurrent ? 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' : 'var(--accent-primary)')
                    : 'var(--glass-bg)',
                  color: isUnlocked ? 'white' : 'var(--text-secondary)',
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                  cursor: isUnlocked ? 'pointer' : 'not-allowed',
                  boxShadow: isUnlocked ? '0 8px 0 rgba(0,0,0,0.2)' : '0 8px 0 rgba(0,0,0,0.1)',
                  transform: isCurrent ? 'scale(1.1)' : 'scale(1)',
                  transition: 'all 0.2s',
                  position: 'relative'
                }}
                className={isCurrent ? "animate-pulse" : ""}
              >
                {isUnlocked ? <BookOpen size={32} /> : <Lock size={32} />}
              </button>
              
              <div style={{ marginTop: '1.5rem', textAlign: 'center', background: 'var(--glass-bg)', padding: '12px 16px', borderRadius: '12px', minWidth: '200px' }}>
                <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>{lesson.title}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{lesson.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
