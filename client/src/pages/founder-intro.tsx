import { useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

export default function FounderIntro() {
  const [, setLocation] = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLocation("/splash");
    }, 2500);

    const handleClick = () => {
      clearTimeout(timer);
      setLocation("/splash");
    };

    document.addEventListener('click', handleClick, { once: true });

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleClick);
    };
  }, [setLocation]);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } }
  };

  const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } }
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.8 } }
  };

  const textGlowVariants = {
    hidden: { opacity: 0, textShadow: "0 0 0px rgba(255,255,255,0)" },
    visible: { 
      opacity: 1, 
      textShadow: "0 0 20px rgba(255,255,255,0.5)",
      transition: { duration: 1, ease: "easeInOut", delay: 1.2 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-400 flex flex-col justify-center items-center px-6 py-8 relative overflow-hidden" data-testid="founder-intro-screen">
      {/* Animated background overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      {/* Radial glow effect */}
      <motion.div 
        className="absolute inset-0 bg-radial-gradient opacity-30"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.3 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{
          background: "radial-gradient(circle at center, rgba(56,189,248,0.3) 0%, transparent 70%)"
        }}
      />
      
      {/* Main content container */}
      <div className="relative z-10 w-full max-w-sm mx-auto text-center space-y-8">
        
        {/* Founder Portrait */}
        <motion.div 
          variants={scaleInVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center"
          data-testid="founder-portrait-section"
        >
          <div className="relative">
            {/* Glow ring around image */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-500 p-1"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-sky-600 to-blue-700" />
            </motion.div>
            
            {/* Founder image */}
            <div className="relative w-40 h-40 mx-auto">
              <motion.img
                src="https://media.assettype.com/esakal%2Fimport%2Fs3fs-public%2Fnews-story%2Fcover-images%2F0tukdoji_20maharaj_0.jpg?w=480&auto=format%2Ccompress&fit=max"
                alt="राष्ट्रसंत तुकडोजी महाराज"
                className="w-full h-full rounded-full object-cover border-4 border-white shadow-2xl"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                data-testid="founder-image"
              />
              
              {/* Light rays effect */}
              <motion.div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, transparent 0deg, rgba(56,189,248,0.3) 45deg, transparent 90deg, rgba(56,189,248,0.3) 135deg, transparent 180deg, rgba(56,189,248,0.3) 225deg, transparent 270deg, rgba(56,189,248,0.3) 315deg, transparent 360deg)"
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
        
        {/* Founder Name with elegant typography */}
        <motion.div 
          variants={textGlowVariants}
          initial="hidden"
          animate="visible"
          data-testid="founder-name"
        >
          <h1 className="text-white text-2xl font-bold mb-2 font-devanagari">
            {t("founder.title")}
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
        </motion.div>
        
        {/* Inspirational subtitle */}
        <motion.div 
          variants={slideUpVariants}
          initial="hidden"
          animate="visible"
          className="bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-white/20"
          data-testid="founder-subtitle"
        >
          <p className="text-cyan-200 text-sm font-medium leading-relaxed font-devanagari">
            {t("founder.subtitle")}
          </p>
        </motion.div>
        
        {/* University connection text */}
        <motion.div 
          variants={slideUpVariants}
          initial="hidden"
          animate="visible"
          data-testid="university-connection"
        >
          <p className="text-white/80 text-xs font-medium opacity-90 leading-relaxed font-devanagari">
            {t("founder.university")}
          </p>
        </motion.div>

        {/* Subtle loading dots */}
        <motion.div 
          className="flex justify-center space-x-1 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          data-testid="loading-dots"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-yellow-400 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
      </div>
      
      {/* Bottom safe area for notched phones */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-transparent"></div>
    </div>
  );
}