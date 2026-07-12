import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export interface ProgressState {
  nativeLang: string;
  xp: number;
  unlockedLessonId: number;
  streak: number;
  lastPlayedDate: string;
  goal?: 'work' | 'travel' | 'entertainment' | 'study' | null;
}

export function useProgress(userId?: string) {
  const [progress, setProgress] = useState<ProgressState>({
    nativeLang: 'pt',
    xp: 0,
    unlockedLessonId: 1,
    streak: 0,
    lastPlayedDate: '',
    goal: null
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      fetchProgress(userId);
    } else {
      setLoading(false);
    }
  }, [userId]);

  const fetchProgress = async (uid: string) => {
    setLoading(true);
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', uid)
      .maybeSingle();

    if (error) {
      console.error('Error fetching progress:', error);
    }

    if (data) {
      setProgress({
        nativeLang: data.native_lang,
        xp: data.xp,
        unlockedLessonId: data.unlocked_lesson_id,
        streak: data.streak,
        lastPlayedDate: data.last_played_date,
        goal: data.goal
      });
    } else {
      // Create default progress for new user
      const defaultProgress = {
        user_id: uid,
        native_lang: 'pt',
        xp: 0,
        unlocked_lesson_id: 1,
        streak: 0,
        last_played_date: '',
        goal: null
      };
      await supabase.from('user_progress').insert(defaultProgress);
    }
    setLoading(false);
  };

  const updateProgressInDB = async (newProgress: Partial<ProgressState>) => {
    if (!userId) return;
    
    const dbPayload: any = {};
    if (newProgress.nativeLang !== undefined) dbPayload.native_lang = newProgress.nativeLang;
    if (newProgress.xp !== undefined) dbPayload.xp = newProgress.xp;
    if (newProgress.unlockedLessonId !== undefined) dbPayload.unlocked_lesson_id = newProgress.unlockedLessonId;
    if (newProgress.streak !== undefined) dbPayload.streak = newProgress.streak;
    if (newProgress.lastPlayedDate !== undefined) dbPayload.last_played_date = newProgress.lastPlayedDate;
    if (newProgress.goal !== undefined) dbPayload.goal = newProgress.goal;

    await supabase
      .from('user_progress')
      .update(dbPayload)
      .eq('user_id', userId);
  };

  const setNativeLang = (lang: string) => {
    setProgress(prev => ({ ...prev, nativeLang: lang }));
    updateProgressInDB({ nativeLang: lang });
  };

  const setUserGoal = (goal: 'work' | 'travel' | 'entertainment' | 'study') => {
    setProgress(prev => ({ ...prev, goal }));
    updateProgressInDB({ goal });
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

      const newProgress = {
        ...prev,
        xp: prev.xp + earnedXp,
        unlockedLessonId: Math.max(prev.unlockedLessonId, lessonId + 1),
        streak: newStreak,
        lastPlayedDate: today
      };
      
      updateProgressInDB(newProgress);
      return newProgress;
    });
  };

  const resetProgress = () => {
    const defaultProgress: ProgressState = {
      nativeLang: progress.nativeLang,
      xp: 0,
      unlockedLessonId: 1,
      streak: 0,
      lastPlayedDate: '',
      goal: null
    };
    setProgress(defaultProgress);
    updateProgressInDB(defaultProgress);
  };

  return { progress, loading, setNativeLang, setUserGoal, completeLesson, resetProgress };
}
