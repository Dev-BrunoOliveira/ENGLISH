import { useState } from 'react';
import { useProgress } from './hooks/useProgress';
import { useAuth } from './hooks/useAuth';
import { HomeMap } from './components/HomeMap';
import { LessonSession } from './components/LessonSession';
import { Settings } from './components/Settings';
import { Auth } from './components/Auth';
import { SurvivalGame } from './components/SurvivalGame';

function App() {
  const { user, login, signup, logout } = useAuth();
  const { progress, setNativeLang, completeLesson, resetProgress } = useProgress();
  const [view, setView] = useState<'home' | 'lesson' | 'settings' | 'survival'>('home');
  const [activeLessonId, setActiveLessonId] = useState<number | null>(null);

  // If there is no authenticated user, only show the Auth component
  if (!user) {
    return <Auth onLogin={login} onSignup={signup} />;
  }

  const handleStartLesson = (id: number) => {
    setActiveLessonId(id);
    setView('lesson');
  };

  const handleCompleteLesson = (earnedXp: number) => {
    if (activeLessonId) {
      completeLesson(activeLessonId, earnedXp);
    }
    setView('home');
    setActiveLessonId(null);
  };

  const handleQuitLesson = () => {
    setView('home');
    setActiveLessonId(null);
  };

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '2rem 1rem' }}>
      {view === 'home' && (
        <HomeMap 
          unlockedLessonId={progress.unlockedLessonId}
          streak={progress.streak}
          xp={progress.xp}
          nativeLang={progress.nativeLang}
          onSetNativeLang={setNativeLang}
          onStartLesson={handleStartLesson}
          onStartSurvivalGame={() => setView('survival')}
          onOpenSettings={() => setView('settings')}
        />
      )}

      {view === 'lesson' && activeLessonId && (
        <LessonSession 
          lessonId={activeLessonId}
          nativeLang={progress.nativeLang}
          onComplete={handleCompleteLesson}
          onQuit={handleQuitLesson}
        />
      )}

      {view === 'survival' && (
        <SurvivalGame 
          onQuit={() => setView('home')}
          onWin={(remainingTime) => {
            // Give XP based on time remaining!
            completeLesson(999, Math.floor(remainingTime / 2)); 
            setView('home');
          }}
        />
      )}

      {view === 'settings' && (
        <Settings 
          onResetProgress={resetProgress}
          onLogout={logout}
          onClose={() => setView('home')}
        />
      )}
    </div>
  );
}

export default App;
