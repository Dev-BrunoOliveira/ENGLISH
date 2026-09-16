export interface Phrase {
  id: number;
  lessonId: number;
  english: string;
  translations: Record<string, string>;
}

export const availableLanguages = [
  { code: 'en', name: 'English' },
  { code: 'pt', name: 'Português' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'zh', name: '中文 (Chinese)' },
  { code: 'ja', name: '日本語 (Japanese)' },
  { code: 'hi', name: 'हिन्दी (Hindi)' },
  { code: 'ar', name: 'العربية (Arabic)' },
  { code: 'ru', name: 'Русский (Russian)' },
];

export const lessons = [
  { id: 1, title: 'Basics 1', description: 'Essential greetings & modern introductions.' },
  { id: 2, title: 'Basics 2', description: 'Expressing gratitude, politeness & real feelings.' },
  { id: 3, title: 'Questions', description: 'Natural inquiries & casual conversation starters.' },
  { id: 4, title: 'Travel & Help', description: 'Real-world travel scenarios & urgent help.' },
  { id: 5, title: 'Small Talk', description: 'Social icebreakers & polite everyday chatter.' },
  { id: 6, title: 'Food & Drink', description: 'Ordering food, dining out & cafes.' },
  { id: 7, title: 'Time & Schedule', description: 'Discussing plans, schedules & time.' },
  { id: 8, title: 'Navigation & Directions', description: 'Getting around town & asking directions.' },
  { id: 9, title: 'Shopping & Payments', description: 'Fitting rooms, discounts & digital payments.' },
  { id: 10, title: 'Feelings & State', description: 'Expressing emotions, fatigue & mood.' },
  { id: 11, title: 'Work & Office', description: 'Remote work, video calls & office communication.' },
  { id: 12, title: 'Entertainment & Slang', description: 'Pop culture, modern slang & music chatter.' },
  { id: 13, title: 'Travel Advanced', description: 'Airport luggage, customs & emergency services.' },
  { id: 14, title: 'Daily Routine', description: 'Everyday life, weather & casual plans.' },
  { id: 15, title: 'Advanced Conversational', description: 'Nuanced idioms, tactful replies & native flow.' },
  { id: 16, title: 'Phrasal Verbs', description: 'Essential phrasal verbs in natural contexts.' },
  { id: 17, title: 'Native Idioms', description: 'Popular idioms & real expressions used daily.' },
  { id: 18, title: 'Tech & Remote Work', description: 'Zoom calls, screen sharing & tech slang.' },
  { id: 19, title: 'Coffee Shop & Dining', description: 'Custom coffee orders & restaurant requests.' },
  { id: 20, title: 'Networking & Connections', description: 'Professional networking & social links.' }
];

export const phrases: Phrase[] = [
  // Lesson 1: Greetings & Introductions
  {
    id: 1,
    lessonId: 1,
    english: "Hey, how's it going?",
    translations: {
      pt: "E aí, como vão as coisas?",
      es: "¡Hola! ¿Cómo te va?",
      fr: "Salut, comment ça va ?",
      de: "Hey, wie läuft's denn so?",
      zh: "嗨，最近怎么样？",
      ja: "やあ、調子はどう？",
      hi: "हे, सब कैसा चल रहा है?",
      ar: "أهلاً، كيف تسير الأمور؟",
      ru: "Привет, как дела?"
    }
  },
  {
    id: 2,
    lessonId: 1,
    english: "Yeah, absolutely! Count me in.",
    translations: {
      pt: "Com certeza! Pode contar comigo.",
      es: "¡Sí, totalmente! Cuenta conmigo.",
      fr: "Absolument ! Compte sur moi.",
      de: "Ja, absolut! Zähl auf mich.",
      zh: "当然，没问题！算我一个。",
      ja: "ええ、もちろん！私も仲間に入れて。",
      hi: "हाँ, बिल्कुल! मुझे भी शामिल करें।",
      ar: "نعم، بالتأكيد! احسب حسابي.",
      ru: "Да, безусловно! Я с вами."
    }
  },
  {
    id: 3,
    lessonId: 1,
    english: "Not really, but thanks for asking anyway.",
    translations: {
      pt: "Na verdade não, mas obrigado por perguntar mesmo assim.",
      es: "La verdad no, pero gracias por preguntar de todos modos.",
      fr: "Pas vraiment, mais merci d'avoir demandé.",
      de: "Nicht wirklich, aber danke der Nachfrage.",
      zh: "不是很想去，但还是谢谢关心。",
      ja: "あんまり…でも聞いてくれてありがとう。",
      hi: "नहीं, लेकिन पूछने के लिए धन्यवाद।",
      ar: "ليس حقاً، ولكن شكراً لسؤالك على أي حال.",
      ru: "Не особо, но спасибо, что спросил."
    }
  },
  {
    id: 4,
    lessonId: 1,
    english: "Catch you later! Take good care of yourself.",
    translations: {
      pt: "Te vejo depois! Se cuida bastante.",
      es: "¡Te veo luego! Cuídate mucho.",
      fr: "À plus tard ! Prends bien soin de toi.",
      de: "Bis später! Pass gut auf dich auf.",
      zh: "回头见！多保重自己。",
      ja: "またね！体調に気をつけてね。",
      hi: "बाद में मिलते हैं! अपना बहुत ख्याल रखना।",
      ar: "أراك لاحقاً! اعتني بنفسك جيداً.",
      ru: "Увидимся позже! Береги себя."
    }
  },
  {
    id: 5,
    lessonId: 1,
    english: "Could you do me a quick favor, please?",
    translations: {
      pt: "Você poderia me fazer um favor rápido, por favor?",
      es: "¿Podrías hacerme un rápido favor, por favor?",
      fr: "Pourriez-vous me rendre un petit service, s'il vous plaît ?",
      de: "Könntest du mir bitte einen kurzen Gefallen tun?",
      zh: "你能方便帮我个小忙吗？",
      ja: "ちょっとお願いがあるのですが、いいですか？",
      hi: "क्या आप कृपया मेरा एक छोटा सा काम कर सकते हैं?",
      ar: "هل يمكنك إسنادي بمعروف سريع من فضلك؟",
      ru: "Не мог бы ты сделать мне небольшое одолжение?"
    }
  },

  // Lesson 2: Gratitude & Politeness
  {
    id: 6,
    lessonId: 2,
    english: "Thanks a lot! I really appreciate your help.",
    translations: {
      pt: "Muito obrigado! Eu realmente aprecio sua ajuda.",
      es: "¡Muchas gracias! De verdad aprecio tu ayuda.",
      fr: "Merci beaucoup ! J'apprécie vraiment ton aide.",
      de: "Vielen Dank! Ich schätze deine Hilfe sehr.",
      zh: "非常感谢！真的太感谢你的帮忙了。",
      ja: "本当にありがとう！助かりました。",
      hi: "बहुत-बहुत धन्यवाद! मैं आपकी मदद की सराहना करता हूँ।",
      ar: "شكراً جزيلاً! أقدر مساعدتك حقاً.",
      ru: "Большое спасибо! Я очень ценю вашу помощь."
    }
  },
  {
    id: 7,
    lessonId: 2,
    english: "Excuse me, do you have a quick second?",
    translations: {
      pt: "Com licença, você tem um segundinho?",
      es: "Disculpe, ¿tiene un segundo?",
      fr: "Excusez-moi, vous avez une petite minute ?",
      de: "Entschuldigung, haben Sie kurz Zeit?",
      zh: "打扰一下，请问你有时间吗？",
      ja: "すみません、今少々お時間よろしいですか？",
      hi: "माफ़ कीजिए, क्या आपके पास एक मिनट है?",
      ar: "عذراً، هل لديك دقيقة من فضلك؟",
      ru: "Извините, у вас найдется секунда?"
    }
  },
  {
    id: 8,
    lessonId: 2,
    english: "I'm so sorry about that, it was completely my mistake.",
    translations: {
      pt: "Sinto muito por isso, foi totalmente erro meu.",
      es: "Lamento mucho eso, fue totalmente mi error.",
      fr: "Je suis tellement désolé, c'était entièrement ma faute.",
      de: "Tut mir leid, das war mein Fehler.",
      zh: "实在真抱歉，这完全是我的失误。",
      ja: "本当にすみません、完全に私の不手際でした。",
      hi: "मुझे इसके लिए बहुत खेद है, यह पूरी तरह से मेरी गलती थी।",
      ar: "أنا آسف جداً بشأن ذلك، كان خطئي بالكامل.",
      ru: "Мне так жаль, это была целиком моя ошибка."
    }
  },
  {
    id: 9,
    lessonId: 2,
    english: "Honestly, I haven't got the faintest clue.",
    translations: {
      pt: "Honestamente, não faço a menor ideia.",
      es: "Honestamente, no tengo ni la menor idea.",
      fr: "Honnêtement, je n'en ai aucune idée.",
      de: "Ehrlich gesagt habe ich nicht die leiseste Ahnung.",
      zh: "老实说，我一点头绪也没有。",
      ja: "正直、さっぱりわかりません。",
      hi: "सच कहूँ तो, मुझे बिल्कुल भी अंदाज़ा नहीं है।",
      ar: "بصراحة، ليس لدي أدنى فكرة على الإطلاق.",
      ru: "Честно говоря, понятия не имею."
    }
  },
  {
    id: 10,
    lessonId: 2,
    english: "You mean so much to me, thanks for being there.",
    translations: {
      pt: "Você significa muito para mim, obrigado por estar aqui.",
      es: "Significas mucho para mí, gracias por estar ahí.",
      fr: "Tu comptes tellement pour moi, merci d'être là.",
      de: "Du bedeutest mir so viel, danke dass du da bist.",
      zh: "你对我来说很重要，谢谢你一直都在。",
      ja: "あなたは大切な存在です、いつもそばにいてくれてありがとう。",
      hi: "तुम मेरे लिए बहुत मायने रखते हो, साथ रहने के लिए धन्यवाद।",
      ar: "أنت تعني لي الكثير، شكراً لكونك بجانبي.",
      ru: "Ты так много значит для меня, спасибо, что ты рядом."
    }
  },

  // Lesson 3: Natural Questions
  {
    id: 11,
    lessonId: 3,
    english: "How have you been holding up lately?",
    translations: {
      pt: "Como você tem passado ultimamente?",
      es: "¿Cómo lo has estado llevando últimamente?",
      fr: "Comment ça va ces derniers temps ?",
      de: "Wie geht es dir in letzter Zeit?",
      zh: "你最近过得怎么样？",
      ja: "最近どう過ごしていますか？",
      hi: "हाल के दिनों में आपका क्या हाल-चाल है?",
      ar: "كيف كانت أمورك مؤخراً؟",
      ru: "Как ты поживаешь в последнее время?"
    }
  },
  {
    id: 12,
    lessonId: 3,
    english: "I don't think we've met yet — I'm Alex.",
    translations: {
      pt: "Acho que ainda não nos conhecemos — sou o Alex.",
      es: "Creo que aún no nos conocemos, soy Alex.",
      fr: "Je ne crois pas qu'on se connaisse — moi c'est Alex.",
      de: "Ich glaube, wir kennen uns noch nicht – ich bin Alex.",
      zh: "我想我们还没认识过——我是亚历克斯。",
      ja: "初対面ですね。アレックスと申します。",
      hi: "मुझे लगता है हम मिले नहीं हैं — मैं एलेक्स हूँ।",
      ar: "لا أعتقد أننا التقينا من قبل — أنا أليكس.",
      ru: "Думаю, мы еще не знакомы — я Алекс."
    }
  },
  {
    id: 13,
    lessonId: 3,
    english: "Whereabouts are you originally from?",
    translations: {
      pt: "De onde você é originalmente?",
      es: "¿De qué parte eres originalmente?",
      fr: "Tu viens d'où exactement à l'origine ?",
      de: "Woher kommst du ursprünglich?",
      zh: "你老家是哪里的？",
      ja: "元々のご出身はどちらですか？",
      hi: "मूल रूप से आप कहाँ के रहने वाले हैं?",
      ar: "من أي منطقة أنت في الأصل؟",
      ru: "Откуда вы изначально родом?"
    }
  },
  {
    id: 14,
    lessonId: 3,
    english: "How much are you asking for this one?",
    translations: {
      pt: "Quanto você está pedindo por este aqui?",
      es: "¿Cuánto estás pidiendo por este?",
      fr: "Vous en demandez combien pour celui-ci ?",
      de: "Wie viel verlangen Sie dafür?",
      zh: "这个你打算卖多少钱？",
      ja: "これっておいくらですか？",
      hi: "आप इसके लिए कितने पैसे माँग रहे हैं?",
      ar: "كم تطلب لقاء هذا؟",
      ru: "Сколько вы просите за этот?"
    }
  },
  {
    id: 15,
    lessonId: 3,
    english: "Do you happen to have the time on you?",
    translations: {
      pt: "Você saberia me dizer que horas são?",
      es: "¿De casualidad tienes la hora?",
      fr: "Vous auriez l'heure par hasard ?",
      de: "Haben Sie zufällig die Uhrzeit?",
      zh: "请问你知道现在几点了吗？",
      ja: "今何時かわかりますか？",
      hi: "क्या आपको पता है अभी क्या समय हुआ है?",
      ar: "هل تعرف كم الساعة الآن؟",
      ru: "Вы случайно не знаете, который час?"
    }
  },

  // Lesson 4: Travel & Help
  {
    id: 16,
    lessonId: 4,
    english: "Could you tell me where the nearest restroom is?",
    translations: {
      pt: "Você poderia me dizer onde fica o banheiro mais próximo?",
      es: "¿Podrías decirme dónde está el baño más cercano?",
      fr: "Pourriez-vous me dire où se trouvent les toilettes les plus proches ?",
      de: "Könnten Sie mir sagen, wo die nächste Toilette ist?",
      zh: "请问最近的洗手间在哪里？",
      ja: "一番近くのお手洗いがどこにあるか教えていただけますか？",
      hi: "क्या आप मुझे बता सकते हैं कि सबसे पास का बाथरूम कहाँ है?",
      ar: "هل يمكنك إخباري أين يقع أقرب حمام؟",
      ru: "Не подскажете, где находится ближайший туалет?"
    }
  },
  {
    id: 17,
    lessonId: 4,
    english: "Could you give me a hand with this real quick?",
    translations: {
      pt: "Você poderia me dar uma mãozinha aqui rapidinho?",
      es: "¿Podrías echarme una mano con esto rápidamente?",
      fr: "Pourriez-vous me donner un coup de main rapidement ?",
      de: "Könntest du mir hierbei kurz helfen?",
      zh: "能请你稍微帮我一下吗？",
      ja: "手を貸していただけますか？",
      hi: "क्या आप जल्दी से इस काम में मेरी मदद कर सकते हैं?",
      ar: "هل يمكنك مساعدتي في هذا بسرعة؟",
      ru: "Не могли бы вы быстро помочь мне с этим?"
    }
  },
  {
    id: 18,
    lessonId: 4,
    english: "I didn't quite catch that, could you rephrase it?",
    translations: {
      pt: "Eu não entendi direito, você poderia falar de outro jeito?",
      es: "No entendí muy bien, ¿podrías decirlo de otra forma?",
      fr: "Je n'ai pas très bien compris, pourriez-vous reformuler ?",
      de: "Das habe ich nicht ganz verstanden, könnten Sie das anders ausdrücken?",
      zh: "我没太听懂，你能换个说法吗？",
      ja: "よく聞き取れなかったので、言い直していただけますか？",
      hi: "मुझे ठीक से समझ नहीं आया, क्या आप इसे दूसरे शब्दों में बता सकते हैं?",
      ar: "لم أفهم ذلك تماماً، هل يمكنك إعادة صياغته؟",
      ru: "Я не совсем понял, не могли бы вы перефразировать?"
    }
  },
  {
    id: 19,
    lessonId: 4,
    english: "Do you happen to speak English by any chance?",
    translations: {
      pt: "Por acaso você fala inglês?",
      es: "¿Por casualidad hablas inglés?",
      fr: "Par hasard, parlez-vous anglais ?",
      de: "Sprechen Sie zufällig Englisch?",
      zh: "请问你正巧会说英语吗？",
      ja: "ひょっとして英語はお話しになられますか？",
      hi: "क्या आप इत्तेफाक से अंग्रेजी बोलते हैं?",
      ar: "هل تتحدث الإنجليزية بالصدفة؟",
      ru: "Вы случайно не говорите по-английски?"
    }
  },
  {
    id: 20,
    lessonId: 4,
    english: "Would you mind repeating that a bit slower?",
    translations: {
      pt: "Você se importaria de repetir isso um pouco mais devagar?",
      es: "¿Te importaría repetir eso un poco más despacio?",
      fr: "Pourriez-vous répéter un peu plus lentement, s'il vous plaît ?",
      de: "Könnten Sie das bitte etwas langsamer wiederholen?",
      zh: "您能稍微慢一点再重复一遍吗？",
      ja: "もう少しゆっくりもう一度言っていただけますか？",
      hi: "क्या आप कृपया इसे थोड़ा धीरे दोहराएंगे?",
      ar: "هل تمانع في إعادة ذلك ببطء أكثر من فضلك؟",
      ru: "Не могли бы вы повторить это немного медленнее?"
    }
  },

  // Lesson 5: Everyday Small Talk
  {
    id: 21,
    lessonId: 5,
    english: "I'm doing pretty well, thanks for asking!",
    translations: {
      pt: "Estou indo super bem, obrigado por perguntar!",
      es: "¡Me va bastante bien, gracias por preguntar!",
      fr: "Ça va plutôt bien, merci de demander !",
      de: "Mir geht's ganz gut, danke der Nachfrage!",
      zh: "我挺好的，谢谢关心！",
      ja: "元気にやっています、お気遣いありがとう！",
      hi: "मैं बहुत बढ़िया हूँ, पूछने के लिए धन्यवाद!",
      ar: "أنا بخير، شكراً لسؤالك!",
      ru: "У меня все отлично, спасибо, что спросил!"
    }
  },
  {
    id: 22,
    lessonId: 5,
    english: "People usually call me Alex around here.",
    translations: {
      pt: "O pessoal costuma me chamar de Alex por aqui.",
      es: "La gente suele llamarme Alex por aquí.",
      fr: "On m'appelle généralement Alex ici.",
      de: "Die meisten nennen mich hier Alex.",
      zh: "大家在这儿平时都叫我亚历克斯。",
      ja: "みんなからはアレックスと呼ばれています。",
      hi: "यहाँ लोग मुझे आमतौर पर एलेक्स बुलाते हैं।",
      ar: "عادة ما ينادونني بأليكس هنا.",
      ru: "Здесь меня обычно зовут Алекс."
    }
  },
  {
    id: 23,
    lessonId: 5,
    english: "It's an absolute pleasure meeting you today!",
    translations: {
      pt: "É um absoluto prazer te conhecer hoje!",
      es: "¡Es un absoluto placer conocerte hoy!",
      fr: "C'est un réel plaisir de vous rencontrer aujourd'hui !",
      de: "Es ist mir eine große Freude, Sie heute kennenzulernen!",
      zh: "今天能认识你真是太高兴了！",
      ja: "今日はお会いできて本当に光栄です！",
      hi: "आज आपसे मिलकर वास्तव में बहुत खुशी हुई!",
      ar: "إنه لمن دواعي سروري حقاً لقاؤك اليوم!",
      ru: "Очень приятно с вами познакомиться сегодня!"
    }
  },
  {
    id: 24,
    lessonId: 5,
    english: "Could you point me in the right direction for this place?",
    translations: {
      pt: "Você poderia me indicar o caminho para este lugar?",
      es: "¿Podrías indicarme cómo llegar a este lugar?",
      fr: "Pourriez-vous m'indiquer la direction pour cet endroit ?",
      de: "Könnten Sie mir den Weg zu diesem Ort beschreiben?",
      zh: "你能告诉我这个地方怎么走吗？",
      ja: "この場所への行き方を教えていただけますか？",
      hi: "क्या आप मुझे इस जगह का सही रास्ता बता सकते हैं?",
      ar: "هل يمكنك إرشادي إلى الاتجاه الصحيح لهذا المكان؟",
      ru: "Не подскажете, как пройти к этому месту?"
    }
  },
  {
    id: 25,
    lessonId: 5,
    english: "Hope you have a fantastic rest of your day!",
    translations: {
      pt: "Espero que você tenha um excelente resto de dia!",
      es: "¡Espero que tengas un fantástico resto del día!",
      fr: "Passez une excellente fin de journée !",
      de: "Ich wünsche dir noch einen fantastischen Tag!",
      zh: "祝你度过愉快的一天！",
      ja: "今日が良い一日になりますように！",
      hi: "आशा है आपका बाकी का दिन शानदार रहे!",
      ar: "أتمنى لك بقية يوم رائعة!",
      ru: "Надеюсь, у вас будет отличный остаток дня!"
    }
  },

  // Lesson 6: Food & Dining
  {
    id: 26,
    lessonId: 6,
    english: "I'm starving, let me grab a bite to eat!",
    translations: {
      pt: "Estou morrendo de fome, vou comer alguma coisa!",
      es: "¡Me muero de hambre, voy a comer algo!",
      fr: "Je meurs de faim, je vais manger un morceau !",
      de: "Ich verhungere, ich muss was zu essen holen!",
      zh: "我饿扁了，我去吃点东西！",
      ja: "お腹ペコペコだよ、何か食べてくる！",
      hi: "मुझे बहुत तेज़ भूख लगी है, मैं कुछ खाने जा रहा हूँ!",
      ar: "أنا يتضور جوعاً، سآكل شيئاً!",
      ru: "Я умираю с голоду, пойду перекушу!"
    }
  },
  {
    id: 27,
    lessonId: 6,
    english: "My throat is super dry, I need a cold drink.",
    translations: {
      pt: "Minha garganta está super seca, preciso de uma bebida gelada.",
      es: "Tengo la garganta super seca, necesito una bebida fría.",
      fr: "J'ai la gorge très sèche, j'ai besoin d'une boisson fraîche.",
      de: "Mein Hals ist total trocken, ich brauche ein kaltes Getränk.",
      zh: "我嗓子干透了，需要喝点冰饮。",
      ja: "喉がカラカラで、冷たい飲み物がほしいです。",
      hi: "मेरा गला बहुत सूख रहा है, मुझे ठंडे पेय की जरूरत है।",
      ar: "حلقي جاف جداً، أحتاج لمشروب بارد.",
      ru: "У меня пересохло в горле, мне нужно холодное питье."
    }
  },
  {
    id: 28,
    lessonId: 6,
    english: "Could we get a pitcher of ice water for the table?",
    translations: {
      pt: "Você poderia trazer uma jarra de água com gelo para a mesa?",
      es: "¿Podría traernos una jarra de agua con hielo para la mesa?",
      fr: "Pourrions-nous avoir une carafe d'eau glacée pour la table ?",
      de: "Könnten wir eine Karaffe Eiswasser für den Tisch bekommen?",
      zh: "能帮我们桌上加一壶冰水吗？",
      ja: "テーブルに氷水のピッチャーをいただけますか？",
      hi: "क्या हमारे मेज के लिए एक जग ठंडा पानी मिल सकता है?",
      ar: "هل يمكننا الحصول على إبريق ماء مثلج للمائدة؟",
      ru: "Можно нам кувшин воды со льдом на стол?"
    }
  },
  {
    id: 29,
    lessonId: 6,
    english: "Could we split the check when you get a chance?",
    translations: {
      pt: "Você poderia dividir a conta pra gente quando tiver um tempinho?",
      es: "¿Podríamos dividir la cuenta cuando tengas un momento?",
      fr: "Pourrions-nous avoir l'addition séparée quand vous aurez un moment ?",
      de: "Könnten wir die Rechnung bitte getrennt zahlen, wenn Sie Zeit haben?",
      zh: "等方便的时候能帮我们分开付账吗？",
      ja: "お時間のある時に、お会計を分けていただけますか？",
      hi: "जब आपको समय मिले, क्या हम बिल अलग-अलग कर सकते हैं?",
      ar: "هل يمكننا تقسيم الحساب عندما تتاح لك الفرصة؟",
      ru: "Не могли бы вы принести нам раздельный счет, когда освободитесь?"
    }
  },
  {
    id: 30,
    lessonId: 6,
    english: "This food is packed with flavor, it's amazing!",
    translations: {
      pt: "Essa comida está cheia de sabor, é incrível!",
      es: "¡Esta comida tiene un sabor increíble, está espectacular!",
      fr: "Ce plat a tellement de goût, c'est formidable !",
      de: "Dieses Essen ist voller Geschmack, einfach fantastisch!",
      zh: "这道菜味道太棒了，令人惊艳！",
      ja: "この料理、風味が効いていてすごく美味しいです！",
      hi: "यह खाना स्वाद से भरपूर है, यह बहुत ही बढ़िया है!",
      ar: "هذا الطعام مليء بالنكهة، إنه رائع!",
      ru: "Эта еда невероятно вкусная, просто супер!"
    }
  },

  // Lesson 7: Time & Schedule
  {
    id: 31,
    lessonId: 7,
    english: "First off, second of all, and thirdly...",
    translations: {
      pt: "Em primeiro lugar, em segundo lugar e em terceiro...",
      es: "En primer lugar, en segundo lugar y en tercero...",
      fr: "Tout d'abord, deuxièmement, et troisièmement...",
      de: "Erstens, zweitens und drittens...",
      zh: "首先，其次，第三...",
      ja: "第一に、第二に、探して第三に…",
      hi: "सबसे पहले, दूसरी बात, और तीसरी बात...",
      ar: "أولاً، ثانياً، وثالثاً...",
      ru: "Во-первых, во-вторых, и в-третьих..."
    }
  },
  {
    id: 32,
    lessonId: 7,
    english: "I've got a pretty packed schedule for today.",
    translations: {
      pt: "Tô com a agenda bem cheia para o dia de hoje.",
      es: "Tengo una agenda bastante llena para el día de hoy.",
      fr: "J'ai un emploi du temps très chargé aujourd'hui.",
      de: "Ich habe heute einen ziemlich vollgepackten Zeitplan.",
      zh: "我今天的日程排得挺满的。",
      ja: "今日はスケジュールがかなり詰まっています。",
      hi: "आज मेरा शेड्यूल काफी व्यस्त है।",
      ar: "لدي جدول أعمال مزدحم للغاية اليوم.",
      ru: "У меня сегодня довольно плотный график."
    }
  },
  {
    id: 33,
    lessonId: 7,
    english: "Let's touch base tomorrow morning to confirm.",
    translations: {
      pt: "Vamos nos falar amanhã de manhã para confirmar.",
      es: "Hablemos mañana por la mañana para confirmar.",
      fr: "Faisons un point demain matin pour confirmer.",
      de: "Lass uns morgen Früh kurz sprechen, um alles zu bestätigen.",
      zh: "明早我们联系一下，确认最后的细节。",
      ja: "詳細を確認するため、明日の朝連絡を取り合いましょう。",
      hi: "विवरण की पुष्टि के लिए कल सुबह बात करते हैं।",
      ar: "دعنا نتواصل غداً صباحاً لتأكيد التفاصيل.",
      ru: "Давай свяжемся завтра утром, чтобы всё подтвердить."
    }
  },
  {
    id: 34,
    lessonId: 7,
    english: "I ran into an old classmate of mine yesterday afternoon.",
    translations: {
      pt: "Tropecei com um antigo colega de classe ontem à tarde.",
      es: "Me encontré con un viejo compañero de clase ayer por la tarde.",
      fr: "J'ai croisé un ancien camarade de classe hier après-midi.",
      de: "Ich bin gestern Nachmittag zufällig einem alten Mitschüler begegnet.",
      zh: "我昨天下午偶遇了一位老同学。",
      ja: "昨日の午後、昔の同級生にばったり会いました。",
      hi: "कल दोपहर मेरी मुलाकात अपने एक पुराने सहपाठी से हुई।",
      ar: "التقيت بزميل دراسة قديم بعد ظهر الأمس.",
      ru: "Вчера днем я случайно встретил своего бывшего одноклассника."
    }
  },
  {
    id: 35,
    lessonId: 7,
    english: "There's no better time to get started than right now.",
    translations: {
      pt: "Não há momento melhor para começar do que agora mesmo.",
      es: "No hay mejor momento para empezar que ahora mismo.",
      fr: "Il n'y a pas de meilleur moment pour commencer que maintenant.",
      de: "Es gibt keinen besseren Zeitpunkt anzufangen als genau jetzt.",
      zh: "现在就是开始的最佳时机。",
      ja: "今始めるのにこれ以上のタイミングはありません。",
      hi: "शुरू करने के लिए अभी से बेहतर कोई समय नहीं है।",
      ar: "ليس هناك وقت أفضل للبدء من الآن.",
      ru: "Нет лучшего времени для начала, чем прямо сейчас."
    }
  },

  // Lesson 8: Navigation & Directions
  {
    id: 36,
    lessonId: 8,
    english: "Take a sharp left right after the big intersection.",
    translations: {
      pt: "Vire à esquerda bem depois do cruzamento grande.",
      es: "Gira a la izquierda justo después del cruce grande.",
      fr: "Tournez brusquement à gauche juste après le grand carrefour.",
      de: "Biegen Sie gleich nach der großen Kreuzung scharf links ab.",
      zh: "过了那个大路口后立刻向左急转。",
      ja: "大きな交差点を過ぎたらすぐに左に曲がってください。",
      hi: "बड़े चौराहे के ठीक बाद तेज़ी से बाएं मुड़ें।",
      ar: "انعطف يساراً بحاطة بعد التقاطع الكبير مباشرة.",
      ru: "Поверните налево сразу за большим перекрестком."
    }
  },
  {
    id: 37,
    lessonId: 8,
    english: "It'll be on your right-hand side past the bookstore.",
    translations: {
      pt: "Vai ficar do seu lado direito, passando a livraria.",
      es: "Estará a tu lado derecho pasando la librería.",
      fr: "Ce sera sur votre droite, après la librairie.",
      de: "Es befindet sich auf der rechten Seite hinter der Buchhandlung.",
      zh: "过书店后它就在你的右手边。",
      ja: "本屋を過ぎた右手側にあります。",
      hi: "किताबों की दुकान के आगे यह आपकी दाहिनी ओर होगा।",
      ar: "سيكون على جانبك الأيمن بعد المكتـبة.",
      ru: "Это будет по правую руку от вас за книжным магазином."
    }
  },
  {
    id: 38,
    lessonId: 8,
    english: "Keep walking straight ahead for about two blocks.",
    translations: {
      pt: "Continue andando em frente por cerca de dois quarteirões.",
      es: "Sigue caminando recto unas dos cuadras.",
      fr: "Continuez tout droit pendant environ deux pâtés de maisons.",
      de: "Gehen Sie etwa zwei Häuserblocks geradeaus weiter.",
      zh: "沿着这条路往前直走大概两个街区。",
      ja: "このまままっすぐ2ブロックほど歩いてください。",
      hi: "लगभग दो ब्लॉक तक सीधे चलते रहें।",
      ar: "واصل المشي للأمام مباشرة لمدة حيين تقريباً.",
      ru: "Идите прямо вперед примерно два квартала."
    }
  },
  {
    id: 39,
    lessonId: 8,
    english: "Hold on a second, stop right where you are!",
    translations: {
      pt: "Espera um segundo, para bem onde você está!",
      es: "¡Espera un segundo, detente justo donde estás!",
      fr: "Attends une seconde, arrête-toi là où tu es !",
      de: "Warte einen Moment, bleib genau da stehen!",
      zh: "等等，就站在原地别动！",
      ja: "ちょっと待って、今いる場所で立ち止まって！",
      hi: "एक सेकंड रुकिए, आप जहाँ हैं वहीं रुक जाइए!",
      ar: "انتظر لحظة، توقف حيث أنت تماماً!",
      ru: "Подожди секунду, стой прямо там, где стоишь!"
    }
  },
  {
    id: 40,
    lessonId: 8,
    english: "Which direction is the subway station in?",
    translations: {
      pt: "Em que direção fica a estação de metrô?",
      es: "¿En qué dirección queda la estación de metro?",
      fr: "Dans quelle direction se trouve la station de métro ?",
      de: "In welcher Richtung liegt die U-Bahn-Station?",
      zh: "地铁站在哪个方向？",
      ja: "地下鉄の駅はどの方向ですか？",
      hi: "सबवे स्टेशन किस दिशा में है?",
      ar: "في أي اتجاه تقع محطة المترو؟",
      ru: "В каком направлении находится станция метро?"
    }
  },

  // Lesson 9: Shopping & Payments
  {
    id: 41,
    lessonId: 9,
    english: "I'd like to try this one on in a medium, please.",
    translations: {
      pt: "Gostaria de experimentar este no tamanho M, por favor.",
      es: "Me gustaría probarme este en talla mediana, por favor.",
      fr: "Je voudrais essayer celui-ci en taille M, s'il vous plaît.",
      de: "Ich würde das gerne in Größe M anprobieren, bitte.",
      zh: "我想试一下这个M码的，谢谢。",
      ja: "これをMサイズで試着させていただけますか？",
      hi: "मैं इसे मीडियम साइज में पहनकर देखना चाहूंगा, कृपया।",
      ar: "أود تجربة هذا المقاس المتوسط من فضلك.",
      ru: "Я хотел бы примерить это в среднем размере, пожалуйста."
    }
  },
  {
    id: 42,
    lessonId: 9,
    english: "Do you carry this item in a different color?",
    translations: {
      pt: "Vocês têm essa peça em uma cor diferente?",
      es: "¿Tienen este artículo en un color diferente?",
      fr: "Avez-vous cet article dans une autre couleur ?",
      de: "Haben Sie diesen Artikel in einer anderen Farbe?",
      zh: "请问这款有其他颜色的吗？",
      ja: "これの別のお色はありますか？",
      hi: "क्या आपके पास यह सामान किसी दूसरे रंग में है?",
      ar: "هل لديكم هذا المنتج بلون آخر؟",
      ru: "У вас есть этот товар в другом цвете?"
    }
  },
  {
    id: 43,
    lessonId: 9,
    english: "That's a bit steep, do you offer any discounts?",
    translations: {
      pt: "Tá um pouco salgado, vocês oferecem algum desconto?",
      es: "Está un poco caro, ¿ofrecen algún descuento?",
      fr: "C'est un peu cher, vous faites une remise ?",
      de: "Das ist etwas teuer, gibt es einen Rabatt?",
      zh: "有点贵了，能给打个折吗？",
      ja: "少しお高めですね。割引などはありますか？",
      hi: "यह थोड़ा महंगा है, क्या आप कोई छूट देते हैं?",
      ar: "هذا مكلف قاطبة، هل تقدمون أي خصم؟",
      ru: "Это немного дороговато, вы предоставляете скидки?"
    }
  },
  {
    id: 44,
    lessonId: 9,
    english: "Do you guys accept contactless payments or credit cards?",
    translations: {
      pt: "Vocês aceitam pagamento por aproximação ou cartão de crédito?",
      es: "¿Aceptan pagos sin contacto o tarjetas de crédito?",
      fr: "Acceptez-vous les paiements sans contact ou la carte de crédit ?",
      de: "Akzeptieren Sie kontaktloses Zahlen oder Kreditkarten?",
      zh: "请问你们支持感应刷卡或信用卡支付吗？",
      ja: "タッチ決済やクレジットカードは使えますか？",
      hi: "क्या आप क्रेडिट कार्ड या कॉन्टैक्टलेस भुगतान स्वीकार करते हैं?",
      ar: "هل تقبلون الدفع التلامسي أو بطاقات الائتمان؟",
      ru: "Вы принимаете бесконтактную оплату или кредитные карты?"
    }
  },
  {
    id: 45,
    lessonId: 9,
    english: "Thanks, I'm just taking a look around for now.",
    translations: {
      pt: "Obrigado, só estou dando uma olhadinha por enquanto.",
      es: "Gracias, solo estoy echando un vistazo por ahora.",
      fr: "Merci, je jette juste un coup d'œil pour l'instant.",
      de: "Danke, ich schaue mich vorerst nur um.",
      zh: "谢谢，我先随便看看。",
      ja: "ありがとうございます、今は店内を見ているだけです。",
      hi: "धन्यवाद, मैं अभी बस यूँ ही देख रहा हूँ।",
      ar: "شكراً، أنا ألقي نظرة عامة فقط في الوقت الحالي.",
      ru: "Спасибо, я пока просто осматриваюсь."
    }
  },

  // Lesson 10: Feelings & State
  {
    id: 46,
    lessonId: 10,
    english: "I'm on cloud nine after getting that great news!",
    translations: {
      pt: "Estou nas nuvens depois de receber essa ótima notícia!",
      es: "¡Estoy en las nubes tras recibir esa gran noticia!",
      fr: "Je suis aux anges après avoir reçu cette super nouvelle !",
      de: "Ich bin auf Wolke sieben nach dieser tollen Nachricht!",
      zh: "听到这个好消息后我简直高兴坏了！",
      ja: "その素晴らしいニュースを聞いて最高にハッピーです！",
      hi: "वह खुशखबरी सुनकर मैं सातवें आसमान पर हूँ!",
      ar: "أنا في قمة السعادة بعد سماع تلك الأخبار الرائعة!",
      ru: "Я на седьмом небе от счастья после таких отличных новостей!"
    }
  },
  {
    id: 47,
    lessonId: 10,
    english: "I've been feeling kind of down in the dumps lately.",
    translations: {
      pt: "Tenho me sentido um pouco para baixo ultimamente.",
      es: "Me he estado sintiendo un poco desanimado últimamente.",
      fr: "Je me sens un peu démoralisé ces derniers temps.",
      de: "Ich habe mich in letzter Zeit etwas niedergeschlagen gefühlt.",
      zh: "我最近情绪有点低落。",
      ja: "最近なんだか落ち込んでいます。",
      hi: "मैं हाल के दिनों में थोड़ा उदास महसूस कर रहा हूँ।",
      ar: "كنت أشعر ببعض الإحباط مؤخراً.",
      ru: "В последнее время я чувствую себя немного подавленно."
    }
  },
  {
    id: 48,
    lessonId: 10,
    english: "I'm running on empty and need to recharge.",
    translations: {
      pt: "Estou no meu limite de energia e preciso recarregar as baterias.",
      es: "Estoy agotado y necesito recargar energías.",
      fr: "Je suis à bout de souffle et j'ai besoin de me ressourcer.",
      de: "Ich laufe auf dem letzten Loch und muss meine Akkus aufladen.",
      zh: "我累得没气了，得好好补充精力。",
      ja: "エネルギー切れで、充電が必要です。",
      hi: "मेरी ऊर्जा खत्म हो गई है और मुझे आराम की सख्त जरूरत है।",
      ar: "أنا أعمل على المجهود الأخير وأحتاج لإعادة الشحن.",
      ru: "Я полностью истощен и мне нужно перезарядиться."
    }
  },
  {
    id: 49,
    lessonId: 10,
    english: "That really got on my nerves, to be completely honest.",
    translations: {
      pt: "Isso realmente me deu nos nervos, para ser bem sincero.",
      es: "Eso me sacó de quicio, para ser completamente sincero.",
      fr: "Ça m'a vraiment tapé sur les nerfs, pour être tout à fait honnête.",
      de: "Das ist mir ehrlich gesagt gehörig auf die Nerven gegangen.",
      zh: "说实话，那件事真的把我惹火了。",
      ja: "正直言って、あれには本当にイライラさせられました。",
      hi: "सच कहूं तो उस बात ने मुझे बहुत परेशान कर दिया।",
      ar: "لقد أثار ذلك أعصابي حقاً بصراحة تامة.",
      ru: "Это реально подействовало мне на нервы, если честно."
    }
  },
  {
    id: 50,
    lessonId: 10,
    english: "I'm feeling a bit under the weather today.",
    translations: {
      pt: "Estou me sentindo um pouco indisposto hoje.",
      es: "Me siento un poco indispuesto hoy.",
      fr: "Je me sens un peu débarbouillé aujourd'hui.",
      de: "Ich fühle mich heute etwas kränklich.",
      zh: "我今天身体感觉有点不舒服。",
      ja: "今日は少し体調が優れません。",
      hi: "आज मेरी तबीयत कुछ ठीक नहीं लग रही है।",
      ar: "أشعر ببعض التوعك اليوم.",
      ru: "Я сегодня чувствую себя немного неважно."
    }
  },

  // Lesson 11: Work & Office
  {
    id: 51,
    lessonId: 11,
    english: "I have a mandatory conference call in five minutes.",
    translations: {
      pt: "Tenho uma reunião por vídeo obrigatória em cinco minutos.",
      es: "Tengo una videoconferencia obligatoria en cinco minutos.",
      fr: "J'ai une visioconférence obligatoire dans cinq minutes.",
      de: "Ich habe in fünf Minuten eine obligatorische Videokonferenz.",
      zh: "五分钟后我有一个必须参加的视频会议。",
      ja: "5分後に必須のWeb会議があります。",
      hi: "पांच मिनट में मेरी एक अनिवार्य कॉन्फ्रेंस कॉल है।",
      ar: "لدي مكالمة مؤتمر إجبارية خلال خمس دقائق.",
      ru: "Через пять минут у меня обязательный видеозвонок."
    }
  },
  {
    id: 52,
    lessonId: 11,
    english: "Could you forward that report over when you get a chance?",
    translations: {
      pt: "Você poderia me encaminhar aquele relatório quando tiver um tempo?",
      es: "¿Podrías reenviarme ese informe cuando tengas una oportunidad?",
      fr: "Pourriez-vous me transférer ce rapport quand vous aurez un moment ?",
      de: "Könnten Sie mir diesen Bericht weiterleiten, wenn Sie dazu kommen?",
      zh: "你有空的时候能把那个报告转发给我吗？",
      ja: "お時間のある時に例のレポートを転送していただけますか？",
      hi: "जब आपको मौका मिले, क्या आप वह रिपोर्ट मुझे फॉरवर्ड कर सकते हैं?",
      ar: "هل يمكنك إعادة إرسال ذلك التقرير عندما تسنح لك الفرصة؟",
      ru: "Не могли бы вы переслать мне этот отчет, когда освободитесь?"
    }
  },
  {
    id: 53,
    lessonId: 11,
    english: "I couldn't agree with you more on that point.",
    translations: {
      pt: "Eu não poderia concordar mais com você nesse ponto.",
      es: "No podría estar más de acuerdo contigo en ese punto.",
      fr: "Je ne pourrais pas être plus d'accord avec vous sur ce point.",
      de: "Ich könnte Ihnen in diesem Punkt nicht mehr zustimmen.",
      zh: "在这一点上我完全赞同你的看法。",
      ja: "その点については大賛成です。",
      hi: "मैं इस बात पर आपसे पूरी तरह सहमत हूँ।",
      ar: "لا يمكنني الاتفاق معك أكثر من ذلك في هذه النقطة.",
      ru: "Я совершенно с вами согласен по этому поводу."
    }
  },
  {
    id: 54,
    lessonId: 11,
    english: "I see your point, but I'm looking at it differently.",
    translations: {
      pt: "Entendo o seu ponto, mas vejo de uma forma diferente.",
      es: "Entiendo tu punto, pero lo veo de manera diferente.",
      fr: "Je comprends votre point de vue, mais je le vois différemment.",
      de: "Ich verstehe Ihren Punkt, aber ich sehe das etwas anders.",
      zh: "我明白你的意思，不过我有不同的看法。",
      ja: "おっしゃる意図は分かりますが、私には違った見解があります。",
      hi: "मैं आपकी बात समझता हूँ, लेकिन मैं इसे अलग दृष्टिकोण से देख रहा हूँ।",
      ar: "أفهم وجهة نظرك، لكني أراها من منظور مختلف.",
      ru: "Я понимаю вашу точку зрения, но смотрю на это иначе."
    }
  },
  {
    id: 55,
    lessonId: 11,
    english: "Kudos on a job well done, great execution!",
    translations: {
      pt: "Parabéns pelo ótimo trabalho, excelente execução!",
      es: "¡Felicidades por un trabajo bien hecho, excelente ejecución!",
      fr: "Bravo pour ce travail bien fait, excellente exécution !",
      de: "Gute Arbeit, fantastische Umsetzung!",
      zh: "干得漂亮，执行得太棒了！",
      ja: "見事な仕事ぶりですね、素晴らしい実行力です！",
      hi: "शानदार काम, बहुत ही बढ़िया काम किया!",
      ar: "تهانينا على العمل الرائع، تنفيذ ممتاز!",
      ru: "Отличная работа, великолепное исполнение!"
    }
  },

  // Lesson 12: Entertainment & Slang
  {
    id: 56,
    lessonId: 12,
    english: "That's mind-blowing! I'm so stoked for you!",
    translations: {
      pt: "Isso é impressionante! Tô super empolgado por você!",
      es: "¡Eso es alucinante! ¡Estoy muy feliz por ti!",
      fr: "C'est hallucinant ! Je suis trop content pour toi !",
      de: "Das ist der Hammer! Ich freue mich riesig für dich!",
      zh: "太绝了！真为你感到高兴！",
      ja: "凄すぎる！私もワクワクしちゃうよ！",
      hi: "यह तो अद्भुत है! मैं आपके लिए बहुत खुश हूँ!",
      ar: "هذا أمر مذهل! أنا مسرور جداً لأجلك!",
      ru: "Это просто крышесносно! Я так рад за тебя!"
    }
  },
  {
    id: 57,
    lessonId: 12,
    english: "This track is such a vibe, turn up the volume!",
    translations: {
      pt: "Essa música é uma vibe demais, aumenta o som!",
      es: "¡Este tema es increíble, sube el volumen!",
      fr: "Ce morceau est trop bien, monte le son !",
      de: "Der Song ist ein absoluter Vibe, dreh auf!",
      zh: "这首歌太有感觉了，把声音调大点！",
      ja: "この曲めっちゃノリが良いね、音量上げて！",
      hi: "यह गाना बहुत ही जबरदस्त है, आवाज बढ़ाओ!",
      ar: "هذه الأغنية لها طابع رائع، ارفع الصوت!",
      ru: "Этот трек — просто огонь, сделай погромче!"
    }
  },
  {
    id: 58,
    lessonId: 12,
    english: "Are you serious right now? You've got to be pulling my leg!",
    translations: {
      pt: "Você tá falando sério? Só pode estar tirando com a minha cara!",
      es: "¿Hablas en serio? ¡Tiene que ser una broma!",
      fr: "Es-tu sérieux ? Tu te moques de moi !",
      de: "Meinst du das ernst? Du willst mich wohl auf den Arm nehmen!",
      zh: "你是认真的吗？你肯定是在逗我吧！",
      ja: "本気で言ってるの？冗談でしょう！",
      hi: "क्या आप संजीदा हैं? आप ज़रूर मेरा मज़ाक उड़ा रहे हैं!",
      ar: "هل أنت جاد الآن؟ لا بد أنك تمازحني!",
      ru: "Ты это серьезно сейчас? Ты меня надуваешь!"
    }
  },
  {
    id: 59,
    lessonId: 12,
    english: "We should catch up over coffee sometime soon!",
    translations: {
      pt: "A gente devia se encontrar pra tomar um café qualquer dia desses!",
      es: "¡Deberíamos juntarnos a tomar un café pronto!",
      fr: "On devrait se prendre un café un de ces quatre !",
      de: "Wir sollten uns bald mal auf einen Kaffee treffen!",
      zh: "我们近期应该找时间一起喝个咖啡叙叙旧！",
      ja: "近いうちにお茶でもしながら近況報告しようよ！",
      hi: "हमें जल्द ही कभी कॉफी पर मिलकर बातें करनी चाहिए!",
      ar: "يجب أن نلتقي على فنجان قهوة قريباً!",
      ru: "Нам стоит как-нибудь на днях пересечься за чашкой кофе!"
    }
  },
  {
    id: 60,
    lessonId: 12,
    english: "I never saw that coming, what a crazy turn of events!",
    translations: {
      pt: "Eu nunca imaginei isso, que reviravolta louca!",
      es: "¡Nunca lo vi venir, qué giro tan loco de los acontecimientos!",
      fr: "Je ne l'ai jamais vu venir, quel retournement de situation !",
      de: "Das habe ich nie kommen sehen, was für eine verrückte Wendung!",
      zh: "我万万没料到，局势变化太意想不到了！",
      ja: "全く予想していなかった、なんて驚きの展開なんだ！",
      hi: "मैंने कभी इसकी उम्मीद नहीं की थी, क्या अजीब मोड़ आया है!",
      ar: "لم أتوقع ذلك أبداً، يا له من تحول مجنون في الأحداث!",
      ru: "Никогда бы не подумал, вот это неожиданный поворот!"
    }
  },

  // Lesson 13: Travel Advanced
  {
    id: 61,
    lessonId: 13,
    english: "Excuse me, my checked luggage hasn't come out on the carousel.",
    translations: {
      pt: "Com licença, minha bagagem despachada ainda não saiu na esteira.",
      es: "Disculpe, mi equipaje facturado no ha salido en la cinta.",
      fr: "Excusez-moi, mes bagages enregistrés ne sont pas arrivés sur le tapis.",
      de: "Entschuldigung, mein aufgegebenes Gepäck ist noch nicht auf dem Förderband angekommen.",
      zh: "打扰一下，我托运的行李还没在传送带上出来。",
      ja: "すみません、私の預け荷物がまだターンテーブルに出てこないのですが。",
      hi: "माफ़ कीजिए, मेरा चेक किया गया सामान बेल्ट पर बाहर नहीं आया है।",
      ar: "عذراً، أمتعتي المسجلة لم تظهر على حزام الأمتعة بعد.",
      ru: "Извините, мой зарегистрированный багаж еще не появился на ленте."
    }
  },
  {
    id: 62,
    lessonId: 13,
    english: "Unfortunately, my layover was too short and I missed my flight.",
    translations: {
      pt: "Infelizmente, minha conexão foi muito curta e perdi meu voo.",
      es: "Desafortunadamente, mi escala fue muy corta y perdí mi vuelo.",
      fr: "Malheureusement, mon escale était trop courte et j'ai raté mon vol.",
      de: "Leider war mein Aufenthalt zu kurz und ich habe meinen Flug verpasst.",
      zh: "很不幸，我的中转时间太短，错过了航班。",
      ja: "あいにく乗り継ぎ時間が短すぎてフライトに乗り遅れてしまいました。",
      hi: "दुर्भाग्य से, मेरा लेओवर बहुत छोटा था और मेरी उड़ान छूट गई।",
      ar: "للأسف، كانت فترة الترانزيت قصيرة جداً وفاتتني الرحلة.",
      ru: "К сожалению, пересадка была слишком короткой, и я опоздал на рейс."
    }
  },
  {
    id: 63,
    lessonId: 13,
    english: "Please have your passport and landing declaration ready.",
    translations: {
      pt: "Por favor, esteja com seu passaporte e declaração de desembarque em mãos.",
      es: "Por favor, tenga a la mano su pasaporte y declaración de entrada.",
      fr: "Veuillez avoir votre passeport et votre déclaration d'arrivée à portée de main.",
      de: "Bitte halten Sie Ihren Reisepass und die Einreiseerklärung bereit.",
      zh: "请提前准备好您的护照和入境申报单。",
      ja: "パスポートと入国申告書をご用意ください。",
      hi: "कृपया अपना पासपोर्ट और लैंडिंग घोषणा पत्र तैयार रखें।",
      ar: "يرجى تجهيز جواز سفرك وإقرار الوصول.",
      ru: "Пожалуйста, приготовьте ваш паспорт и въездную декларацию."
    }
  },
  {
    id: 64,
    lessonId: 13,
    english: "I only have personal items, so I have nothing to declare.",
    translations: {
      pt: "Só tenho itens pessoais, então não tenho nada a declarar.",
      es: "Solo tengo artículos personales, así que no tengo nada que declarar.",
      fr: "Je n'ai que des effets personnels, donc rien à déclarer.",
      de: "Ich habe nur persönliche Gegenstände, also nichts zu verzollen.",
      zh: "我只带了个人用品，所以没有什么需要申报的。",
      ja: "身の回り品しか持っていませんので、申告するものはありません。",
      hi: "मेरे पास केवल निजी सामान है, इसलिए मेरे पास घोषित करने के लिए कुछ नहीं है।",
      ar: "لدي أغراض شخصية فقط، لذا ليس لدي ما أصرح به.",
      ru: "У меня только личные вещи, поэтому мне нечего декларировать."
    }
  },
  {
    id: 65,
    lessonId: 13,
    english: "Someone please call emergency services immediately!",
    translations: {
      pt: "Por favor, alguém chame os serviços de emergência imediatamente!",
      es: "¡Por favor, que alguien llame a emergencias de inmediato!",
      fr: "Que quelqu'un appelle les secours immédiatement, s'il vous plaît !",
      de: "Bitte rufen Sie sofort den Rettungsdienst!",
      zh: "请来人立刻叫救护车/急救中心！",
      ja: "誰かすぐに救急車を呼んでください！",
      hi: "कृपया कोई तुरंत आपातकालीन सेवाओं को कॉल करे!",
      ar: "رجاءً ليطلب أحدكم خدمات الطوارئ فوراً!",
      ru: "Пожалуйста, кто-нибудь, срочно вызовите скорую помощь!"
    }
  },

  // Lesson 14: Daily Routine
  {
    id: 66,
    lessonId: 14,
    english: "I'm exhausted and I'm going to hit the sack early tonight.",
    translations: {
      pt: "Estou exausto e vou ir para a cama cedo hoje à noite.",
      es: "Estoy agotado y me voy a ir a la cama temprano esta noche.",
      fr: "Je suis épuisé et je vais me coucher tôt ce soir.",
      de: "Ich bin erschöpft und gehe heute Abend früh ins Bett.",
      zh: "我精疲力竭了，今晚打算早点关灯睡觉。",
      ja: "疲れたので今夜は早めに寝ることにするよ。",
      hi: "मैं बहुत थका हुआ हूँ और आज रात जल्दी सोने जा रहा हूँ।",
      ar: "أنا مجهد للغاية وسأذهب إلى النوم مبكراً الليلة.",
      ru: "Я вымотан и собираюсь сегодня рано лягу спать."
    }
  },
  {
    id: 67,
    lessonId: 14,
    english: "What are you up to later this evening?",
    translations: {
      pt: "O que você vai fazer de bom mais tarde hoje à noite?",
      es: "¿Qué vas a hacer más tarde esta noche?",
      fr: "Qu'est-ce que tu fais de beau ce soir ?",
      de: "Was hast du heute Abend noch so vor?",
      zh: "你今天傍晚/晚些时候打算干嘛？",
      ja: "今晩この後は何か予定あるの？",
      hi: "आज शाम को आप क्या करने वाले हैं?",
      ar: "ماذا تخطط أن تفعل في وقت لاحق من هذا المساء؟",
      ru: "Чем думаешь заняться сегодня вечером?"
    }
  },
  {
    id: 68,
    lessonId: 14,
    english: "It's coming down in buckets out there, grab an umbrella!",
    translations: {
      pt: "Está caindo um pé d'água lá fora, pega um guarda-chuva!",
      es: "¡Está lloviendo a cántaros afuera, lleva un paraguas!",
      fr: "Il pleut des cordes dehors, prends un parapluie !",
      de: "Es gießt draußen wie aus Eimern, nimm einen Regenschirm mit!",
      zh: "外面正在下倾盆大雨，快拿把伞！",
      ja: "外は土砂降りだよ、傘を持っていきなさい！",
      hi: "बाहर मूसलाधार बारिश हो रही है, छाता ले लो!",
      ar: "إنها تمطر بغزارة في الخارج، خذ مظلة!",
      ru: "На улице льет как из ведра, возьми зонт!"
    }
  },
  {
    id: 69,
    lessonId: 14,
    english: "I'm completely swamped with work right now.",
    translations: {
      pt: "Estou completamente atolado de trabalho no momento.",
      es: "Estoy completamente atareado con el trabajo en este momento.",
      fr: "Je suis totalement débordé par le travail en ce moment.",
      de: "Ich bin gerade komplett mit Arbeit eingedeckt.",
      zh: "我手头的工作完全要忙不过来了。",
      ja: "今仕事で手が回らない状態です。",
      hi: "मैं अभी काम में बहुत व्यस्त हूँ।",
      ar: "أنا غارق تماماً في العمل الآن.",
      ru: "Я сейчас по уши завален работой."
    }
  },
  {
    id: 70,
    lessonId: 14,
    english: "Catch you later, take good care of yourself!",
    translations: {
      pt: "Te vejo depois, se cuida bastante!",
      es: "¡Te veo luego, cuídate mucho!",
      fr: "À plus tard, prends bien soin de toi !",
      de: "Bis später, pass gut auf dich auf!",
      zh: "回头见，多保重！",
      ja: "また後でね、身体に気をつけて！",
      hi: "बाद में मिलते हैं, अपना ख्याल रखना!",
      ar: "أراك لاحقاً، اعتني بنفسك!",
      ru: "Увидимся позже, береги себя!"
    }
  },

  // Lesson 15: Advanced Conversational
  {
    id: 71,
    lessonId: 15,
    english: "That really hinges on how things play out.",
    translations: {
      pt: "Isso realmente depende de como as coisas se desenrolarem.",
      es: "Eso realmente depende de cómo resulten las cosas.",
      fr: "Cela dépend vraiment de la façon dont les choses évoluent.",
      de: "Das hängt wirklich davon ab, wie sich die Dinge entwickeln.",
      zh: "那完全得看后续事情怎么发展了。",
      ja: "それは今後の展開次第ですね。",
      hi: "यह इस बात पर निर्भर करता है कि परिस्थितियाँ कैसे बदलती हैं।",
      ar: "يتوقف ذلك حقاً على كيفية سريان الأمور.",
      ru: "Это реально зависит от того, как развернутся события."
    }
  },
  {
    id: 72,
    lessonId: 15,
    english: "Make yourself comfortable and help yourself to anything!",
    translations: {
      pt: "Sinta-se à vontade e sirva-se do que quiser!",
      es: "¡Ponte cómodo y sírvete lo que quieras!",
      fr: "Faites comme chez vous et servez-vous !",
      de: "Machen Sie es sich bequem und bedienen Sie sich!",
      zh: "别客气，快请坐，想吃什么随意！",
      ja: "どうぞくつろいで、何でもご自由に召し上がってください！",
      hi: "आराम से बैठिए और जो चाहें खुद ले लीजिए!",
      ar: "استرح وخذ ما تشاء بحرية!",
      ru: "Располагайтесь поудобнее и угощайтесь всем, чем хотите!"
    }
  },
  {
    id: 73,
    lessonId: 15,
    english: "Never mind, it's really not worth worrying about.",
    translations: {
      pt: "Deixa para lá, realmente não vale a pena se preocupar com isso.",
      es: "No importa, realmente no vale la pena preocuparse por eso.",
      fr: "Laisse tomber, ça ne vaut vraiment pas la peine de s'inquiéter.",
      de: "Schon gut, es lohnt sich wirklich nicht, sich darüber Sorgen zu machen.",
      zh: "算了吧，这真的不值得操心。",
      ja: "気にしないで、大したことじゃないから。",
      hi: "कोई बात नहीं, इस पर चिंता करने की कोई ज़रूरत नहीं है।",
      ar: "لا عليك، الأمر لا يستحق القلق حقاً.",
      ru: "Проехали, это не стоит того, чтобы переживать."
    }
  },
  {
    id: 74,
    lessonId: 15,
    english: "There's no rush at all, take as much time as you need.",
    translations: {
      pt: "Não há pressa alguma, leve o tempo que precisar.",
      es: "No hay ninguna prisa, tómate todo el tiempo que necesites.",
      fr: "Rien ne presse, prenez tout le temps dont vous avez besoin.",
      de: "Es gibt überhaupt keine Eile, nimm dir so viel Zeit wie du brauchst.",
      zh: "一点也不急，你需要多久时间都可以。",
      ja: "急ぐ必要は全くありませんので、どうぞごゆっくり。",
      hi: "बिल्कुल कोई जल्दबाजी नहीं है, जितना समय चाहिए लें।",
      ar: "لا يوجد أي استعجال، خذ وقتك الكافي.",
      ru: "Никакой спешки нет, берите столько времени, сколько нужно."
    }
  },
  {
    id: 75,
    lessonId: 15,
    english: "I haven't got the faintest idea, to be honest.",
    translations: {
      pt: "Para ser bem honesto, não tenho a menor ideia.",
      es: "Para ser bastante honesto, no tengo la menor idea.",
      fr: "Pour être tout à fait honnête, je n'en ai pas la moindre idée.",
      de: "Ehrlich gesagt habe ich nicht die leiseste Ahnung.",
      zh: "老实说，我连一点头绪都没有。",
      ja: "正直言って、全く見当もつきません。",
      hi: "सच कहूँ तो मुझे रत्ती भर भी विचार नहीं है।",
      ar: "بصراحة، ليس لدي أدنى فكرة على الإطلاق.",
      ru: "Честно говоря, у меня нет ни малейшего понятия."
    }
  },

  // Lesson 16: Phrasal Verbs
  {
    id: 76,
    lessonId: 16,
    english: "Don't worry about it, I'll figure it out as I go.",
    translations: {
      pt: "Não se preocupe com isso, eu vou resolvendo à medida que for fazendo.",
      es: "No te preocupes, lo iré resolviendo sobre la marcha.",
      fr: "Ne t'inquiète pas pour ça, je trouverai une solution au fur et à mesure.",
      de: "Mach dir keine Sorgen, ich werde das unterwegs schon herausfinden.",
      zh: "别担心，我边做边想办法。",
      ja: "心配しないで、やりながら考えます。",
      hi: "चिंता मत करो, मैं करते-करते समझ जाऊँगा।",
      ar: "لا تقلق بشأن ذلك، سأكتشف الأمر أثناء القيام به.",
      ru: "Не волнуйся, я разберусь с этим по ходу дела."
    }
  },
  {
    id: 77,
    lessonId: 16,
    english: "Let's grab lunch and catch up on everything!",
    translations: {
      pt: "Vamos almoçar juntos e colocar o papo em dia!",
      es: "¡Almorcemos juntos y pongámonos al día con todo!",
      fr: "Allons déjeuner et rattrapons le temps perdu !",
      de: "Lass uns zusammen mittagessen und über alles quatschen!",
      zh: "我们一起吃午饭，好好叙叙旧吧！",
      ja: "ランチでも食べて、近況報告し合おう！",
      hi: "चलो दोपहर का खाना खाते हैं और सब बातें शेयर करते हैं!",
      ar: "دعنا نتناول الغداء ونستعيد كل الأخبار!",
      ru: "Давай пообедаем и обсудим все новости!"
    }
  },
  {
    id: 78,
    lessonId: 16,
    english: "We need to figure out what went wrong with the system.",
    translations: {
      pt: "Precisamos descobrir o que deu errado com o sistema.",
      es: "Necesitamos descubrir qué salió mal con el sistema.",
      fr: "Nous devons comprendre ce qui a mal tourné avec le système.",
      de: "Wir müssen herausfinden, was mit dem System schiefgelaufen ist.",
      zh: "我们需要找出系统到底出了什么问题。",
      ja: "システムに何の不具合があったのか解明する必要があります。",
      hi: "हमें यह पता लगाने की आवश्यकता है कि सिस्टम में क्या गड़बड़ हुई।",
      ar: "نحن بحاجة لمعرفة ما الذي حدث خطأً في النظام.",
      ru: "Нам нужно выяснить, что пошло не так с системой."
    }
  },
  {
    id: 79,
    lessonId: 16,
    english: "They had to call off the meeting due to bad weather.",
    translations: {
      pt: "Eles tiveram que cancelar a reunião devido ao mau tempo.",
      es: "Tuvieron que cancelar la reunión debido al mal tiempo.",
      fr: "Ils ont dû annuler la réunion en raison du mauvais temps.",
      de: "Sie mussten das Treffen wegen schlechten Wetters absagen.",
      zh: "由于天气恶劣，他们不得不取消会议。",
      ja: "悪天候のため会議を中止せざるを得ませんでした。",
      hi: "खराब मौसम के कारण उन्हें बैठक रद्द करनी पड़ी।",
      ar: "اضطروا لإلغاء الاجتماع بسبب سوء الأحوال الجوية.",
      ru: "Им пришлось отменить встречу из-за плохой погоды."
    }
  },
  {
    id: 80,
    lessonId: 16,
    english: "It turns out everything worked out fine in the end.",
    translations: {
      pt: "Acabou que tudo deu certo no final das contas.",
      es: "Resulta que todo salió bien al final.",
      fr: "Il s'avère que tout s'est bien terminé en fin de compte.",
      de: "Es stellte sich heraus, dass am Ende alles gut geklappt hat.",
      zh: "结果发现到最后一切都很顺利。",
      ja: "結局のところ、最終的にはすべて上手くいきました。",
      hi: "अंत में सब कुछ ठीक रहा।",
      ar: "تبين أن كل شيء سار على ما يرام في النهاية.",
      ru: "В итоге все закончилось хорошо."
    }
  },

  // Lesson 17: Native Idioms
  {
    id: 81,
    lessonId: 17,
    english: "Don't sweat the exam, it's going to be a piece of cake!",
    translations: {
      pt: "Não esquente com a prova, vai ser mamão com açúcar!",
      es: "¡No te estreses por el examen, va a ser pan comido!",
      fr: "Ne stresse pas pour l'examen, ça va être du gâteau !",
      de: "Mach dir wegen der Prüfung keinen Kopf, das wird ein Kinderspiel!",
      zh: "别为考试发愁，那绝对是小菜一碟！",
      ja: "試験のことは心配しないで、朝飯前だよ！",
      hi: "परीक्षा की चिंता मत करो, यह बहुत आसान होगी!",
      ar: "لا تقلق بشأن الامتحان، سيكون الأمر في غاية السهولة!",
      ru: "Не паришься насчет экзамена, это будет проще пареной репы!"
    }
  },
  {
    id: 82,
    lessonId: 17,
    english: "I guess I just have to bite the bullet and get it over with.",
    translations: {
      pt: "Acho que vou ter que engolir o sapo e resolver isso de uma vez.",
      es: "Supongo que solo tengo que hacer de tripas corazón y terminar con esto.",
      fr: "Je pense que je dois juste prendre mon mal en patience et en finir.",
      de: "Ich glaube, ich muss einfach in den sauren Apfel beißen und es hinter mich bringen.",
      zh: "看来我只能咬紧牙关硬着头皮把它做完了。",
      ja: "腹をくくって終わらせるしかないようです。",
      hi: "मुझे लगता है कि मुझे हिम्मत जुटाकर इसे खत्म करना होगा।",
      ar: "أعتقد أنه يتعين علي فقط تحمل المشقة وإنهائها.",
      ru: "Думаю, мне просто придется стиснуть зубы и покончить с этим."
    }
  },
  {
    id: 83,
    lessonId: 17,
    english: "Are you going on stage now? Break a leg out there!",
    translations: {
      pt: "Você vai subir ao palco agora? Arrebenta lá!",
      es: "¿Vas a subir al escenario ahora? ¡Mucha suerte!",
      fr: "Tu montes sur scène maintenant ? Merde pour ta prestation !",
      de: "Gehst du jetzt auf die Bühne? Hals- und Beinbruch!",
      zh: "你现在要上台了吗？祝你大获成功！",
      ja: "これからステージに上がるの？成功を祈ってるよ！",
      hi: "क्या आप अभी मंच पर जा रहे हैं? शुभकामनाएं!",
      ar: "هل ستصعد على المسرح الآن؟ حظاً سعيداً!",
      ru: "Ты сейчас выходишь на сцену? Ни пуха ни пера!"
    }
  },
  {
    id: 84,
    lessonId: 17,
    english: "You completely hit the nail on the head with that explanation.",
    translations: {
      pt: "Você acertou em cheio com essa explicação.",
      es: "Le diste al clavo completamente con esa explicación.",
      fr: "Tu as mis le doigt dessus avec cette explication.",
      de: "Du hast mit dieser Erklärung den Nagel auf den Kopf getroffen.",
      zh: "你的解释讲得太到位了，完全一针见血。",
      ja: "その説明、まさに核心を突いていますね。",
      hi: "आपने उस व्याख्या के साथ बिल्कुल सही बात कही।",
      ar: "لقد أصبت الكبد بالحقيقة في ذلك الشرح.",
      ru: "Ты попал в самое яблочко своим объяснением."
    }
  },
  {
    id: 85,
    lessonId: 17,
    english: "I won't make it tonight, I'm feeling a bit under the weather.",
    translations: {
      pt: "Não vou conseguir ir hoje à noite, estou me sentindo meio indisposto.",
      es: "No podré ir esta noche, me siento un poco indispuesto.",
      fr: "Je ne pourrai pas venir ce soir, je ne me sens pas très bien.",
      de: "Ich schaffe es heute Abend nicht, ich fühle mich nicht so gut.",
      zh: "我今晚去不成了，身体感觉有点不适。",
      ja: "今夜は行けそうにありません、少し体調が悪くて。",
      hi: "मैं आज रात नहीं आ पाऊँगा, मेरी तबीयत थोड़ी खराब है।",
      ar: "لن أستطيع الحضور الليلة، أشعر ببعض التوعك.",
      ru: "Я не смогу прийти сегодня вечером, я немного приболел."
    }
  },

  // Lesson 18: Tech & Remote Work
  {
    id: 86,
    lessonId: 18,
    english: "Sorry to interrupt, but you're on mute, we can't hear you!",
    translations: {
      pt: "Desculpe interromper, mas seu microfone está mutado, não te ouvimos!",
      es: "Perdón por interrumpir, pero estás en silencio, ¡no te escuchamos!",
      fr: "Désolé de t'interrompre, mais ton micro est coupé, on ne t'entend pas !",
      de: "Entschuldigung für die Unterbrechung, aber du bist stummgeschaltet!",
      zh: "不好意思打断一下，你静音了，我们听不到你说话！",
      ja: "割って入ってすみません、マイクがミュートになっています！",
      hi: "माफ़ कीजिए, लेकिन आप म्यूट पर हैं, हम आपको सुन नहीं पा रहे हैं!",
      ar: "عذراً للمقاطعة، لكن صوتك مكتوم، لا نستطيع سماعك!",
      ru: "Извини, что перебиваю, но у тебя выключен микрофон, мы тебя не слышим!"
    }
  },
  {
    id: 87,
    lessonId: 18,
    english: "Let me share my screen real quick so everyone can see the presentation.",
    translations: {
      pt: "Deixa eu compartilhar minha tela rapidinho para todos verem a apresentação.",
      es: "Déjame compartir mi pantalla rápidamente para que todos vean la presentación.",
      fr: "Laissez-moi partager mon écran rapidement pour que tout le monde voie la présentation.",
      de: "Ich teile kurz meinen Bildschirm, damit jeder die Präsentation sehen kann.",
      zh: "我快速分享一下屏幕，方便大家看演示文稿。",
      ja: "皆さんにプレゼン資料が見えるよう、画面を共有しますね。",
      hi: "मैं जल्दी से अपनी स्क्रीन शेयर करता हूँ ताकि सब प्रेजेंटेशन देख सकें।",
      ar: "دعني أشارك شاشتي بسرعة ليرى الجميع العرض التقديمي.",
      ru: "Давайте я быстро покажу свой экран, чтобы все увидели презентацию."
    }
  },
  {
    id: 88,
    lessonId: 18,
    english: "Could you drop the link in the meeting chat, please?",
    translations: {
      pt: "Você poderia mandar o link no chat da reunião, por favor?",
      es: "¿Podrías dejar el enlace en el chat de la reunión, por favor?",
      fr: "Pourriez-vous mettre le lien dans le chat de la réunion, s'il vous plaît ?",
      de: "Könntest du den Link bitte in den Meeting-Chat stellen?",
      zh: "请问你能把链接发到会议聊天框里吗？",
      ja: "ミーティングのチャット欄にリンクを貼っていただけますか？",
      hi: "क्या आप कृपया मीटिंग चैट में लिंक शेयर कर सकते हैं?",
      ar: "هل يمكنك وضع الرابط في محادثة الاجتماع من فضلك؟",
      ru: "Не могли бы вы скинуть ссылку в чат встречи, пожалуйста?"
    }
  },
  {
    id: 89,
    lessonId: 18,
    english: "Sorry about that, your audio is breaking up a bit.",
    translations: {
      pt: "Desculpe por isso, seu áudio está cortando um pouco.",
      es: "Disculpa por eso, tu audio se está cortando un poco.",
      fr: "Désolé pour ça, ton son coupe un peu.",
      de: "Entschuldigung, deine Audioverbindung bricht etwas ab.",
      zh: "抱歉，你的声音听起来有点卡顿断续。",
      ja: "すみません、音声が少し途切れているようです。",
      hi: "माफ़ कीजिए, आपकी आवाज़ थोड़ी कट-कट कर आ रही है।",
      ar: "عذراً بشأن ذلك، صوتك يتقطع قليلاً.",
      ru: "Извини, у тебя немного прерывается звук."
    }
  },
  {
    id: 90,
    lessonId: 18,
    english: "I'll follow up with a detailed summary email after this call.",
    translations: {
      pt: "Vou mandar um email de acompanhamento com o resumo detalhado após esta chamada.",
      es: "Enviaré un correo de seguimiento con el resumen detallado después de esta llamada.",
      fr: "Je ferai un suivi par e-mail avec un résumé détaillé après cet appel.",
      de: "Ich werde nach diesem Anruf eine E-Mail mit einer Zusammenfassung senden.",
      zh: "会议结束后我会发一封带有详细总结的跟进邮件。",
      ja: "通話終了後、詳細な要約メールをお送りします。",
      hi: "इस कॉल के बाद मैं एक विस्तृत सारांश ईमेल भेजूँगा।",
      ar: "سأتابع بإرسال بريد إلكتروني ملخص وتفصيلي بعد هذه المكالمة.",
      ru: "Я пришлю письмо с подробным резюме сразу после этого звонка."
    }
  },

  // Lesson 19: Coffee Shop & Dining
  {
    id: 91,
    lessonId: 19,
    english: "Could I get a medium iced oat milk latte to go, please?",
    translations: {
      pt: "Você pode me ver um latte gelado com leite de aveia médio para levar, por favor?",
      es: "¿Me das un latte frío con leche de avena mediano para llevar, por favor?",
      fr: "Pourrais-je avoir un latte glacé au lait d'avoine moyen à emporter, s'il vous plaît ?",
      de: "Könnte ich bitte einen mittleren Iced Oat Milk Latte zum Mitnehmen haben?",
      zh: "请给我一杯中杯冰燕麦拿铁外带，谢谢。",
      ja: "アイスオーツミルクラテのMサイズをテイクアウトでお願いします。",
      hi: "क्या मुझे टेकअवे के लिए एक मीडियम आइस ओट मिल्क लाते मिल सकता है, कृपया?",
      ar: "هل يمكنني الحصول على لاتيه بضيافة حليب الشوفان المثلج متوسط الحجم للسفري من فضلك؟",
      ru: "Можно мне средний айс-латте на овсяном молоке с собой, пожалуйста?"
    }
  },
  {
    id: 92,
    lessonId: 19,
    english: "Is that order going to be for here or to go?",
    translations: {
      pt: "Esse pedido vai ser para comer aqui ou para levar?",
      es: "¿Ese pedido va a ser para comer aquí o para llevar?",
      fr: "Cette commande sera sur place ou à emporter ?",
      de: "Ist die Bestellung zum Hieressen oder zum Mitnehmen?",
      zh: "请问是在这里用还是堂食打包带走？",
      ja: "ご注文は店内でお召し上がりですか、テイクアウトですか？",
      hi: "क्या यह ऑर्डर यहाँ खाने के लिए है या ले जाने के लिए?",
      ar: "هل الطلب لتناوله هنا أم سفري؟",
      ru: "Заказ будет здесь или с собой?"
    }
  },
  {
    id: 93,
    lessonId: 19,
    english: "Would it be possible to get an extra shot of espresso in that?",
    translations: {
      pt: "Seria possível colocar um shot extra de café expresso?",
      es: "¿Sería posible ponerle un shot extra de expreso?",
      fr: "Serait-il possible d'avoir un shot d'expresso supplémentaire ?",
      de: "Wäre es möglich, einen zusätzlichen Espresso-Shot zu bekommen?",
      zh: "可以再额外加一份浓缩咖啡吗？",
      ja: "エスプレッソのショットを追加することは可能ですか？",
      hi: "क्या इसमें एक अतिरिक्त एस्प्रेसो शॉट जोड़ना संभव होगा?",
      ar: "هل من الممكن إضافة جرعة إضافية من الإسبريسو؟",
      ru: "Можно добавить туда дополнительный шот эспрессо?"
    }
  },
  {
    id: 94,
    lessonId: 19,
    english: "We'd love to dine in today, table for two please.",
    translations: {
      pt: "Gostaríamos de comer aqui hoje, uma mesa para dois por favor.",
      es: "Nos gustaría comer aquí hoy, una mesa para dos por favor.",
      fr: "Nous aimerions manger sur place aujourd'hui, une table pour deux s'il vous plaît.",
      de: "Wir würden heute gerne hier essen, einen Tisch für zwei bitte.",
      zh: "我们今天想在店里用餐，请给我们安排两人的桌子。",
      ja: "店内での飲食希望です。2人席をお願いします。",
      hi: "हम आज यहीं खाना चाहेंगे, दो लोगों के लिए एक टेबल कृपया।",
      ar: "نود تناول الطعام هنا اليوم، طاولة لشخصين من فضلك.",
      ru: "Мы бы хотели поесть здесь, столик на двоих, пожалуйста."
    }
  },
  {
    id: 95,
    lessonId: 19,
    english: "Could I get the burger with no onions and extra cheese?",
    translations: {
      pt: "Posso pedir o hambúrguer sem cebola e com queijo extra?",
      es: "¿Puedo pedir la hamburguesa sin cebolla y con queso extra?",
      fr: "Puis-je avoir le burger sans oignons et avec du fromage en plus ?",
      de: "Könnte ich den Burger ohne Zwiebeln und mit extra Käse bekommen?",
      zh: "我的汉堡可以不要洋葱并加双份芝士吗？",
      ja: "ハンバーガーを玉ねぎ抜き、チーズ多めでいただけますか？",
      hi: "क्या मुझे बिना प्याज और अतिरिक्त पनीर वाला बर्गर मिल सकता है?",
      ar: "هل يمكنني الحصول على البرجر بدون بصل ومع جبنة إضافية؟",
      ru: "Можно мне бургер без лука и с дополнительным сыром?"
    }
  },

  // Lesson 20: Networking & Connections
  {
    id: 96,
    lessonId: 20,
    english: "So, what line of work are you in these days?",
    translations: {
      pt: "E aí, em qual área você está trabalhando ultimamente?",
      es: "Y bien, ¿en qué área estás trabajando hoy en día?",
      fr: "Alors, dans quel domaine travailles-tu ces temps-ci ?",
      de: "In welcher Branche bist du heutzutage tätig?",
      zh: "话说，你最近在从事什么行当的工作？",
      ja: "ちなみに、最近はどのようなお仕事をされているのですか？",
      hi: "तो, आप इन दिनों किस क्षेत्र में काम कर रहे हैं?",
      ar: "إذاً، ما هو مجال عملك هذه الأيام؟",
      ru: "Итак, в какой сфере ты сейчас работаешь?"
    }
  },
  {
    id: 97,
    lessonId: 20,
    english: "Let me give you my phone number so we can keep in touch!",
    translations: {
      pt: "Deixa eu te passar meu número de telefone para mantermos contato!",
      es: "¡Déjame darte mi número de teléfono para estar en contacto!",
      fr: "Laisse-moi te donner mon numéro pour qu'on reste en contact !",
      de: "Lass mich dir meine Telefonnummer geben, damit wir in Kontakt bleiben!",
      zh: "我留个电话号码给你，咱们方便保持联系！",
      ja: "連絡を取り合えるよう、電話番号をお伝えしますね！",
      hi: "मैं आपको अपना फोन नंबर दे देता हूँ ताकि हम संपर्क में रह सकें!",
      ar: "دعني أعطيك رقم هاتفي حتى نتمكن من البقاء على تواصل!",
      ru: "Давай я дам тебе свой номер телефона, чтобы мы не теряли связь!"
    }
  },
  {
    id: 98,
    lessonId: 20,
    english: "Let me add you on LinkedIn so we can stay connected professionally.",
    translations: {
      pt: "Deixa eu te adicionar no LinkedIn para mantermos contato profissional.",
      es: "Déjame agregarte en LinkedIn para mantener el contacto profesional.",
      fr: "Laisse-moi t'ajouter sur LinkedIn pour qu'on reste en contact professionnellement.",
      de: "Lass mich dich auf LinkedIn hinzufügen, damit wir beruflich in Kontakt bleiben.",
      zh: "我们在LinkedIn上加个好友吧，方便职场交流。",
      ja: "仕事上のつながりのためにLinkedInで繋がりましょう。",
      hi: "मैं आपको लिंक्डइन पर जोड़ लेता हूँ ताकि हम पेशेवर रूप से जुड़े रहें।",
      ar: "دعني أضيفك على لينكد إن لنبقى على تواصل مهني.",
      ru: "Давай добавлю тебя в LinkedIn, чтобы поддерживать деловые контакты."
    }
  },
  {
    id: 99,
    lessonId: 20,
    english: "That funny story really helped break the ice with the group.",
    translations: {
      pt: "Aquela história engraçada realmente ajudou a quebrar o gelo com o pessoal.",
      es: "Esa historia divertida realmente ayudó a romper el hielo con el grupo.",
      fr: "Cette histoire drôle a vraiment aidé à briser la glace avec le groupe.",
      de: "Diese lustige Geschichte hat wirklich geholfen, das Eis in der Gruppe zu brechen.",
      zh: "那个幽默的故事真的很有效地打破了大家之间的尴尬沉默。",
      ja: "あの面白い話のおかげでグループの緊張がほぐれましたね。",
      hi: "उस मजेदार कहानी ने वास्तव में समूह के बीच की झिझक खत्म कर दी।",
      ar: "ساعدت تلك القصة المضحكة حقاً في كسر الجمود مع المجموعة.",
      ru: "Эта смешная история действительно помогла разрядить обстановку в группе."
    }
  },
  {
    id: 100,
    lessonId: 20,
    english: "That sounds like a solid plan, count me in for sure!",
    translations: {
      pt: "Parece um plano super sólido, pode contar comigo com certeza!",
      es: "¡Suena como un plan genial, cuenta conmigo sin duda!",
      fr: "Ça a l'air d'être un super plan, compte sur moi sans hésiter !",
      de: "Das klingt nach einem super Plan, ich bin definitiv dabei!",
      zh: "这方案听起来非常靠谱，算我一份！",
      ja: "素晴らしいプランですね、絶対に参加させてください！",
      hi: "यह एक बेहतरीन योजना लग रही है, मुझे ज़रूर शामिल करें!",
      ar: "تبدو هذه خطة ممتازة، احسب حسابي حتماً!",
      ru: "Звучит как отличный план, я обязательно с вами!"
    }
  }
];
