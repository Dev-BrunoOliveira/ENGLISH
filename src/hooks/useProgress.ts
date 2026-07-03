import { useState, useEffect } from 'react';

export interface ProgressState {
  nativeLang: string;
  xp: number;
  unlockedLessonId: number;
  streak: number;
  lastPlayedDate: string;
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>(() => {
    const saved = localStorage.getItem('gamifiedProgress');
    if (saved) {
      return JSON.parse(saved);
    }
    return {
      nativeLang: 'pt',
      xp: 0,
      unlockedLessonId: 1,
      streak: 0,
      lastPlayedDate: ''
    };
  });

  useEffect(() => {
    localStorage.setItem('gamifiedProgress', JSON.stringify(progress));
  }, [progress]);

  const setNativeLang = (lang: string) => {
    setProgress(prev => ({ ...prev, nativeLang: lang }));
  };

  const completeLesson = (lessonId: number, earnedXp: number) => {
    setProgress(prev => {
      const today = new Date().toDateString();
      let newStreak = prev.streak;
      
      if (prev.lastPlayedDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (prev.lastPlayedDate === yesterday.toDateString()) {
          newStreak += 1;
        } else {
          newStreak = 1; // Reset streak if missed a day
        }
      }

      return {
        ...prev,
        xp: prev.xp + earnedXp,
        unlockedLessonId: Math.max(prev.unlockedLessonId, lessonId + 1),
        streak: newStreak,
        lastPlayedDate: today
      };
    });
  };

  const resetProgress = () => {
    setProgress({
      nativeLang: progress.nativeLang,
      xp: 0,
      unlockedLessonId: 1,
      streak: 0,
      lastPlayedDate: ''
    });
  };

  return { progress, setNativeLang, completeLesson, resetProgress };
}
