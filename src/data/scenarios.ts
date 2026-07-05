export interface DialogueOption {
  id: string;
  text: string;
  isCorrect: boolean;
  feedback: string;
}

export interface Scenario {
  id: number;
  title: string;
  npcName: string;
  npcRole: string;
  npcDialogue: string;
  options: DialogueOption[];
  backgroundClass: string;
}

export const scenarios: Scenario[] = [
  {
    id: 1,
    title: "Lost in the City",
    npcName: "Officer Davis",
    npcRole: "Police Officer",
    npcDialogue: "Excuse me, are you lost? How can I help you?",
    backgroundClass: "bg-slate-800",
    options: [
      { id: "1a", text: "Where is the station?", isCorrect: true, feedback: "Great! The officer points you to the train station." },
      { id: "1b", text: "I love you.", isCorrect: false, feedback: "The officer looks very confused." },
      { id: "1c", text: "How much is this?", isCorrect: false, feedback: "The officer says: 'I am not selling anything'." },
      { id: "1d", text: "I am hungry.", isCorrect: false, feedback: "The officer says: 'There is a cafe nearby, but aren't you lost?'" }
    ]
  },
  {
    id: 2,
    title: "Quick Bite",
    npcName: "Sarah",
    npcRole: "Cashier",
    npcDialogue: "Welcome to Burger King! What would you like?",
    backgroundClass: "bg-orange-800",
    options: [
      { id: "2a", text: "I would like this.", isCorrect: true, feedback: "You point at the menu. Sarah nods and prepares your food." },
      { id: "2b", text: "Straight ahead.", isCorrect: false, feedback: "Sarah looks behind her, confused." },
      { id: "2c", text: "Where are you from?", isCorrect: false, feedback: "Sarah says: 'I'm from here, but please order your food.'" },
      { id: "2d", text: "It is too expensive.", isCorrect: false, feedback: "Sarah says: 'Sorry, prices are fixed.'" }
    ]
  },
  {
    id: 3,
    title: "Train Ticket",
    npcName: "Tom",
    npcRole: "Ticket Agent",
    npcDialogue: "That will be $25 for the express train to the airport.",
    backgroundClass: "bg-blue-900",
    options: [
      { id: "3a", text: "Can I pay with card?", isCorrect: true, feedback: "Tom says: 'Yes, insert your card here.' You got the ticket!" },
      { id: "3b", text: "What time is it?", isCorrect: false, feedback: "Tom tells you the time, but still waits for the payment." },
      { id: "3c", text: "I am sick.", isCorrect: false, feedback: "Tom says: 'Oh no, do you need a doctor?'" },
      { id: "3d", text: "I don't know.", isCorrect: false, feedback: "Tom says: 'Well, let me know when you figure it out.'" }
    ]
  },
  {
    id: 4,
    title: "At the Airport",
    npcName: "Agent Smith",
    npcRole: "Immigration Officer",
    npcDialogue: "Passport please. Do you speak English?",
    backgroundClass: "bg-gray-800",
    options: [
      { id: "4a", text: "Yes", isCorrect: true, feedback: "Agent Smith stamps your passport. 'Have a good flight!'" },
      { id: "4b", text: "The bill, please.", isCorrect: false, feedback: "Agent Smith says: 'This is not a restaurant!'" },
      { id: "4c", text: "Water, please.", isCorrect: false, feedback: "Agent Smith says: 'You can buy water inside.'" },
      { id: "4d", text: "Stop.", isCorrect: false, feedback: "Agent Smith looks angry." }
    ]
  }
];
