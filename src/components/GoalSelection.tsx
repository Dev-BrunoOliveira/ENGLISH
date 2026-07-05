import React from 'react';
import { Briefcase, Plane, Film, BookOpen, Globe } from 'lucide-react';
import { availableLanguages } from '../data/phrases';

interface GoalSelectionProps {
  nativeLang: string;
  onSetNativeLang: (lang: string) => void;
  onSelectGoal: (goal: 'work' | 'travel' | 'entertainment' | 'study') => void;
}

const translations: Record<string, any> = {
  pt: {
    titlePrefix: 'Qual é o seu maior ',
    titleHighlight: 'objetivo',
    titleSuffix: '?',
    subtitle: 'Nós vamos adaptar o vocabulário e os desafios das 1000 frases para focar exatamente no que você mais precisa aprender agora.',
    workTitle: 'Trabalho / Carreira',
    workDesc: 'Business English, entrevistas e reuniões.',
    travelTitle: 'Viagens',
    travelDesc: 'Aeroportos, hotéis e sobrevivência no exterior.',
    entertainmentTitle: 'Filmes e Música',
    entertainmentDesc: 'Gírias, expressões e cultura pop.',
    studyTitle: 'Estudos / Geral',
    studyDesc: 'O essencial do dia a dia para fluência.'
  },
  es: {
    titlePrefix: '¿Cuál es tu mayor ',
    titleHighlight: 'objetivo',
    titleSuffix: '?',
    subtitle: 'Adaptaremos el vocabulario y los desafíos de las 1000 frases para enfocarnos exactamente en lo que más necesitas aprender ahora.',
    workTitle: 'Trabajo / Carrera',
    workDesc: 'Inglés de negocios, entrevistas y reuniones.',
    travelTitle: 'Viajes',
    travelDesc: 'Aeropuertos, hoteles y supervivencia en el extranjero.',
    entertainmentTitle: 'Películas y Música',
    entertainmentDesc: 'Jerga, expresiones y cultura pop.',
    studyTitle: 'Estudios / General',
    studyDesc: 'Lo esencial del día a día para la fluidez.'
  },
  en: {
    titlePrefix: 'What is your main ',
    titleHighlight: 'goal',
    titleSuffix: '?',
    subtitle: 'We will adapt the vocabulary and challenges of the 1000 phrases to focus exactly on what you need to learn right now.',
    workTitle: 'Work / Career',
    workDesc: 'Business English, interviews, and meetings.',
    travelTitle: 'Travel',
    travelDesc: 'Airports, hotels, and surviving abroad.',
    entertainmentTitle: 'Movies & Music',
    entertainmentDesc: 'Slang, expressions, and pop culture.',
    studyTitle: 'Study / General',
    studyDesc: 'The daily essentials for fluency.'
  },
  fr: {
    titlePrefix: 'Quel est votre principal ',
    titleHighlight: 'objectif',
    titleSuffix: ' ?',
    subtitle: 'Nous adapterons le vocabulaire et les défis des 1000 phrases pour nous concentrer exactement sur ce que vous devez apprendre maintenant.',
    workTitle: 'Travail / Carrière',
    workDesc: 'Anglais des affaires, entretiens et réunions.',
    travelTitle: 'Voyages',
    travelDesc: 'Aéroports, hôtels et survie à l\'étranger.',
    entertainmentTitle: 'Films et Musique',
    entertainmentDesc: 'Argot, expressions et culture pop.',
    studyTitle: 'Études / Général',
    studyDesc: 'Les essentiels quotidiens pour la fluidité.'
  },
  de: {
    titlePrefix: 'Was ist dein Haupt',
    titleHighlight: 'ziel',
    titleSuffix: '?',
    subtitle: 'Wir werden das Vokabular und die Herausforderungen der 1000 Sätze anpassen, um uns genau auf das zu konzentrieren, was du jetzt lernen musst.',
    workTitle: 'Arbeit / Karriere',
    workDesc: 'Wirtschaftsenglisch, Interviews und Meetings.',
    travelTitle: 'Reisen',
    travelDesc: 'Flughäfen, Hotels und Überleben im Ausland.',
    entertainmentTitle: 'Filme & Musik',
    entertainmentDesc: 'Umgangssprache, Ausdrücke und Popkultur.',
    studyTitle: 'Studium / Allgemein',
    studyDesc: 'Die Grundlagen für den Alltag.'
  },
  zh: {
    titlePrefix: '你主要的',
    titleHighlight: '目标',
    titleSuffix: '是什么？',
    subtitle: '我们将调整这 1000 个短语的词汇和挑战，准确聚焦于您现在需要学习的内容。',
    workTitle: '工作 / 职业',
    workDesc: '商务英语，面试和会议。',
    travelTitle: '旅行',
    travelDesc: '机场，酒店和在国外生存。',
    entertainmentTitle: '电影与音乐',
    entertainmentDesc: '俚语，表达方式和流行文化。',
    studyTitle: '学习 / 一般',
    studyDesc: '日常流利的基础。'
  },
  ja: {
    titlePrefix: 'あなたの主な',
    titleHighlight: '目標',
    titleSuffix: 'は何ですか？',
    subtitle: '1000フレーズの語彙と課題を調整し、今学ぶべきことに正確に焦点を当てます。',
    workTitle: '仕事 / キャリア',
    workDesc: 'ビジネス英語、面接、会議。',
    travelTitle: '旅行',
    travelDesc: '空港、ホテル、海外でのサバイバル。',
    entertainmentTitle: '映画と音楽',
    entertainmentDesc: 'スラング、表現、ポップカルチャー。',
    studyTitle: '勉強 / 一般',
    studyDesc: '日常会話の基礎。'
  },
  hi: {
    titlePrefix: 'आपका मुख्य ',
    titleHighlight: 'लक्ष्य',
    titleSuffix: ' क्या है?',
    subtitle: 'हम 1000 वाक्यांशों की शब्दावली और चुनौतियों को बिल्कुल उसी पर ध्यान केंद्रित करने के लिए अनुकूलित करेंगे जो आपको अभी सीखने की आवश्यकता है।',
    workTitle: 'कार्य / करियर',
    workDesc: 'बिजनेस इंग्लिश, इंटरव्यू और मीटिंग्स।',
    travelTitle: 'यात्रा',
    travelDesc: 'हवाई अड्डे, होटल और विदेश में जीवित रहना।',
    entertainmentTitle: 'फिल्में और संगीत',
    entertainmentDesc: 'स्लैंग, भाव और पॉप संस्कृति।',
    studyTitle: 'अध्ययन / सामान्य',
    studyDesc: 'प्रवाह के लिए दैनिक आवश्यकताएं।'
  },
  ar: {
    titlePrefix: 'ما هو ',
    titleHighlight: 'هدفك',
    titleSuffix: ' الرئيسي؟',
    subtitle: 'سنقوم بتكييف مفردات وتحديات الـ 1000 عبارة للتركيز بالضبط على ما تحتاج إلى تعلمه الآن.',
    workTitle: 'العمل / المهنة',
    workDesc: 'اللغة الإنجليزية للأعمال والمقابلات والاجتماعات.',
    travelTitle: 'السفر',
    travelDesc: 'المطارات والفنادق والبقاء على قيد الحياة في الخارج.',
    entertainmentTitle: 'أفلام وموسيقى',
    entertainmentDesc: 'العامية والتعبيرات والثقافة الشعبية.',
    studyTitle: 'دراسة / عام',
    studyDesc: 'الأساسيات اليومية للطلاقة.'
  },
  ru: {
    titlePrefix: 'Какова ваша главная ',
    titleHighlight: 'цель',
    titleSuffix: '?',
    subtitle: 'Мы адаптируем словарный запас и задачи из 1000 фраз, чтобы сосредоточиться именно на том, что вам нужно выучить прямо сейчас.',
    workTitle: 'Работа / Карьера',
    workDesc: 'Деловой английский, интервью и встречи.',
    travelTitle: 'Путешествия',
    travelDesc: 'Аэропорты, отели и выживание за границей.',
    entertainmentTitle: 'Кино и музыка',
    entertainmentDesc: 'Сленг, выражения и поп-культура.',
    studyTitle: 'Обучение / Общее',
    studyDesc: 'Ежедневные основы для беглости.'
  }
};

export const GoalSelection: React.FC<GoalSelectionProps> = ({ nativeLang, onSetNativeLang, onSelectGoal }) => {
  const t = translations[nativeLang] || translations['en']; // fallback to English

  const goals = [
    {
      id: 'work' as const,
      title: t.workTitle,
      description: t.workDesc,
      icon: <Briefcase size={32} />,
      color: 'from-blue-500 to-cyan-500',
      shadow: 'rgba(59, 130, 246, 0.5)'
    },
    {
      id: 'travel' as const,
      title: t.travelTitle,
      description: t.travelDesc,
      icon: <Plane size={32} />,
      color: 'from-orange-500 to-yellow-500',
      shadow: 'rgba(249, 115, 22, 0.5)'
    },
    {
      id: 'entertainment' as const,
      title: t.entertainmentTitle,
      description: t.entertainmentDesc,
      icon: <Film size={32} />,
      color: 'from-purple-500 to-pink-500',
      shadow: 'rgba(168, 85, 247, 0.5)'
    },
    {
      id: 'study' as const,
      title: t.studyTitle,
      description: t.studyDesc,
      icon: <BookOpen size={32} />,
      color: 'from-green-500 to-emerald-500',
      shadow: 'rgba(34, 197, 94, 0.5)'
    }
  ];

  return (
    <div style={{
      flex: 1, 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '2rem',
      minHeight: '100vh',
      animation: 'fadeInOut 0.5s ease-out backwards' // simple fade in
    }}>
      
      <img src="/mascot.png" alt="Mascot" style={{ width: '120px', height: '120px', objectFit: 'contain', marginBottom: '1rem', filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.3))' }} />
      
      {/* Language Selector */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
        <Globe size={18} color="white" />
        <select 
          value={nativeLang}
          onChange={(e) => onSetNativeLang(e.target.value)}
          style={{ 
            background: 'transparent', color: 'white', border: 'none', 
            outline: 'none', fontFamily: 'inherit', fontSize: '0.9rem',
            cursor: 'pointer'
          }}
        >
          {availableLanguages.map(lang => (
            <option key={lang.code} value={lang.code} style={{ color: 'black' }}>{lang.name}</option>
          ))}
        </select>
      </div>

      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', textAlign: 'center', color: 'white' }}>
        {t.titlePrefix} <span className="text-gradient">{t.titleHighlight}</span>{t.titleSuffix}
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', textAlign: 'center', fontSize: '1.1rem', maxWidth: '600px' }}>
        {t.subtitle}
      </p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
        gap: '1rem',
        width: '100%',
        maxWidth: '800px'
      }}>
        {goals.map((goal) => (
          <button
            key={goal.id}
            onClick={() => onSelectGoal(goal.id)}
            className="glass-panel"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem 1.5rem',
              border: '1px solid var(--glass-border)',
              borderRadius: '24px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center',
              background: 'rgba(0, 0, 0, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.borderColor = goal.shadow.replace('0.5', '0.8');
              e.currentTarget.style.boxShadow = `0 12px 40px ${goal.shadow}`;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--glass-border)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
            }}
          >
            <div 
              style={{ 
                marginBottom: '1rem', 
                padding: '1rem', 
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${goal.shadow.replace('0.5', '0.8')}, ${goal.shadow.replace('0.5', '0.2')})`,
                color: 'white'
              }}
            >
              {goal.icon}
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>{goal.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>{goal.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
