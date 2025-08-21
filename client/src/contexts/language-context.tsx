import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "hi" | "mr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Founder screen
    "founder.title": "Rashtrasant Tukadoji Maharaj",
    "founder.subtitle": "Pioneer of National Unity and Education",
    "founder.university": "Rashtrasant Tukadoji Maharaj Nagpur University",
    
    // Splash screen
    "splash.verse": "Let brotherhood flourish in this India |\nLet all religions and sects appear as one |\nLet there be no differences ||",
    "splash.title": "RTMNU Student Scheme App",
    "splash.description": "App providing information about all schemes,\nemployment opportunities and educational opportunities",
    "splash.getStarted": "Get Started",
    "splash.selectLanguage": "Select Language",
    "splash.english": "English",
    "splash.hindi": "Hindi", 
    "splash.marathi": "Marathi",
    
    // Main app
    "main.title": "RTMNU Student Scheme App",
    "main.welcome": "Welcome! We are with you in your educational journey",
    "main.schemes": "Educational Schemes",
    "main.schemesDesc": "Information about all educational schemes and scholarships available for students",
    "main.viewSchemes": "View Schemes",
    "main.jobs": "Employment Opportunities",
    "main.jobsDesc": "Find and apply for new job and career opportunities",
    "main.viewJobs": "View Jobs",
    "main.admissions": "Admission Process",
    "main.admissionsDesc": "Admission process and important dates for various courses",
    "main.admissionInfo": "Admission Info",
    "main.support": "Help Center",
    "main.supportDesc": "Get help for your questions and receive guidance",
    "main.getHelp": "Get Help",
    "main.footer": "© Rashtrasant Tukadoji Maharaj Nagpur University",
    "app.loadingTitle": "Loading App...",
    "app.loadingMessage": "Preparing your dashboard"
  },
  hi: {
    // Founder screen
    "founder.title": "राष्ट्रसंत तुकडोजी महाराज",
    "founder.subtitle": "राष्ट्रीय एकता और शिक्षा के प्रणेता",
    "founder.university": "राष्ट्रसंत तुकडोजी महाराज नागपुर विश्वविद्यालय",
    
    // Splash screen
    "splash.verse": "इस भारत में भाईचारा हमेशा बसे |\nये सभी पंथ - संप्रदाय एक दिखें |\nमतभेद न हों ||",
    "splash.title": "RTMNU विद्यार्थी योजना ऐप",
    "splash.description": "सभी योजनाओं, रोजगार के अवसरों और\nशैक्षणिक अवसरों की जानकारी देने वाला ऐप",
    "splash.getStarted": "शुरू करें",
    "splash.selectLanguage": "भाषा चुनें",
    "splash.english": "अंग्रेजी",
    "splash.hindi": "हिंदी",
    "splash.marathi": "मराठी",
    
    // Main app
    "main.title": "RTMNU विद्यार्थी योजना ऐप",
    "main.welcome": "स्वागत है! आपकी शैक्षणिक यात्रा में हम आपके साथ हैं",
    "main.schemes": "शैक्षणिक योजनाएं",
    "main.schemesDesc": "विद्यार्थियों के लिए उपलब्ध सभी शैक्षणिक योजनाओं और छात्रवृत्तियों की जानकारी",
    "main.viewSchemes": "योजनाएं देखें",
    "main.jobs": "रोजगार के अवसर",
    "main.jobsDesc": "नई नौकरी और करियर के अवसर खोजें और आवेदन करें",
    "main.viewJobs": "नौकरियां देखें",
    "main.admissions": "प्रवेश प्रक्रिया",
    "main.admissionsDesc": "विभिन्न पाठ्यक्रमों के लिए प्रवेश प्रक्रिया और महत्वपूर्ण तारीखें",
    "main.admissionInfo": "प्रवेश जानकारी",
    "main.support": "सहायता केंद्र",
    "main.supportDesc": "अपने प्रश्नों के लिए सहायता लें और मार्गदर्शन प्राप्त करें",
    "main.getHelp": "सहायता लें",
    "main.footer": "© राष्ट्रसंत तुकडोजी महाराज नागपुर विश्वविद्यालय",
    "app.loadingTitle": "ऐप लोड हो रहा है...",
    "app.loadingMessage": "आपका डैशबोर्ड तैयार किया जा रहा है"
  },
  mr: {
    // Founder screen
    "founder.title": "राष्ट्रसंत तुकडोजी महाराज",
    "founder.subtitle": "राष्ट्रीय एकता आणि शिक्षणाचे प्रणेते",
    "founder.university": "राष्ट्रसंत तुकडोजी महाराज नागपूर विद्यापीठ",
    
    // Splash screen
    "splash.verse": "या भारतात बंधुभाव नित्य वसू दे |\nहे सर्व पंथ - संप्रदाय एक दिसू दे |\nमतभेद नसू दे ||",
    "splash.title": "RTMNU विद्यार्थी योजना ॲप",
    "splash.description": "सर्व योजनांची, रोजगारांच्या संधी आणि\nशैक्षणिक संधींची माहिती देणारी ॲप",
    "splash.getStarted": "सुरुवात करा",
    "splash.selectLanguage": "भाषा निवडा",
    "splash.english": "इंग्रजी",
    "splash.hindi": "हिंदी",
    "splash.marathi": "मराठी",
    
    // Main app
    "main.title": "RTMNU विद्यार्थी योजना ॲप",
    "main.welcome": "स्वागत आहे! आपल्या शैक्षणिक प्रवासात आम्ही आपल्यासोबत आहोत",
    "main.schemes": "शैक्षणिक योजना",
    "main.schemesDesc": "विद्यार्थ्यांसाठी उपलब्ध सर्व शैक्षणिक योजना आणि शिष्यवृत्तीची माहिती",
    "main.viewSchemes": "योजना पहा",
    "main.jobs": "रोजगार संधी",
    "main.jobsDesc": "नवीन नोकरी आणि करिअरच्या संधी शोधा आणि अर्ज करा",
    "main.viewJobs": "नोकऱ्या पहा",
    "main.admissions": "प्रवेश प्रक्रिया",
    "main.admissionsDesc": "विविध अभ्यासक्रमांसाठी प्रवेश प्रक्रिया आणि महत्वाच्या तारखा",
    "main.admissionInfo": "प्रवेश माहिती",
    "main.support": "मदत केंद्र",
    "main.supportDesc": "आपल्या प्रश्नांसाठी मदत घ्या आणि मार्गदर्शन मिळवा",
    "main.getHelp": "मदत घ्या",
    "main.footer": "© राष्ट्रसंत तुकडोजी महाराज नागपूर विद्यापीठ",
    "app.loadingTitle": "ॲप लोड होत आहे...",
    "app.loadingMessage": "आपले डॅशबोर्ड तयार केले जात आहे"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("mr");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("rtmnu-language") as Language;
    if (savedLanguage && ["en", "hi", "mr"].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("rtmnu-language", lang);
  };

  const t = (key: string): string => {
    // This specific verse should always remain in Marathi regardless of language selection
    if (key === "splash.verse") {
      return "या भारतात बंधुभाव नित्य वसू दे |\nहे सर्व पंथ - संप्रदाय एक दिसू दे |\nमतभेद नसू दे ||";
    }
    
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}