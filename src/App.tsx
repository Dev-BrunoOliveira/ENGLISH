import { useState, useEffect } from 'react';
import { useProgress } from './hooks/useProgress';
import { useAuth } from './hooks/useAuth';
import { HomeMap } from './components/HomeMap';
import { LessonSession } from './components/LessonSession';
import { Settings } from './components/Settings';
import { Auth } from './components/Auth';
import { ScreenTransition } from './components/ScreenTransition';
import { GoalSelection } from './components/GoalSelection';
import { LoadingVideo } from './components/LoadingVideo';

function App() {
  const { user, loading: authLoading, login, loginWithGoogle, signup, logout } = useAuth();
  const { progress, loading: progressLoading, setNativeLang, setUserGoal, completeLesson, resetProgress } = useProgress(user?.id);
  const [view, setView] = useState<'home' | 'lesson' | 'settings' | 'onboarding'>('home');
  const [activeLessonId, setActiveLessonId] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);


  useEffect(() => {
    // Clear legacy local storage data from previous versions
    localStorage.removeItem('gamifiedProgress');
    localStorage.removeItem('englishAppUser');
  }, []);



  const navigateWithTransition = (
    newView: 'home' | 'lesson' | 'settings' | 'onboarding',
    lessonId: number | null = null,
    duration: number = 1500
  ) => {
    setIsTransitioning(true);
    
    // Altera a tela na metade da transição (quando o loading está 100% visível)
    setTimeout(() => {
      setView(newView);
      if (lessonId !== null) setActiveLessonId(lessonId);
    }, duration / 2);

    // Finaliza a transição
    setTimeout(() => {
      setIsTransitioning(false);
    }, duration);
  };

  useEffect(() => {
    if (user && !progressLoading) {
      if (!progress.goal) {
        navigateWithTransition('onboarding', null, 1500);
      } else {
        navigateWithTransition('home', null, 1500);
      }
    }
  }, [user, progressLoading]);

  const handleSelectGoal = (goalId: 'work' | 'travel' | 'entertainment' | 'study') => {
    setUserGoal(goalId);
    navigateWithTransition('lesson', progress.unlockedLessonId || 1, 1500);
  };

  if (authLoading || (user && progressLoading)) {
    return (
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: 'var(--bg-color)' }}>
        <LoadingVideo />
      </div>
    );
  }

  if (!user) {
    return (
      <>
        <Auth onLogin={login} onSignup={signup} onGoogleLogin={loginWithGoogle} />
        <ScreenTransition isVisible={isTransitioning} />
      </>
    );
  }

  const handleStartLesson = (id: number) => {
    navigateWithTransition('lesson', id, 1500);
  };

  const handleCompleteLesson = (earnedXp: number) => {
    if (activeLessonId) {
      completeLesson(activeLessonId, earnedXp);
    }
    navigateWithTransition('home', null, 1500);
  };

  const handleQuitLesson = () => {
    navigateWithTransition('home', null, 1500);
  };

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '2rem 1rem' }}>
      {view === 'onboarding' && (
        <GoalSelection 
          nativeLang={progress.nativeLang}
          onSetNativeLang={setNativeLang}
          onSelectGoal={handleSelectGoal} 
        />
      )}

      {view === 'home' && (
        <HomeMap 
          unlockedLessonId={progress.unlockedLessonId}
          streak={progress.streak}
          xp={progress.xp}
          goal={progress.goal}

          onStartLesson={handleStartLesson}
          onOpenSettings={() => navigateWithTransition('settings', null, 800)}
        />
      )}

      {view === 'lesson' && activeLessonId && (
        <LessonSession 
          lessonId={activeLessonId}
          nativeLang={progress.nativeLang}
          goal={progress.goal}
          streak={progress.streak}
          xp={progress.xp}
          onComplete={handleCompleteLesson}
          onQuit={handleQuitLesson}
        />
      )}

      {view === 'settings' && (
        <Settings 
          onResetProgress={resetProgress}
          onLogout={logout}
          onClose={() => navigateWithTransition('home', null, 800)}
        />
      )}

      <ScreenTransition isVisible={isTransitioning} />
    </div>
  );
}

export default App;
