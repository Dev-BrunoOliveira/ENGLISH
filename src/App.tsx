import { useState, useEffect } from 'react';
import { useProgress } from './hooks/useProgress';
import { useAuth } from './hooks/useAuth';
import { HomeMap } from './components/HomeMap';
import { LessonSession } from './components/LessonSession';
import { Settings } from './components/Settings';
import { Auth } from './components/Auth';
import { ScreenTransition } from './components/ScreenTransition';

function App() {
  const { user, login, signup, logout } = useAuth();
  const { progress, setNativeLang, completeLesson, resetProgress } = useProgress();
  const [view, setView] = useState<'home' | 'lesson' | 'settings'>('home');
  const [activeLessonId, setActiveLessonId] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

 
  useEffect(() => {
    if (user) {
      setIsTransitioning(true);
      const timer = setTimeout(() => setIsTransitioning(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [view, user]);

  
  if (!user) {
    return (
      <>
        <Auth onLogin={login} onSignup={signup} />
        <ScreenTransition isVisible={isTransitioning} />
      </>
    );
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

      {view === 'settings' && (
        <Settings 
          onResetProgress={resetProgress}
          onLogout={logout}
          onClose={() => setView('home')}
        />
      )}

      <ScreenTransition isVisible={isTransitioning} />
    </div>
  );
}

export default App;
