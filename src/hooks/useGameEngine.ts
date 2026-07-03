import { useState, useMemo } from 'react';
import { phrases, type Phrase } from '../data/phrases';

type QuestionType = 'translate_to_native' | 'translate_to_english';

export interface GameQuestion {
  phrase: Phrase;
  type: QuestionType;
  options: string[]; // for multiple choice
}

export function useGameEngine(lessonId: number, nativeLang: string) {
  const [hearts, setHearts] = useState(5);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  
  // Generate questions for the lesson
  const questions = useMemo(() => {
    const lessonPhrases = phrases.filter(p => p.lessonId === lessonId);
    
    // Create an array of questions (1 question per phrase)
    const qs: GameQuestion[] = [];
    lessonPhrases.forEach(p => {
      const isNativeType = Math.random() > 0.5;

      if (isNativeType) {
        // 1. Translate to Native
        const allNative = phrases.map(x => x.translations[nativeLang] || x.english);
        const wrongNative = allNative.filter(x => x !== p.translations[nativeLang]).sort(() => 0.5 - Math.random()).slice(0, 3);
        const optionsNative = [p.translations[nativeLang] || '?', ...wrongNative].sort(() => 0.5 - Math.random());
        
        qs.push({
          phrase: p,
          type: 'translate_to_native',
          options: optionsNative
        });
      } else {
        // 2. Translate to English
        const allEnglish = phrases.map(x => x.english);
        const wrongEnglish = allEnglish.filter(x => x !== p.english).sort(() => 0.5 - Math.random()).slice(0, 3);
        const optionsEnglish = [p.english, ...wrongEnglish].sort(() => 0.5 - Math.random());

        qs.push({
          phrase: p,
          type: 'translate_to_english',
          options: optionsEnglish
        });
      }
    });

    return qs.sort(() => 0.5 - Math.random()); // Shuffle lesson
  }, [lessonId, nativeLang]);

  const currentQuestion = questions[currentIndex];
  const progressPercent = questions.length > 0 ? Math.round((currentIndex / questions.length) * 100) : 0;

  const submitAnswer = (answer: string) => {
    let isCorrect = false;
    if (currentQuestion.type === 'translate_to_native') {
      isCorrect = answer === currentQuestion.phrase.translations[nativeLang];
    } else {
      isCorrect = answer === currentQuestion.phrase.english;
    }

    if (isCorrect) {
      if (currentIndex + 1 >= questions.length) {
        setIsFinished(true);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
      return true;
    } else {
      setHearts(prev => Math.max(0, prev - 1));
      return false;
    }
  };

  return { 
    hearts, 
    currentQuestion, 
    progressPercent, 
    isFinished, 
    submitAnswer,
    totalQuestions: questions.length
  };
}
