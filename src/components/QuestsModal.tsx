import React, { useState, useEffect } from 'react';
import { CheckCircle2, Gift, X } from 'lucide-react';

interface Quest {
  id: string;
  title: string;
  description: string;
  icon: string;
  rewardXp: number;
  target: number;
}

const defaultQuests: Quest[] = [
  { id: 'q1', title: 'Lições do Dia', description: 'Conclua 2 lições para manter o foco.', icon: '📖', rewardXp: 40, target: 2 },
  { id: 'q2', title: 'Treino de Voz', description: 'Treine sua pronúncia 3 vezes.', icon: '🗣️', rewardXp: 30, target: 3 },
  { id: 'q3', title: 'Meta de XP', description: 'Acumule 60 XP hoje.', icon: '⚡', rewardXp: 50, target: 60 },
];

interface QuestsModalProps {
  onClaimReward: (rewardXp: number) => void;
  onClose: () => void;
}

export const QuestsModal: React.FC<QuestsModalProps> = ({ onClaimReward, onClose }) => {
  const [questProgress, setQuestProgress] = useState<Record<string, { current: number; claimed: boolean }>>({
    q1: { current: 1, claimed: false },
    q2: { current: 2, claimed: false },
    q3: { current: 40, claimed: false },
  });

  useEffect(() => {
    const todayStr = new Date().toDateString();
    const saved = localStorage.getItem('laranjolingo_daily_quests');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.date === todayStr) {
          setQuestProgress(parsed.data);
        } else {
          // New day reset
          const fresh = {
            q1: { current: 0, claimed: false },
            q2: { current: 0, claimed: false },
            q3: { current: 0, claimed: false },
          };
          localStorage.setItem('laranjolingo_daily_quests', JSON.stringify({ date: todayStr, data: fresh }));
          setQuestProgress(fresh);
        }
      } catch (e) {}
    } else {
      localStorage.setItem('laranjolingo_daily_quests', JSON.stringify({ date: todayStr, data: questProgress }));
    }
  }, []);

  const handleClaim = (quest: Quest) => {
    const todayStr = new Date().toDateString();
    const current = questProgress[quest.id] || { current: 0, claimed: false };
    if (current.claimed) return;

    const updatedData = {
      ...questProgress,
      [quest.id]: { ...current, claimed: true }
    };
    setQuestProgress(updatedData);
    localStorage.setItem('laranjolingo_daily_quests', JSON.stringify({ date: todayStr, data: updatedData }));
    onClaimReward(quest.rewardXp);
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '1rem'
    }}>
      <div className="glass-panel" style={{
        width: '100%', maxWidth: '480px', maxHeight: '90vh', overflowY: 'auto',
        padding: '2rem 1.5rem', position: 'relative', display: 'flex', flexDirection: 'column', gap: '1.25rem'
      }}>
        <button 
          onClick={onClose} 
          style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}
        >
          <X size={24} />
        </button>

        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>🎯</div>
          <h2 style={{ fontSize: '1.8rem', margin: 0, color: 'white' }}>Missões Diárias</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '4px' }}>
            Renovam a cada 24 horas. Garanta XP extra todos os dias!
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {defaultQuests.map((quest) => {
            const data = questProgress[quest.id] || { current: 0, claimed: false };
            const isCompleted = data.current >= quest.target;
            const isClaimed = data.claimed;
            const percent = Math.min(100, Math.round((data.current / quest.target) * 100));

            return (
              <div 
                key={quest.id}
                style={{
                  background: isClaimed 
                    ? 'rgba(16, 185, 129, 0.1)' 
                    : isCompleted 
                      ? 'linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(234, 88, 12, 0.1))' 
                      : 'rgba(255,255,255,0.03)',
                  border: isClaimed 
                    ? '1px solid rgba(16, 185, 129, 0.3)' 
                    : isCompleted 
                      ? '1px solid var(--accent-primary)' 
                      : '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px', padding: '16px',
                  display: 'flex', gap: '14px', alignItems: 'center'
                }}
              >
                <div style={{
                  fontSize: '2rem', width: '50px', height: '50px', borderRadius: '50%',
                  background: isCompleted ? 'rgba(249, 115, 22, 0.25)' : 'rgba(255,255,255,0.05)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  {quest.icon}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '1rem', margin: 0, color: 'white' }}>{quest.title}</h3>
                    <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--accent-secondary)' }}>
                      +{quest.rewardXp} XP
                    </span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '4px 0 8px 0' }}>
                    {quest.description}
                  </p>

                  {/* Progress bar */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ flex: 1, height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '999px', overflow: 'hidden' }}>
                      <div style={{
                        width: `${percent}%`, height: '100%',
                        background: isClaimed ? '#10b981' : 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
                        transition: 'width 0.4s ease'
                      }} />
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 'bold' }}>
                      {data.current}/{quest.target}
                    </span>
                  </div>
                </div>

                <div style={{ flexShrink: 0 }}>
                  {isClaimed ? (
                    <span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                      <CheckCircle2 size={18} /> Recompensado
                    </span>
                  ) : isCompleted ? (
                    <button 
                      onClick={() => handleClaim(quest)}
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
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', opacity: 0.7 }}>
                      Em andamento
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
