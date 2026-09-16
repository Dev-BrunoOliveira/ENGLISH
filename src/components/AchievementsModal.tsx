import React, { useState, useEffect } from 'react';
import { CheckCircle, Lock, X, Gift } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  rewardXp: number;
  condition: (xp: number, streak: number, unlockedLessonId: number) => { isUnlocked: boolean; progress: number; max: number };
}

export const achievementsList: Achievement[] = [
  {
    id: 'first_lesson',
    title: 'Primeiros Passos',
    description: 'Complete sua primeira lição no Laranjolingo.',
    icon: '🎯',
    rewardXp: 25,
    condition: (_, __, unlockedLessonId) => ({ isUnlocked: unlockedLessonId > 1, progress: Math.min(1, unlockedLessonId - 1), max: 1 })
  },
  {
    id: 'streak_3',
    title: 'Em Chamas',
    description: 'Mantenha uma ofensiva de 3 dias seguidos.',
    icon: '🔥',
    rewardXp: 50,
    condition: (_, streak) => ({ isUnlocked: streak >= 3, progress: Math.min(3, streak), max: 3 })
  },
  {
    id: 'streak_7',
    title: 'Imparável',
    description: 'Alcançe 7 dias seguidos de ofensiva.',
    icon: '⚡',
    rewardXp: 100,
    condition: (_, streak) => ({ isUnlocked: streak >= 7, progress: Math.min(7, streak), max: 7 })
  },
  {
    id: 'xp_100',
    title: 'Estrela Ascendente',
    description: 'Acumule 100 XP em sua jornada.',
    icon: '🌟',
    rewardXp: 50,
    condition: (xp) => ({ isUnlocked: xp >= 100, progress: Math.min(100, xp), max: 100 })
  },
  {
    id: 'xp_500',
    title: 'Titã da Língua',
    description: 'Conquiste 500 XP acumulados.',
    icon: '👑',
    rewardXp: 150,
    condition: (xp) => ({ isUnlocked: xp >= 500, progress: Math.min(500, xp), max: 500 })
  },
  {
    id: 'lessons_10',
    title: 'Buscador de Conhecimento',
    description: 'Desbloqueie até a lição 10.',
    icon: '🎓',
    rewardXp: 100,
    condition: (_, __, unlockedLessonId) => ({ isUnlocked: unlockedLessonId >= 10, progress: Math.min(10, unlockedLessonId), max: 10 })
  },
  {
    id: 'lessons_30',
    title: 'Intermediário Avançado',
    description: 'Desbloqueie até a lição 30.',
    icon: '🚀',
    rewardXp: 200,
    condition: (_, __, unlockedLessonId) => ({ isUnlocked: unlockedLessonId >= 30, progress: Math.min(30, unlockedLessonId), max: 30 })
  },
];

interface AchievementsModalProps {
  xp: number;
  streak: number;
  unlockedLessonId: number;
  onClaimReward: (rewardXp: number) => void;
  onClose: () => void;
}

export const AchievementsModal: React.FC<AchievementsModalProps> = ({ xp, streak, unlockedLessonId, onClaimReward, onClose }) => {
  const [claimedIds, setClaimedIds] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('laranjolingo_claimed_achievements');
    if (saved) {
      try { setClaimedIds(JSON.parse(saved)); } catch (e) {}
    }
  }, []);

  const handleClaim = (achievement: Achievement) => {
    if (claimedIds.includes(achievement.id)) return;
    const updated = [...claimedIds, achievement.id];
    setClaimedIds(updated);
    localStorage.setItem('laranjolingo_claimed_achievements', JSON.stringify(updated));
    onClaimReward(achievement.rewardXp);
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '1rem'
    }}>
      <div className="glass-panel" style={{
        width: '100%', maxWidth: '500px', maxHeight: '90vh', overflowY: 'auto',
        padding: '2rem 1.5rem', position: 'relative', display: 'flex', flexDirection: 'column', gap: '1.25rem'
      }}>
        <button 
          onClick={onClose} 
          style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}
        >
          <X size={24} />
        </button>

        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>🎖️</div>
          <h2 style={{ fontSize: '1.8rem', margin: 0, color: 'white' }}>Conquistas & Medalhas</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '4px' }}>
            Desbloqueie marcos para ganhar XP bônus!
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {achievementsList.map((ach) => {
            const { isUnlocked, progress, max } = ach.condition(xp, streak, unlockedLessonId);
            const isClaimed = claimedIds.includes(ach.id);
            const percent = Math.round((progress / max) * 100);

            return (
              <div 
                key={ach.id}
                style={{
                  background: isClaimed 
                    ? 'rgba(16, 185, 129, 0.1)' 
                    : isUnlocked 
                      ? 'linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(234, 88, 12, 0.08))' 
                      : 'rgba(255,255,255,0.03)',
                  border: isClaimed 
                    ? '1px solid rgba(16, 185, 129, 0.3)' 
                    : isUnlocked 
                      ? '1px solid var(--accent-primary)' 
                      : '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px', padding: '16px',
                  display: 'flex', gap: '14px', alignItems: 'center'
                }}
              >
                <div style={{
                  fontSize: '2rem', width: '56px', height: '56px', borderRadius: '50%',
                  background: isUnlocked ? 'rgba(249, 115, 22, 0.2)' : 'rgba(255,255,255,0.05)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  {ach.icon}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '1.05rem', margin: 0, color: 'white' }}>{ach.title}</h3>
                    <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--accent-secondary)' }}>
                      +{ach.rewardXp} XP
                    </span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '4px 0 8px 0' }}>
                    {ach.description}
                  </p>

                  {/* Progress bar */}
                  <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '999px', overflow: 'hidden' }}>
                    <div style={{
                      width: `${percent}%`, height: '100%',
                      background: isClaimed ? '#10b981' : 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
                      transition: 'width 0.4s ease'
                    }} />
                  </div>
                </div>

                {/* Status / Claim Button */}
                <div style={{ flexShrink: 0 }}>
                  {isClaimed ? (
                    <span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                      <CheckCircle size={18} /> Resgatado
                    </span>
                  ) : isUnlocked ? (
                    <button 
                      onClick={() => handleClaim(ach)}
                      style={{
                        background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                        color: 'white', border: 'none', borderRadius: '12px', padding: '8px 14px',
                        fontSize: '0.85rem', fontWeight: 'bold', cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(249, 115, 22, 0.4)', display: 'flex', alignItems: 'center', gap: '6px'
                      }}
                    >
                      <Gift size={16} /> Resgatar
                    </button>
                  ) : (
                    <span style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem' }}>
                      <Lock size={16} /> {progress}/{max}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
