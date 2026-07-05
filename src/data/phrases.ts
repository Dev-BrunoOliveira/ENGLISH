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
  { id: 1, title: 'Basics 1', description: 'Essential greetings and simple words.' },
  { id: 2, title: 'Basics 2', description: 'More essentials for daily conversation.' },
  { id: 3, title: 'Questions', description: 'Asking for things and directions.' },
  { id: 4, title: 'Travel & Help', description: 'Useful phrases for traveling.' },
  { id: 5, title: 'Small Talk', description: 'Conversational fillers and polite talk.' },
  { id: 6, title: 'Food & Drink', description: 'Ordering food and expressing hunger.' },
  { id: 7, title: 'Time & Numbers', description: 'Counting and discussing time.' },
  { id: 8, title: 'Directions', description: 'Navigating and finding your way.' },
  { id: 9, title: 'Shopping', description: 'Buying things and asking prices.' },
  { id: 10, title: 'Feelings', description: 'Expressing how you feel.' },
];

export const phrases: Phrase[] = [
  // Lesson 1: Basics 1
  { id: 1, lessonId: 1, english: "Hello", translations: { pt: "Olá", es: "Hola", fr: "Bonjour", de: "Hallo", zh: "你好", ja: "こんにちは", hi: "नमस्ते", ar: "مرحباً", ru: "Привет" } },
  { id: 2, lessonId: 1, english: "Yes", translations: { pt: "Sim", es: "Sí", fr: "Oui", de: "Ja", zh: "是", ja: "はい", hi: "हाँ", ar: "نعم", ru: "Да" } },
  { id: 3, lessonId: 1, english: "No", translations: { pt: "Não", es: "No", fr: "Non", de: "Nein", zh: "不是", ja: "いいえ", hi: "नहीं", ar: "لا", ru: "Нет" } },
  { id: 4, lessonId: 1, english: "Goodbye", translations: { pt: "Tchau", es: "Adiós", fr: "Au revoir", de: "Auf Wiedersehen", zh: "再见", ja: "さようなら", hi: "अलविदा", ar: "وداعاً", ru: "До свидания" } },
  { id: 5, lessonId: 1, english: "Please", translations: { pt: "Por favor", es: "Por favor", fr: "S'il vous plaît", de: "Bitte", zh: "请", ja: "お願いします", hi: "कृपया", ar: "من فضلك", ru: "Пожалуйста" } },
  
  // Lesson 2: Basics 2
  { id: 6, lessonId: 2, english: "Thank you", translations: { pt: "Obrigado(a)", es: "Gracias", fr: "Merci", de: "Danke", zh: "谢谢", ja: "ありがとう", hi: "धन्यवाद", ar: "شكراً", ru: "Спасибо" } },
  { id: 7, lessonId: 2, english: "Excuse me", translations: { pt: "Com licença", es: "Con permiso", fr: "Excusez-moi", de: "Entschuldigung", zh: "打扰一下", ja: "すみません", hi: "माफ़ कीजिए", ar: "معذرة", ru: "Извините" } },
  { id: 8, lessonId: 2, english: "I'm sorry", translations: { pt: "Me desculpe", es: "Lo siento", fr: "Je suis désolé", de: "Es tut mir leid", zh: "对不起", ja: "ごめんなさい", hi: "मुझे खेद है", ar: "أنا آسف", ru: "Мне жаль" } },
  { id: 9, lessonId: 2, english: "I don't know", translations: { pt: "Eu não sei", es: "No lo sé", fr: "Je ne sais pas", de: "Ich weiß nicht", zh: "我不知道", ja: "わかりません", hi: "मुझे नहीं पता", ar: "لا أعرف", ru: "Я не знаю" } },
  { id: 10, lessonId: 2, english: "I love you", translations: { pt: "Eu te amo", es: "Te amo", fr: "Je t'aime", de: "Ich liebe dich", zh: "我爱你", ja: "愛してる", hi: "मैं तुमसे प्यार करता हूँ", ar: "أنا أحبك", ru: "Я тебя люблю" } },

  // Lesson 3: Questions
  { id: 11, lessonId: 3, english: "How are you?", translations: { pt: "Como você está?", es: "¿Cómo estás?", fr: "Comment allez-vous?", de: "Wie geht es dir?", zh: "你好吗？", ja: "お元気ですか？", hi: "आप कैसे हैं?", ar: "كيف حالك؟", ru: "Как дела?" } },
  { id: 12, lessonId: 3, english: "What is your name?", translations: { pt: "Qual é o seu nome?", es: "¿Cómo te llamas?", fr: "Comment vous appelez-vous?", de: "Wie heißt du?", zh: "你叫什么名字？", ja: "お名前は何ですか？", hi: "तुम्हारा नाम क्या है?", ar: "ما اسمك؟", ru: "Как вас зовут?" } },
  { id: 13, lessonId: 3, english: "Where are you from?", translations: { pt: "De onde você é?", es: "¿De dónde eres?", fr: "D'où venez-vous?", de: "Woher kommst du?", zh: "你来自哪里？", ja: "出身はどこですか？", hi: "आप कहाँ से हैं?", ar: "من أين أنت؟", ru: "Откуда вы?" } },
  { id: 14, lessonId: 3, english: "How much is this?", translations: { pt: "Quanto custa isso?", es: "¿Cuánto cuesta esto?", fr: "Combien ça coûte?", de: "Wie viel kostet das?", zh: "这个多少钱？", ja: "これはいくらですか？", hi: "यह कितने का है?", ar: "بكم هذا؟", ru: "Сколько это стоит?" } },
  { id: 15, lessonId: 3, english: "What time is it?", translations: { pt: "Que horas são?", es: "¿Qué hora es?", fr: "Quelle heure est-il?", de: "Wie spät ist es?", zh: "现在几点了？", ja: "今何時ですか？", hi: "क्या समय हुआ है?", ar: "كم الساعة؟", ru: "Который час?" } },

  // Lesson 4: Travel & Help
  { id: 16, lessonId: 4, english: "Where is the bathroom?", translations: { pt: "Onde fica o banheiro?", es: "¿Dónde está el baño?", fr: "Où sont les toilettes?", de: "Wo ist die Toilette?", zh: "洗手间在哪里？", ja: "トイレはどこですか？", hi: "बाथरूम कहाँ है?", ar: "أين الحمام؟", ru: "Где туалет?" } },
  { id: 17, lessonId: 4, english: "I need help", translations: { pt: "Eu preciso de ajuda", es: "Necesito ayuda", fr: "J'ai besoin d'aide", de: "Ich brauche Hilfe", zh: "我需要帮助", ja: "助けが必要です", hi: "मुझे मदद चाहिए", ar: "أحتاج مساعدة", ru: "Мне нужна помощь" } },
  { id: 18, lessonId: 4, english: "I don't understand", translations: { pt: "Eu não entendo", es: "No entiendo", fr: "Je ne comprends pas", de: "Ich verstehe nicht", zh: "我不明白", ja: "理解できません", hi: "मुझे समझ नहीं आया", ar: "لا أفهم", ru: "Я не понимаю" } },
  { id: 19, lessonId: 4, english: "Do you speak English?", translations: { pt: "Você fala inglês?", es: "¿Hablas inglés?", fr: "Parlez-vous anglais?", de: "Sprechen Sie Englisch?", zh: "你会说英语吗？", ja: "英語を話せますか？", hi: "क्या आप अंग्रेजी बोलते हैं?", ar: "هل تتحدث الإنجليزية؟", ru: "Вы говорите по-английски?" } },
  { id: 20, lessonId: 4, english: "Can you repeat that, please?", translations: { pt: "Você pode repetir, por favor?", es: "¿Puedes repetir, por favor?", fr: "Pouvez-vous répéter, s'il vous plaît?", de: "Können Sie das bitte wiederholen?", zh: "请重复一遍好吗？", ja: "もう一度言ってください", hi: "क्या आप इसे दोहरा सकते हैं, कृपया?", ar: "هل يمكنك تكرار ذلك من فضلك؟", ru: "Вы не могли бы повторить, пожалуйста?" } },

  // Lesson 5: Small Talk
  { id: 21, lessonId: 5, english: "I am fine, thank you", translations: { pt: "Estou bem, obrigado(a)", es: "Estoy bien, gracias", fr: "Je vais bien, merci", de: "Mir geht es gut, danke", zh: "我很好，谢谢", ja: "元気です、ありがとう", hi: "मैं ठीक हूँ, धन्यवाद", ar: "أنا بخير، شكراً", ru: "Я в порядке, спасибо" } },
  { id: 22, lessonId: 5, english: "My name is...", translations: { pt: "Meu nome é...", es: "Mi nombre es...", fr: "Mon nom est...", de: "Mein Name ist...", zh: "我的名字是...", ja: "私の名前は...", hi: "मेरा नाम... है", ar: "اسمي...", ru: "Меня зовут..." } },
  { id: 23, lessonId: 5, english: "Nice to meet you", translations: { pt: "Prazer em conhecê-lo(a)", es: "Mucho gusto", fr: "Enchanté(e)", de: "Freut mich", zh: "很高兴认识你", ja: "はじめまして", hi: "आपसे मिलकर अच्छा लगा", ar: "تشرفت بمقابلتك", ru: "Приятно познакомиться" } },
  { id: 24, lessonId: 5, english: "Where is this?", translations: { pt: "Onde fica isso?", es: "¿Dónde es esto?", fr: "Où est-ce?", de: "Wo ist das?", zh: "这是哪里？", ja: "これはどこですか？", hi: "यह कहाँ है?", ar: "أين هذا؟", ru: "Где это?" } },
  { id: 25, lessonId: 5, english: "Have a good day", translations: { pt: "Tenha um bom dia", es: "Que tengas un buen día", fr: "Passez une bonne journée", de: "Einen schönen Tag noch", zh: "祝你有美好的一天", ja: "良い一日を", hi: "आपका दिन शुभ हो", ar: "أتمنى لك يوماً سعيداً", ru: "Хорошего дня" } },

  // Lesson 6: Food & Drink
  { id: 26, lessonId: 6, english: "I am hungry", translations: { pt: "Estou com fome", es: "Tengo hambre", fr: "J'ai faim", de: "Ich habe Hunger", zh: "我饿了", ja: "お腹が空きました", hi: "मुझे भूख लगी है", ar: "أنا جائع", ru: "Я голоден" } },
  { id: 27, lessonId: 6, english: "I am thirsty", translations: { pt: "Estou com sede", es: "Tengo sed", fr: "J'ai soif", de: "Ich bin durstig", zh: "我渴了", ja: "喉が渇きました", hi: "मुझे प्यास लगी है", ar: "أنا عطشان", ru: "Я хочу пить" } },
  { id: 28, lessonId: 6, english: "Water, please", translations: { pt: "Água, por favor", es: "Agua, por favor", fr: "De l'eau, s'il vous plaît", de: "Wasser, bitte", zh: "请给我水", ja: "お水をお願いします", hi: "पानी, कृपया", ar: "ماء من فضلك", ru: "Воды, пожалуйста" } },
  { id: 29, lessonId: 6, english: "The bill, please", translations: { pt: "A conta, por favor", es: "La cuenta, por favor", fr: "L'addition, s'il vous plaît", de: "Die Rechnung, bitte", zh: "请结账", ja: "お会計をお願いします", hi: "बिल, कृपया", ar: "الفاتورة من فضلك", ru: "Счет, пожалуйста" } },
  { id: 30, lessonId: 6, english: "It is delicious", translations: { pt: "Está delicioso", es: "Está delicioso", fr: "C'est délicieux", de: "Es ist lecker", zh: "很好吃", ja: "美味しいです", hi: "यह स्वादिष्ट है", ar: "إنه لذيذ", ru: "Это вкусно" } },

  // Lesson 7: Time & Numbers
  { id: 31, lessonId: 7, english: "One, two, three", translations: { pt: "Um, dois, três", es: "Uno, dos, tres", fr: "Un, deux, trois", de: "Eins, zwei, drei", zh: "一，二，三", ja: "一、二、三", hi: "एक, दो, तीन", ar: "واحد، اثنان، ثلاثة", ru: "Один, два, три" } },
  { id: 32, lessonId: 7, english: "Today", translations: { pt: "Hoje", es: "Hoy", fr: "Aujourd'hui", de: "Heute", zh: "今天", ja: "今日", hi: "आज", ar: "اليوم", ru: "Сегодня" } },
  { id: 33, lessonId: 7, english: "Tomorrow", translations: { pt: "Amanhã", es: "Mañana", fr: "Demain", de: "Morgen", zh: "明天", ja: "明日", hi: "कल", ar: "غداً", ru: "Завтра" } },
  { id: 34, lessonId: 7, english: "Yesterday", translations: { pt: "Ontem", es: "Ayer", fr: "Hier", de: "Gestern", zh: "昨天", ja: "昨日", hi: "बीता हुआ कल", ar: "أمس", ru: "Вчера" } },
  { id: 35, lessonId: 7, english: "Now", translations: { pt: "Agora", es: "Ahora", fr: "Maintenant", de: "Jetzt", zh: "现在", ja: "今", hi: "अब", ar: "الآن", ru: "Сейчас" } },

  // Lesson 8: Directions
  { id: 36, lessonId: 8, english: "Left", translations: { pt: "Esquerda", es: "Izquierda", fr: "Gauche", de: "Links", zh: "左边", ja: "左", hi: "बाएं", ar: "يسار", ru: "Лево" } },
  { id: 37, lessonId: 8, english: "Right", translations: { pt: "Direita", es: "Derecha", fr: "Droite", de: "Rechts", zh: "右边", ja: "右", hi: "दाएं", ar: "يمين", ru: "Право" } },
  { id: 38, lessonId: 8, english: "Straight ahead", translations: { pt: "Em frente", es: "Todo recto", fr: "Tout droit", de: "Geradeaus", zh: "一直走", ja: "まっすぐ", hi: "सीधे आगे", ar: "إلى الأمام", ru: "Прямо" } },
  { id: 39, lessonId: 8, english: "Stop", translations: { pt: "Pare", es: "Alto", fr: "Arrêt", de: "Halt", zh: "停", ja: "止まれ", hi: "रुको", ar: "قف", ru: "Стоп" } },
  { id: 40, lessonId: 8, english: "Where is the station?", translations: { pt: "Onde fica a estação?", es: "¿Dónde está la estación?", fr: "Où est la gare?", de: "Wo ist der Bahnhof?", zh: "车站在哪里？", ja: "駅はどこですか？", hi: "स्टेशन कहाँ है?", ar: "أين المحطة؟", ru: "Где вокзал?" } },

  // Lesson 9: Shopping
  { id: 41, lessonId: 9, english: "I would like this", translations: { pt: "Eu gostaria disso", es: "Me gustaría esto", fr: "Je voudrais ceci", de: "Ich hätte gerne das", zh: "我想要这个", ja: "これをください", hi: "मुझे यह चाहिए", ar: "أود هذا", ru: "Я бы хотел это" } },
  { id: 42, lessonId: 9, english: "Do you have...?", translations: { pt: "Você tem...?", es: "¿Tienes...?", fr: "Avez-vous...?", de: "Haben Sie...?", zh: "你有...吗？", ja: "...はありますか？", hi: "क्या आपके पास... है?", ar: "هل لديك...؟", ru: "У вас есть...?" } },
  { id: 43, lessonId: 9, english: "It is too expensive", translations: { pt: "É muito caro", es: "Es muy caro", fr: "C'est trop cher", de: "Es ist zu teuer", zh: "太贵了", ja: "高すぎます", hi: "यह बहुत महंगा है", ar: "إنه غالي جداً", ru: "Это слишком дорого" } },
  { id: 44, lessonId: 9, english: "Can I pay with card?", translations: { pt: "Posso pagar com cartão?", es: "¿Puedo pagar con tarjeta?", fr: "Puis-je payer par carte?", de: "Kann ich mit Karte zahlen?", zh: "我可以用卡支付吗？", ja: "カードで払えますか？", hi: "क्या मैं कार्ड से भुगतान कर सकता हूँ?", ar: "هل يمكنني الدفع بالبطاقة؟", ru: "Могу ли я оплатить картой?" } },
  { id: 45, lessonId: 9, english: "I am just looking", translations: { pt: "Estou só olhando", es: "Solo estoy mirando", fr: "Je regarde seulement", de: "Ich schaue nur", zh: "我只是看看", ja: "見ているだけです", hi: "मैं बस देख रहा हूँ", ar: "أنا فقط أنظر", ru: "Я просто смотрю" } },

  // Lesson 10: Feelings
  { id: 46, lessonId: 10, english: "I am happy", translations: { pt: "Estou feliz", es: "Estoy feliz", fr: "Je suis heureux", de: "Ich bin glücklich", zh: "我很开心", ja: "幸せです", hi: "मैं खुश हूँ", ar: "أنا سعيد", ru: "Я счастлив" } },
  { id: 47, lessonId: 10, english: "I am sad", translations: { pt: "Estou triste", es: "Estoy triste", fr: "Je suis triste", de: "Ich bin traurig", zh: "我很伤心", ja: "悲しいです", hi: "मैं उदास हूँ", ar: "أنا حزين", ru: "Мне грустно" } },
  { id: 48, lessonId: 10, english: "I am tired", translations: { pt: "Estou cansado", es: "Estoy cansado", fr: "Je suis fatigué", de: "Ich bin müde", zh: "我累了", ja: "疲れました", hi: "मैं थका हुआ हूँ", ar: "أنا متعب", ru: "Я устал" } },
  { id: 49, lessonId: 10, english: "I am angry", translations: { pt: "Estou com raiva", es: "Estoy enojado", fr: "Je suis en colère", de: "Ich bin wütend", zh: "我很生气", ja: "怒っています", hi: "मुझे गुस्सा आ रहा है", ar: "أنا غاضب", ru: "Я зол" } },
  { id: 50, lessonId: 10, english: "I am sick", translations: { pt: "Estou doente", es: "Estoy enfermo", fr: "Je suis malade", de: "Ich bin krank", zh: "我生病了", ja: "病気です", hi: "मैं बीमार हूँ", ar: "أنا مريض", ru: "Я болен" } },

  // Level 11: Work & Business
  { id: 51, lessonId: 11, english: "I have a meeting", translations: { pt: "Eu tenho uma reunião", es: "Tengo una reunión", fr: "J'ai une réunion", de: "Ich habe ein Meeting", zh: "我有一个会议", ja: "会議があります", hi: "मेरी एक मीटिंग है", ar: "لدي اجتماع", ru: "У меня встреча" } },
  { id: 52, lessonId: 11, english: "Please send the email", translations: { pt: "Por favor, envie o email", es: "Por favor envía el correo", fr: "Veuillez envoyer l'e-mail", de: "Bitte senden Sie die E-Mail", zh: "请发送电子邮件", ja: "メールを送ってください", hi: "कृपया ईमेल भेजें", ar: "يرجى إرسال البريد الإلكتروني", ru: "Пожалуйста, отправьте электронное письмо" } },
  { id: 53, lessonId: 11, english: "I agree", translations: { pt: "Eu concordo", es: "Estoy de acuerdo", fr: "Je suis d'accord", de: "Ich stimme zu", zh: "我同意", ja: "同意します", hi: "मैं सहमत हूँ", ar: "أنا أوافق", ru: "Я согласен" } },
  { id: 54, lessonId: 11, english: "I disagree", translations: { pt: "Eu discordo", es: "No estoy de acuerdo", fr: "Je ne suis pas d'accord", de: "Ich stimme nicht zu", zh: "我不同意", ja: "同意しません", hi: "मैं असहमत हूँ", ar: "أنا لا أوافق", ru: "Я не согласен" } },
  { id: 55, lessonId: 11, english: "Good job", translations: { pt: "Bom trabalho", es: "Buen trabajo", fr: "Bon travail", de: "Gute Arbeit", zh: "干得好", ja: "よくやりました", hi: "बहुत बढ़िया", ar: "عمل جيد", ru: "Хорошая работа" } },

  // Level 12: Entertainment & Pop Culture
  { id: 56, lessonId: 12, english: "That is awesome", translations: { pt: "Isso é incrível", es: "Eso es increíble", fr: "C'est génial", de: "Das ist großartig", zh: "那太棒了", ja: "それは素晴らしいです", hi: "यह बहुत बढ़िया है", ar: "هذا رائع", ru: "Это потрясающе" } },
  { id: 57, lessonId: 12, english: "I love this song", translations: { pt: "Eu amo essa música", es: "Me encanta esta canción", fr: "J'adore cette chanson", de: "Ich liebe dieses Lied", zh: "我喜欢这首歌", ja: "この歌が大好きです", hi: "मुझे यह गाना बहुत पसंद है", ar: "أنا أحب هذه الأغنية", ru: "Я люблю эту песню" } },
  { id: 58, lessonId: 12, english: "Are you kidding me?", translations: { pt: "Você tá brincando comigo?", es: "¿Estás bromeando?", fr: "Tu te moques de moi?", de: "Machst du Witze?", zh: "你在开玩笑吗？", ja: "冗談でしょう？", hi: "क्या तुम मज़ाक कर रहे हो?", ar: "هل تمزح معي؟", ru: "Ты шутишь?" } },
  { id: 59, lessonId: 12, english: "Let's hang out", translations: { pt: "Vamos dar um rolê", es: "Vamos a pasar el rato", fr: "Sortons", de: "Lass uns abhängen", zh: "我们出去玩吧", ja: "遊びに行こう", hi: "चलो बाहर चलते हैं", ar: "دعنا نخرج", ru: "Давай потусуемся" } },
  { id: 60, lessonId: 12, english: "What a plot twist", translations: { pt: "Que reviravolta", es: "Qué giro inesperado", fr: "Quel rebondissement", de: "Was für eine Wendung", zh: "多大的转折", ja: "なんてどんでん返し", hi: "क्या कहानी में मोड़ है", ar: "يا لها من مفاجأة", ru: "Какой поворот сюжета" } },

  // Level 13: Travel advanced
  { id: 61, lessonId: 13, english: "Where is my luggage?", translations: { pt: "Onde está minha bagagem?", es: "¿Dónde está mi equipaje?", fr: "Où sont mes bagages?", de: "Wo ist mein Gepäck?", zh: "我的行李在哪里？", ja: "私の荷物はどこですか？", hi: "मेरा सामान कहाँ है?", ar: "أين أمتعتي؟", ru: "Где мой багаж?" } },
  { id: 62, lessonId: 13, english: "I missed my flight", translations: { pt: "Eu perdi meu voo", es: "Perdí mi vuelo", fr: "J'ai raté mon vol", de: "Ich habe meinen Flug verpasst", zh: "我错过了航班", ja: "フライトに乗り遅れました", hi: "मेरी उड़ान छूट गई", ar: "فاتتني رحلتي", ru: "Я опоздал на рейс" } },
  { id: 63, lessonId: 13, english: "Can I see your passport?", translations: { pt: "Posso ver seu passaporte?", es: "¿Puedo ver tu pasaporte?", fr: "Puis-je voir votre passeport?", de: "Kann ich Ihren Pass sehen?", zh: "能看看你的护照吗？", ja: "パスポートを見せていただけますか？", hi: "क्या मैं आपका पासपोर्ट देख सकता हूँ?", ar: "هل يمكنني رؤية جواز سفرك؟", ru: "Можно посмотреть ваш паспорт?" } },
  { id: 64, lessonId: 13, english: "I have nothing to declare", translations: { pt: "Não tenho nada a declarar", es: "No tengo nada que declarar", fr: "Je n'ai rien à déclarer", de: "Ich habe nichts zu verzollen", zh: "我没有什么要申报的", ja: "申告するものはありません", hi: "मेरे पास घोषित करने के लिए कुछ नहीं है", ar: "ليس لدي ما أصرح به", ru: "Мне нечего декларировать" } },
  { id: 65, lessonId: 13, english: "Call an ambulance", translations: { pt: "Chame uma ambulância", es: "Llama a una ambulancia", fr: "Appelez une ambulance", de: "Rufen Sie einen Krankenwagen", zh: "叫救护车", ja: "救急車を呼んでください", hi: "एम्बुलेंस बुलाओ", ar: "اتصل بسيارة إسعاف", ru: "Вызовите скорую" } },

  // Level 14: Daily Life
  { id: 66, lessonId: 14, english: "I need to sleep", translations: { pt: "Eu preciso dormir", es: "Necesito dormir", fr: "J'ai besoin de dormir", de: "Ich muss schlafen", zh: "我需要睡觉", ja: "寝る必要があります", hi: "मुझे सोने की जरूरत है", ar: "أحتاج إلى النوم", ru: "Мне нужно поспать" } },
  { id: 67, lessonId: 14, english: "What are you doing?", translations: { pt: "O que você está fazendo?", es: "¿Qué estás haciendo?", fr: "Que fais-tu?", de: "Was machst du?", zh: "你在做什么？", ja: "何をしていますか？", hi: "तुम क्या कर रहे हो?", ar: "ماذا تفعل؟", ru: "Что ты делаешь?" } },
  { id: 68, lessonId: 14, english: "It is raining", translations: { pt: "Está chovendo", es: "Está lloviendo", fr: "Il pleut", de: "Es regnet", zh: "下雨了", ja: "雨が降っています", hi: "बारिश हो रही है", ar: "إنها تمطر", ru: "Идет дождь" } },
  { id: 69, lessonId: 14, english: "I am busy right now", translations: { pt: "Estou ocupado agora", es: "Estoy ocupado ahora", fr: "Je suis occupé en ce moment", de: "Ich bin gerade beschäftigt", zh: "我现在很忙", ja: "今は忙しいです", hi: "मैं अभी व्यस्त हूँ", ar: "أنا مشغول الآن", ru: "Я сейчас занят" } },
  { id: 70, lessonId: 14, english: "See you later", translations: { pt: "Até mais tarde", es: "Hasta luego", fr: "À plus tard", de: "Bis später", zh: "回头见", ja: "また後で", hi: "बाद में मिलते हैं", ar: "أراك لاحقاً", ru: "Увидимся позже" } },

  // Level 15: Advanced General
  { id: 71, lessonId: 15, english: "It depends", translations: { pt: "Depende", es: "Depende", fr: "Ça dépend", de: "Es kommt darauf an", zh: "看情况", ja: "状況によります", hi: "यह निर्भर करता है", ar: "ذلك يعتمد", ru: "Это зависит" } },
  { id: 72, lessonId: 15, english: "Make yourself at home", translations: { pt: "Sinta-se em casa", es: "Siéntete como en casa", fr: "Faites comme chez vous", de: "Fühlen Sie sich wie zu Hause", zh: "当自己家一样", ja: "くつろいでください", hi: "इसे अपना ही घर समझें", ar: "اعتبر البيت بيتك", ru: "Чувствуйте себя как дома" } },
  { id: 73, lessonId: 15, english: "Never mind", translations: { pt: "Deixa pra lá", es: "No importa", fr: "Tant pis / Laisse tomber", de: "Schon gut / Vergiss es", zh: "没关系", ja: "気にしないで", hi: "कोई बात नहीं", ar: "لا عليك", ru: "Неважно" } },
  { id: 74, lessonId: 15, english: "Take your time", translations: { pt: "Leve o tempo que precisar", es: "Tómate tu tiempo", fr: "Prends ton temps", de: "Lass dir Zeit", zh: "慢慢来", ja: "ゆっくりどうぞ", hi: "अपना समय लें", ar: "خذ وقتك", ru: "Не торопитесь" } },
  { id: 75, lessonId: 15, english: "I have no idea", translations: { pt: "Eu não faço ideia", es: "No tengo idea", fr: "Je n'en ai aucune idée", de: "Ich habe keine Ahnung", zh: "我不知道", ja: "さっぱりわかりません", hi: "मुझे कोई विचार नहीं है", ar: "ليس لدي أي فكرة", ru: "Понятия не имею" } }
];
