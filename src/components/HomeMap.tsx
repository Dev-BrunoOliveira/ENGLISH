import React, { useState, useEffect } from 'react';
import { getLevelsForGoal } from '../data/levelScenarios';
import { BookOpen, Lock, Flame, Star, Settings as SettingsIcon, Award, Target, ChevronRight, Gift, CheckCircle2 } from 'lucide-react';
import { LeaderboardModal, getLeagueInfo } from './LeaderboardModal';
import { AchievementsModal, achievementsList } from './AchievementsModal';
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

const defaultQuests = [
  { id: 'q1', title: 'Lições do Dia', description: 'Conclua 2 lições hoje.', icon: '📖', rewardXp: 40, target: 2 },
  { id: 'q2', title: 'Treino de Voz', description: 'Treine pronúncia 3 vezes.', icon: '🗣️', rewardXp: 30, target: 3 },
  { id: 'q3', title: 'Meta de XP', description: 'Acumule 60 XP hoje.', icon: '⚡', rewardXp: 50, target: 60 },
];

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
  
  // Quests & Achievements state for Desktop widget
  const [questProgress, setQuestProgress] = useState<Record<string, { current: number; claimed: boolean }>>({
    q1: { current: 1, claimed: false },
    q2: { current: 2, claimed: false },
    q3: { current: Math.min(60, xp), claimed: false },
  });
  const [claimedAchievements, setClaimedAchievements] = useState<string[]>([]);

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

    // Load saved quest/achievement state
    const todayStr = new Date().toDateString();
    const savedQuests = localStorage.getItem('laranjolingo_daily_quests');
    if (savedQuests) {
      try {
        const parsed = JSON.parse(savedQuests);
        if (parsed.date === todayStr) setQuestProgress(parsed.data);
      } catch (e) {}
    }

    const savedAch = localStorage.getItem('laranjolingo_claimed_achievements');
    if (savedAch) {
      try { setClaimedAchievements(JSON.parse(savedAch)); } catch (e) {}
    }
  }, [unlockedLessonId]);

  const handleClaim = (amount: number) => {
    if (onClaimReward) onClaimReward(amount);
  };

  const handleSidebarClaimQuest = (questId: string, rewardXp: number) => {
    const todayStr = new Date().toDateString();
    const current = questProgress[questId] || { current: 0, claimed: false };
    if (current.claimed) return;

    const updatedData = {
      ...questProgress,
      [questId]: { ...current, claimed: true }
    };
    setQuestProgress(updatedData);
    localStorage.setItem('laranjolingo_daily_quests', JSON.stringify({ date: todayStr, data: updatedData }));
    handleClaim(rewardXp);
  };

  // Preview competitors for Desktop Leaderboard widget
  const topCompetitors = [
    { name: 'Lucas Silva', avatar: '👨‍💼', xp: Math.max(xp + 190, 350) },
    { name: 'Você', avatar: '🍊', xp: xp, isUser: true },
    { name: 'Sarah Connor', avatar: '👩‍🎤', xp: Math.max(0, xp - 40) },
  ].sort((a, b) => b.xp - a.xp);

  return (
    <div className="home-layout-container">
      
      {/* Main Column (Path Map & Mascot) */}
      <div className="home-main-column">
        
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

        {/* Mobile Gamification Action Dock (Hidden on Desktop) */}
        <div className="mobile-gamification-dock">
          <button 
            onClick={() => setActiveModal('leaderboard')}
            style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(59, 130, 246, 0.15))',
              border: '1px solid rgba(168, 85, 247, 0.4)', borderRadius: '16px', padding: '12px 8px',
              color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
              cursor: 'pointer', transition: 'transform 0.2s'
            }}
          >
            <div style={{ fontSize: '1.4rem' }}>{league.icon}</div>
            <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Ligas</span>
            <span style={{ fontSize: '0.7rem', color: league.color, fontWeight: 'bold' }}>{league.name.split(' ')[0]}</span>
          </button>

          <button 
            onClick={() => setActiveModal('achievements')}
            style={{
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(234, 88, 12, 0.15))',
              border: '1px solid rgba(249, 115, 22, 0.4)', borderRadius: '16px', padding: '12px 8px',
              color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
              cursor: 'pointer', transition: 'transform 0.2s'
            }}
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
              cursor: 'pointer', transition: 'transform 0.2s'
            }}
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

        {/* Path Map */}
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
      </div>

      {/* Desktop Gamification Sidebar (Widescreen Only) */}
      <aside className="desktop-gamification-sidebar">
        
        {/* League Card Widget */}
        <div className="glass-panel" style={{ padding: '1.25rem', borderRadius: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '1.5rem' }}>{league.icon}</span>
              <div>
                <h3 style={{ fontSize: '1.1rem', margin: 0, color: 'white' }}>{league.name}</h3>
                <span style={{ fontSize: '0.75rem', color: league.color, fontWeight: 'bold' }}>Sua Liga Atual</span>
              </div>
            </div>
            <button 
              onClick={() => setActiveModal('leaderboard')}
              style={{ background: 'none', border: 'none', color: 'var(--accent-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', fontSize: '0.85rem', fontWeight: 'bold' }}
            >
              Ver Tudo <ChevronRight size={16} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {topCompetitors.map((comp, idx) => (
              <div 
                key={idx} 
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '8px 12px', borderRadius: '12px',
                  background: comp.isUser ? 'rgba(249, 115, 22, 0.2)' : 'rgba(255,255,255,0.03)',
                  border: comp.isUser ? '1px solid var(--accent-primary)' : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--text-secondary)', width: '18px' }}>
                    #{idx + 1}
                  </span>
                  <span style={{ fontSize: '1.2rem' }}>{comp.avatar}</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: comp.isUser ? 'bold' : 'normal', color: comp.isUser ? 'var(--accent-primary)' : 'white' }}>
                    {comp.name}
                  </span>
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'white' }}>
                  {comp.xp} XP
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Quests Widget */}
        <div className="glass-panel" style={{ padding: '1.25rem', borderRadius: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Target size={22} color="#10b981" />
              <h3 style={{ fontSize: '1.1rem', margin: 0, color: 'white' }}>Missões Diárias</h3>
            </div>
            <button 
              onClick={() => setActiveModal('quests')}
              style={{ background: 'none', border: 'none', color: '#10b981', cursor: 'pointer', display: 'flex', alignItems: 'center', fontSize: '0.85rem', fontWeight: 'bold' }}
            >
              Ver Detalhes <ChevronRight size={16} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {defaultQuests.map((quest) => {
              const data = questProgress[quest.id] || { current: 0, claimed: false };
              const isCompleted = data.current >= quest.target;
              const isClaimed = data.claimed;
              const percent = Math.min(100, Math.round((data.current / quest.target) * 100));

              return (
                <div key={quest.id} style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 12px', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'white', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span>{quest.icon}</span> {quest.title}
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--accent-secondary)', fontWeight: 'bold' }}>
                      +{quest.rewardXp} XP
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ flex: 1, height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '999px', overflow: 'hidden' }}>
                      <div style={{ width: `${percent}%`, height: '100%', background: isClaimed ? '#10b981' : 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))' }} />
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{data.current}/{quest.target}</span>
                  </div>

                  {isCompleted && !isClaimed && (
                    <button 
                      onClick={() => handleSidebarClaimQuest(quest.id, quest.rewardXp)}
                      style={{
                        width: '100%', marginTop: '8px', padding: '6px', borderRadius: '8px',
                        background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                        color: 'white', border: 'none', fontWeight: 'bold', fontSize: '0.75rem', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px'
                      }}
                    >
                      <Gift size={14} /> Resgatar Recompensa
                    </button>
                  )}
                  {isClaimed && (
                    <div style={{ marginTop: '6px', fontSize: '0.75rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 'bold' }}>
                      <CheckCircle2 size={14} /> Resgatado
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements Preview Widget */}
        <div className="glass-panel" style={{ padding: '1.25rem', borderRadius: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={22} color="var(--accent-primary)" />
              <h3 style={{ fontSize: '1.1rem', margin: 0, color: 'white' }}>Conquistas</h3>
            </div>
            <button 
              onClick={() => setActiveModal('achievements')}
              style={{ background: 'none', border: 'none', color: 'var(--accent-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', fontSize: '0.85rem', fontWeight: 'bold' }}
            >
              Ver 7 Medalhas <ChevronRight size={16} />
            </button>
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {achievementsList.slice(0, 5).map((ach) => {
              const { isUnlocked } = ach.condition(xp, streak, unlockedLessonId);
              const isClaimed = claimedAchievements.includes(ach.id);
              const active = isUnlocked || isClaimed;
              return (
                <div 
                  key={ach.id} 
                  title={`${ach.title}: ${ach.description}`}
                  style={{
                    width: '44px', height: '44px', borderRadius: '50%',
                    background: active ? 'rgba(249, 115, 22, 0.2)' : 'rgba(255,255,255,0.05)',
                    border: active ? '1px solid var(--accent-primary)' : '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
                    opacity: active ? 1 : 0.4
                  }}
                >
                  {ach.icon}
                </div>
              );
            })}
          </div>
        </div>

      </aside>

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
