import React, { useState, useEffect } from 'react';
import { getLevelsForGoal } from '../data/levelScenarios';
import { BookOpen, Lock, Flame, Star, Settings as SettingsIcon, Award, Target } from 'lucide-react';
import { LeaderboardModal, getLeagueInfo } from './LeaderboardModal';
import { AchievementsModal } from './AchievementsModal';
import { QuestsModal } from './QuestsModal';

interface HomeMapProps {
  unlockedLessonId: number;
  streak: number;
  xp: number;
  onStartLesson: (id: number) => void;
  onOpenSettings: () => void;
  onClaimReward?: (amount: number) => void;
  goal?: 'work' | 'travel' | 'entertainment' | 'study' | null;
}

export const HomeMap: React.FC<HomeMapProps> = ({
  unlockedLessonId,
  streak,
  xp,
  goal,
  onStartLesson,
  onOpenSettings,
  onClaimReward
}) => {
  const levels = getLevelsForGoal(goal);
  const [activeModal, setActiveModal] = useState<'leaderboard' | 'achievements' | 'quests' | null>(null);

  const league = getLeagueInfo(xp);

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

  const handleClaim = (amount: number) => {
    if (onClaimReward) onClaimReward(amount);
  };

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
      
      {/* Top Bar Stats & Settings */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem',
        background: 'var(--glass-bg)', padding: '0.85rem 1.25rem', borderRadius: '20px', flexWrap: 'wrap', gap: '0.75rem',
        border: '1px solid var(--glass-border)'
      }}>
        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#f59e0b', fontWeight: 'bold', fontSize: '1.05rem' }}>
            <Flame size={22} fill={streak > 0 ? "#f59e0b" : "none"} /> {streak}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#3b82f6', fontWeight: 'bold', fontSize: '1.05rem' }}>
            <Star size={22} fill={xp > 0 ? "#3b82f6" : "none"} /> {xp} XP
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <button className="btn-icon btn-glass" onClick={onOpenSettings} title="Configurações" style={{ padding: '8px' }}>
            <SettingsIcon size={20} />
          </button>
        </div>
      </div>

      {/* Gamification Action Dock (Ligas, Conquistas, Missões) */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '2rem'
      }}>
        <button 
          onClick={() => setActiveModal('leaderboard')}
          style={{
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(59, 130, 246, 0.15))',
            border: '1px solid rgba(168, 85, 247, 0.4)', borderRadius: '16px', padding: '12px 8px',
            color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
            cursor: 'pointer', transition: 'transform 0.2s', boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <div style={{ fontSize: '1.4rem' }}>{league.icon}</div>
          <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Ligas & Rank</span>
          <span style={{ fontSize: '0.7rem', color: league.color, fontWeight: 'bold' }}>{league.name.split(' ')[0]}</span>
        </button>

        <button 
          onClick={() => setActiveModal('achievements')}
          style={{
            background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(234, 88, 12, 0.15))',
            border: '1px solid rgba(249, 115, 22, 0.4)', borderRadius: '16px', padding: '12px 8px',
            color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
            cursor: 'pointer', transition: 'transform 0.2s', boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <Award size={22} color="var(--accent-primary)" />
          <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Conquistas</span>
          <span style={{ fontSize: '0.7rem', color: 'var(--accent-secondary)' }}>Medalhas</span>
        </button>

        <button 
          onClick={() => setActiveModal('quests')}
          style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15))',
            border: '1px solid rgba(16, 185, 129, 0.4)', borderRadius: '16px', padding: '12px 8px',
            color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
            cursor: 'pointer', transition: 'transform 0.2s', boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <Target size={22} color="#10b981" />
          <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Missões</span>
          <span style={{ fontSize: '0.7rem', color: '#10b981' }}>Diárias</span>
        </button>
      </div>

      {/* Mascot & Header */}
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
          const isUnlocked = level.id <= unlockedLessonId;
          const isCurrent = level.id === unlockedLessonId;
          const offset = index % 2 === 0 ? '-40px' : '40px';

          return (
            <div id={`level-${level.id}`} key={level.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: `translateX(${offset})`, position: 'relative' }}>
              
              {/* Category Marker */}
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
      </div>

      {/* Modals */}
      {activeModal === 'leaderboard' && (
        <LeaderboardModal userXp={xp} onClose={() => setActiveModal(null)} />
      )}

      {activeModal === 'achievements' && (
        <AchievementsModal 
          xp={xp} 
          streak={streak} 
          unlockedLessonId={unlockedLessonId} 
          onClaimReward={handleClaim} 
          onClose={() => setActiveModal(null)} 
        />
      )}

      {activeModal === 'quests' && (
        <QuestsModal 
          onClaimReward={handleClaim} 
          onClose={() => setActiveModal(null)} 
        />
      )}

    </div>
  );
};
