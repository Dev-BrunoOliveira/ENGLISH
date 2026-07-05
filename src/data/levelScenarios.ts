import { phrases } from './phrases';

export interface DialogueOption {
  id: string;
  text: string;
  isCorrect: boolean;
  feedback: string;
}

export interface Scenario {
  id: number;
  npcName: string;
  npcRole: string;
  npcDialogue: string; 
  translatedDialogue: Record<string, string>; 
  options: DialogueOption[];
  backgroundClass: string;
  requiresSpeaking: boolean; 
  hideTranslation?: boolean;
}

export interface LevelData {
  id: number;
  title: string;
  description: string;
  category: 'Beginner' | 'Intermediate' | 'Advanced';
  scenarios: Scenario[];
}

// Helpers for procedural generation
const npcs = [
  { name: 'John', role: 'Neighbor' },
  { name: 'Sarah', role: 'Cashier' },
  { name: 'Officer Davis', role: 'Police Officer' },
  { name: 'Mary', role: 'Colleague' },
  { name: 'Paul', role: 'Barista' },
  { name: 'Alice', role: 'Manager' },
  { name: 'Mr. Smith', role: 'Teacher' }
];

const backgrounds = ['bg-slate-800', 'bg-blue-900', 'bg-orange-800', 'bg-gray-800', 'bg-orange-700', 'bg-red-800', 'bg-purple-900'];

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export const getLevelsForGoal = (
  goal?: 'work' | 'travel' | 'entertainment' | 'study' | null,
  nativeLang: string = 'pt'
): LevelData[] => {
  
  const levels: LevelData[] = [];

  for (let i = 1; i <= 100; i++) {
    let cat: 'Beginner' | 'Intermediate' | 'Advanced' = 'Beginner';
    if (i > 30 && i <= 70) cat = 'Intermediate';
    if (i > 70) cat = 'Advanced';

    const levelScenarios: Scenario[] = [];

    // Generate 5 questions per level
    for (let q = 1; q <= 5; q++) {
      const npc = getRandomItem(npcs);
      const bg = getRandomItem(backgrounds);
      
      // Select a random phrase from our database
      const targetPhrase = getRandomItem(phrases);
      
      // Select 2 random WRONG phrases
      let wrongPhrase1 = getRandomItem(phrases);
      while (wrongPhrase1.id === targetPhrase.id) wrongPhrase1 = getRandomItem(phrases);
      
      let wrongPhrase2 = getRandomItem(phrases);
      while (wrongPhrase2.id === targetPhrase.id || wrongPhrase2.id === wrongPhrase1.id) wrongPhrase2 = getRandomItem(phrases);

      const isSpeakingTask = Math.random() > 0.7; // 30% chance of being a speaking task

      let options: DialogueOption[] = [];

      if (isSpeakingTask) {
        // Speaking task: Options are in English, user speaks English
        options = shuffle([
          { id: `q${q}a`, text: targetPhrase.english, isCorrect: true, feedback: 'Perfect pronunciation!' },
          { id: `q${q}b`, text: wrongPhrase1.english, isCorrect: false, feedback: 'Not quite what I asked.' },
          { id: `q${q}c`, text: wrongPhrase2.english, isCorrect: false, feedback: 'That does not make sense here.' }
        ]);
      } else {
        // Listening/Reading task: Options are translated to native language!
        const correctTranslation = targetPhrase.translations[nativeLang] || targetPhrase.english;
        const wrongTranslation1 = wrongPhrase1.translations[nativeLang] || wrongPhrase1.english;
        const wrongTranslation2 = wrongPhrase2.translations[nativeLang] || wrongPhrase2.english;

        options = shuffle([
          { id: `q${q}a`, text: correctTranslation, isCorrect: true, feedback: 'Correct translation!' },
          { id: `q${q}b`, text: wrongTranslation1, isCorrect: false, feedback: 'Wrong meaning!' },
          { id: `q${q}c`, text: wrongTranslation2, isCorrect: false, feedback: 'Incorrect.' }
        ]);
      }

      levelScenarios.push({
        id: parseInt(`${i}0${q}`),
        npcName: npc.name,
        npcRole: npc.role,
        npcDialogue: targetPhrase.english, // The NPC ALWAYS speaks English
        translatedDialogue: targetPhrase.translations, // Available for the UI if needed
        backgroundClass: bg,
        requiresSpeaking: isSpeakingTask,
        hideTranslation: !isSpeakingTask, // Hide translation if it's a multiple choice reading task
        options: options
      });
    }

    levels.push({
      id: i,
      title: `Level ${i}`,
      description: goal ? `Specialized for ${goal.toUpperCase()}` : "Master the 1000 phrases.",
      category: cat,
      scenarios: levelScenarios
    });
  }

  return levels;
};
