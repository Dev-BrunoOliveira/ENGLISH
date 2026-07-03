import React, { useState } from 'react';
import { useProgress } from './hooks/useProgress';
import { useAuth } from './hooks/useAuth';
import { HomeMap } from './components/HomeMap';
import { LessonSession } from './components/LessonSession';
import { Settings } from './components/Settings';
import { Auth } from './components/Auth';

function App() {
  const { user, login, signup, logout } = useAuth();
  const { progress, setNativeLang, completeLesson, resetProgress } = useProgress();
  const [view, setView] = useState<'home' | 'lesson' | 'settings'>('home');
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
    </div>
  );
}

export default App;
