import React, { useEffect } from 'react';
import { getLevelsForGoal } from '../data/levelScenarios';
import { BookOpen, Lock, Flame, Star, Settings as SettingsIcon } from 'lucide-react';

interface HomeMapProps {
  unlockedLessonId: number;
  streak: number;
  xp: number;
  onStartLesson: (id: number) => void;
  onOpenSettings: () => void;
  goal?: 'work' | 'travel' | 'entertainment' | 'study' | null;
}

export const HomeMap: React.FC<HomeMapProps> = ({ unlockedLessonId, streak, xp, goal, onStartLesson, onOpenSettings }) => {
  const levels = getLevelsForGoal(goal);

  let rank = "Novice";
  if (xp >= 500) rank = "Explorer";
  if (xp >= 1500) rank = "Linguist";
  if (xp >= 3000) rank = "Master";
  if (xp >= 5000) rank = "Legend";

  useEffect(() => {
    const el = document.getElementById(`level-${unlockedLessonId}`);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
    }
  }, [unlockedLessonId]);

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


          <button className="btn-icon btn-glass" onClick={onOpenSettings} title="Settings" style={{ padding: '8px' }}>
            <SettingsIcon size={20} />
          </button>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <img src="/mascot.png" alt="Mascot" style={{ width: '100px', height: '100px', objectFit: 'contain', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
          <h1 style={{ fontSize: '2rem', margin: 0 }}>
            The 1000 Phrases
          </h1>
          <span style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))', color: 'white', padding: '4px 12px', borderRadius: '999px', fontSize: '0.9rem', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(249, 115, 22, 0.4)' }}>
            Rank: {rank}
          </span>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '0.5rem' }}>Master the most spoken phrases in English!</p>
      </div>

      {/* Path */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem', paddingBottom: '4rem' }}>
        {levels.map((level, index) => {
          // Render all generated levels
          const isUnlocked = level.id <= unlockedLessonId;
          const isCurrent = level.id === unlockedLessonId;
          
          // Zig-zag pattern
          const offset = index % 2 === 0 ? '-40px' : '40px';

          return (
            <div id={`level-${level.id}`} key={level.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: `translateX(${offset})`, position: 'relative' }}>
              
              {/* Category Marker if it's the first of its kind */}
              {index === 0 && <div className="category-label">Beginner</div>}
              {level.id === 31 && <div className="category-label">Intermediate</div>}
              {level.id === 71 && <div className="category-label">Advanced</div>}

              <button 
                onClick={() => isUnlocked && onStartLesson(level.id)}
                style={{
                  width: '90px', height: '90px',
                  borderRadius: '50%',
                  border: '4px solid',
                  borderColor: isCurrent ? 'rgba(255,255,255,0.4)' : 'transparent',
                  background: isUnlocked 
                    ? (isCurrent ? 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' : 'var(--accent-primary)')
                    : 'var(--glass-bg)',
                  color: isUnlocked ? 'white' : 'var(--text-secondary)',
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                  cursor: isUnlocked ? 'pointer' : 'not-allowed',
                  boxShadow: isUnlocked ? '0 10px 0 rgba(0,0,0,0.2)' : '0 10px 0 rgba(0,0,0,0.1)',
                  transform: isCurrent ? 'scale(1.1)' : 'scale(1)',
                  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  position: 'relative',
                  marginTop: (level.id === 1 || level.id === 31 || level.id === 71) ? '40px' : '0'
                }}
                className={isCurrent ? "animate-pulse" : ""}
              >
                {isUnlocked ? (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                     <BookOpen size={28} />
                     <span style={{ fontSize: '1rem', fontWeight: 'bold', marginTop: '2px' }}>{level.id}</span>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                     <Lock size={28} />
                     <span style={{ fontSize: '1rem', fontWeight: 'bold', marginTop: '2px', opacity: 0.5 }}>{level.id}</span>
                  </div>
                )}
              </button>
              
              <div style={{ marginTop: '1.5rem', textAlign: 'center', background: isCurrent ? 'rgba(249, 115, 22, 0.15)' : 'var(--glass-bg)', padding: '12px 16px', borderRadius: '12px', minWidth: '220px', border: '1px solid', borderColor: isCurrent ? 'var(--accent-primary)' : 'var(--glass-border)', transition: 'all 0.3s' }}>
                <div style={{ fontWeight: 'bold', marginBottom: '4px', fontSize: '1.1rem' }}>
                  {level.title}
                  {isCurrent && <span style={{ marginLeft: '8px', fontSize: '0.75rem', background: 'var(--accent-primary)', color: 'white', padding: '2px 8px', borderRadius: '12px', verticalAlign: 'middle' }}>CURRENT</span>}
                </div>
                <div style={{ fontSize: '0.85rem', color: isCurrent ? 'white' : 'var(--text-secondary)' }}>{level.description}</div>
              </div>
            </div>
          );
        })}
        
        {/* Load more placeholder removed */}
      </div>
    </div>
  );
};
