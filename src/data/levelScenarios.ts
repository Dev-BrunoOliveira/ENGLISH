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
}

export interface LevelData {
  id: number;
  title: string;
  description: string;
  category: 'Beginner' | 'Intermediate' | 'Advanced';
  scenarios: Scenario[];
}

export const top1000Levels: LevelData[] = [
  {
    id: 1,
    title: "Level 1: The First Steps",
    description: "Learn the most basic greetings and introductions.",
    category: "Beginner",
    scenarios: [
      {
        id: 101,
        npcName: "John",
        npcRole: "Neighbor",
        npcDialogue: "Hello! Good morning.",
        translatedDialogue: { pt: "Olá! Bom dia." },
        backgroundClass: "bg-slate-800",
        requiresSpeaking: true, 
        options: [
          { id: "1a", text: "Good morning!", isCorrect: true, feedback: "John smiles and waves." },
          { id: "1b", text: "I am hungry.", isCorrect: false, feedback: "John looks confused." },
        ]
      },
      {
        id: 102,
        npcName: "Mary",
        npcRole: "Colleague",
        npcDialogue: "How are you today?",
        translatedDialogue: { pt: "Como você está hoje?" },
        backgroundClass: "bg-blue-900",
        requiresSpeaking: false,
        options: [
          { id: "2a", text: "I am fine, thank you.", isCorrect: true, feedback: "Mary nods happily." },
          { id: "2b", text: "Where is the bathroom?", isCorrect: false, feedback: "Mary points down the hall, but feels ignored." },
          { id: "2c", text: "Goodbye.", isCorrect: false, feedback: "Mary says: 'Oh, leaving so soon?'" },
        ]
      },
      {
        id: 103,
        npcName: "Paul",
        npcRole: "Barista",
        npcDialogue: "What is your name?",
        translatedDialogue: { pt: "Qual é o seu nome?" },
        backgroundClass: "bg-orange-800",
        requiresSpeaking: true,
        options: [
          { id: "3a", text: "My name is...", isCorrect: true, feedback: "Paul writes it on your cup." },
          { id: "3b", text: "Yes, please.", isCorrect: false, feedback: "Paul says: 'I didn't ask a yes or no question...'" },
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Level 2: Basic Needs",
    description: "Learn how to ask for basic things and help.",
    category: "Beginner",
    scenarios: [
      {
        id: 201,
        npcName: "Officer Davis",
        npcRole: "Police Officer",
        npcDialogue: "Excuse me, are you lost?",
        translatedDialogue: { pt: "Com licença, você está perdido?" },
        backgroundClass: "bg-gray-800",
        requiresSpeaking: false,
        options: [
          { id: "1a", text: "Yes, I need help.", isCorrect: true, feedback: "The officer approaches to help." },
          { id: "1b", text: "I don't understand.", isCorrect: false, feedback: "The officer speaks louder." },
        ]
      },
      {
        id: 202,
        npcName: "Sarah",
        npcRole: "Cashier",
        npcDialogue: "That will be ten dollars, please.",
        translatedDialogue: { pt: "Fica em dez dólares, por favor." },
        backgroundClass: "bg-orange-700",
        requiresSpeaking: true,
        options: [
          { id: "2a", text: "Can I pay with card?", isCorrect: true, feedback: "Sarah says: 'Yes, insert it here.'" },
          { id: "2b", text: "It is too expensive.", isCorrect: false, feedback: "Sarah stares at you blankly." },
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Level 3: Dining Out",
    description: "Essential phrases for restaurants and cafes.",
    category: "Beginner",
    scenarios: [
      {
        id: 301,
        npcName: "Waiter",
        npcRole: "Restaurant Staff",
        npcDialogue: "Are you ready to order?",
        translatedDialogue: { pt: "Você está pronto para pedir?" },
        backgroundClass: "bg-red-800",
        requiresSpeaking: true,
        options: [
          { id: "1a", text: "Water, please.", isCorrect: true, feedback: "The waiter writes it down." },
          { id: "1b", text: "Straight ahead.", isCorrect: false, feedback: "The waiter looks behind him." },
        ]
      }
    ]
  }
];

// Generate empty placeholder levels up to 100 to show the full map structure
for (let i = 4; i <= 100; i++) {
  let cat: 'Beginner' | 'Intermediate' | 'Advanced' = 'Beginner';
  if (i > 30 && i <= 70) cat = 'Intermediate';
  if (i > 70) cat = 'Advanced';

  top1000Levels.push({
    id: i,
    title: `Level ${i}`,
    description: "Unlock by completing previous levels.",
    category: cat,
    scenarios: [] // Empty for now
  });
}
