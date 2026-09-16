import React from 'react';
import { Award, ChevronUp, X } from 'lucide-react';

interface LeaderboardModalProps {
  userXp: number;
  userName?: string;
  onClose: () => void;
}

export interface Competitor {
  id: string;
  name: string;
  avatar: string;
  xp: number;
  isUser?: boolean;
}

export const getLeagueInfo = (xp: number) => {
  if (xp >= 3000) return { name: 'Diamond League', color: '#a855f7', icon: '👑', minXp: 3000, maxXp: 99999, gradient: 'linear-gradient(135deg, #a855f7, #ec4899)' };
  if (xp >= 1500) return { name: 'Platinum League', color: '#06b6d4', icon: '💎', minXp: 1500, maxXp: 2999, gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)' };
  if (xp >= 750) return { name: 'Gold League', color: '#eab308', icon: '🥇', minXp: 750, maxXp: 1499, gradient: 'linear-gradient(135deg, #f59e0b, #eab308)' };
  if (xp >= 250) return { name: 'Silver League', color: '#94a3b8', icon: '🥈', minXp: 250, maxXp: 749, gradient: 'linear-gradient(135deg, #64748b, #94a3b8)' };
  return { name: 'Bronze League', color: '#d97706', icon: '🥉', minXp: 0, maxXp: 249, gradient: 'linear-gradient(135deg, #b45309, #d97706)' };
};

export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({ userXp, userName = 'You', onClose }) => {
  const league = getLeagueInfo(userXp);

  // Generate deterministic mock competitors around user's XP
  const mockCompetitors: Competitor[] = [
    { id: '1', name: 'Lucas Silva', avatar: '👨‍💼', xp: Math.max(userXp + 340, league.minXp + 280) },
    { id: '2', name: 'Sarah Connor', avatar: '👩‍🎤', xp: Math.max(userXp + 190, league.minXp + 210) },
    { id: '3', name: 'Pedro Santos', avatar: '👨‍🚀', xp: Math.max(userXp + 85, league.minXp + 130) },
    { id: 'user', name: userName, avatar: '🍊', xp: userXp, isUser: true },
    { id: '4', name: 'Emily Watson', avatar: '👩‍🏫', xp: Math.max(0, userXp - 45) },
    { id: '5', name: 'Carlos Gomez', avatar: '👨‍🎨', xp: Math.max(0, userXp - 110) },
    { id: '6', name: 'Aisha Khan', avatar: '👩‍💻', xp: Math.max(0, userXp - 180) },
    { id: '7', name: 'Kenji Sato', avatar: '🥷', xp: Math.max(0, userXp - 240) },
  ].sort((a, b) => b.xp - a.xp);

  const userRank = mockCompetitors.findIndex(c => c.isUser) + 1;

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '1rem'
    }}>
      <div className="glass-panel" style={{
        width: '100%', maxWidth: '480px', maxHeight: '90vh', overflowY: 'auto',
        padding: '2rem 1.5rem', position: 'relative', display: 'flex', flexDirection: 'column', gap: '1.25rem'
      }}>
        {/* Close button */}
        <button 
          onClick={onClose} 
          style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}
        >
          <X size={24} />
        </button>

        {/* League Header */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '3rem', margin: '0 auto 0.5rem auto', width: '80px', height: '80px',
            borderRadius: '50%', background: league.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 8px 24px ${league.color}66`
          }}>
            {league.icon}
          </div>
          <h2 style={{ fontSize: '1.8rem', margin: 0, color: 'white' }}>{league.name}</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '4px' }}>
            Top 3 advance to the next league! Reset in 3 days.
          </p>
        </div>

        {/* User Stats Card */}
        <div style={{
          background: 'rgba(255,255,255,0.06)', borderRadius: '16px', padding: '12px 20px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: `1px solid ${league.color}44`
        }}>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Your Rank</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: league.color }}>#{userRank}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Weekly XP</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>{userXp} XP</div>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Status</div>
            {userRank <= 3 ? (
              <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '2px' }}>
                <ChevronUp size={16} /> Promotion
              </span>
            ) : (
              <span style={{ color: '#f59e0b', fontWeight: 'bold', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '2px' }}>
                Safe Zone
              </span>
            )}
          </div>
        </div>

        {/* Leaderboard List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {mockCompetitors.map((comp, index) => {
            const rank = index + 1;
            const isTop3 = rank <= 3;

            return (
              <div 
                key={comp.id}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '12px 16px', borderRadius: '14px',
                  background: comp.isUser ? 'linear-gradient(90deg, rgba(249, 115, 22, 0.25), rgba(234, 88, 12, 0.15))' : 'rgba(255,255,255,0.04)',
                  border: comp.isUser ? '1px solid var(--accent-primary)' : '1px solid transparent',
                  transform: comp.isUser ? 'scale(1.02)' : 'none',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span style={{
                    width: '28px', fontWeight: 'bold', textAlign: 'center',
                    color: rank === 1 ? '#f59e0b' : rank === 2 ? '#94a3b8' : rank === 3 ? '#b45309' : 'var(--text-secondary)',
                    fontSize: '1.1rem'
                  }}>
                    {rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `#${rank}`}
                  </span>
                  <span style={{ fontSize: '1.5rem' }}>{comp.avatar}</span>
                  <div>
                    <div style={{ fontWeight: comp.isUser ? 'bold' : '500', color: comp.isUser ? 'var(--accent-primary)' : 'white' }}>
                      {comp.name} {comp.isUser && '(You)'}
                    </div>
                    {isTop3 && (
                      <span style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 'bold' }}>Promotion Zone</span>
                    )}
                  </div>
                </div>

                <div style={{ fontWeight: 'bold', color: 'white', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Award size={16} color={league.color} /> {comp.xp} XP
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
