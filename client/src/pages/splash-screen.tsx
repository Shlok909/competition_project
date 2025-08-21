import { useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/language-context";
import { Globe, Sparkles, Loader2 } from "lucide-react";
import rtmnuLogo from "@assets/image_1755784249798.png";

export default function SplashScreen() {
  const [, setLocation] = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleGetStarted = () => {
    setIsTransitioning(true);
    // Add a smooth transition delay before navigation
    setTimeout(() => {
      setLocation("/app");
    }, 1200);
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } }
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } }
  };

  const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut", delay: 0.4 } }
  };

  const exitVariants = {
    exit: { 
      opacity: 0, 
      scale: 1.1, 
      filter: "blur(10px)",
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-400 flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative overflow-hidden" 
        data-testid="splash-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={isTransitioning ? exitVariants.exit : {}}
        transition={{ duration: 0.6 }}
      >
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            animate={{
              x: [Math.random() * 100, Math.random() * 100],
              y: [Math.random() * 100, Math.random() * 100],
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Language selector floating button */}
      <motion.div 
        className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowLanguageSelector(!showLanguageSelector)}
          className="bg-white/90 backdrop-blur-sm border-white/50 text-blue-800 hover:bg-white/95"
          data-testid="language-toggle-button"
        >
          <Globe className="w-4 h-4 mr-1" />
          {language === "en" ? "EN" : language === "hi" ? "HI" : "MR"}
        </Button>
        
        {showLanguageSelector && (
          <motion.div
            className="absolute top-12 right-0 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-white/50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            data-testid="language-selector"
          >
            <div className="space-y-1">
              {[
                { code: "en", label: t("splash.english") },
                { code: "hi", label: t("splash.hindi") },
                { code: "mr", label: t("splash.marathi") }
              ].map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code as any);
                    setShowLanguageSelector(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded text-sm font-medium transition-colors ${
                    language === lang.code 
                      ? "bg-blue-100 text-blue-800" 
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  data-testid={`language-option-${lang.code}`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
      
      {/* Main content container */}
      <div className="relative z-10 w-full max-w-sm mx-auto text-center space-y-6 flex-1 flex flex-col justify-center">
        
        {/* University Logo Section with sparkle effect */}
        <motion.div 
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center relative"
          data-testid="university-logo-section"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-28 h-28 border-4 border-cyan-300/30 rounded-full"
            />
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl mb-6 inline-block relative">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center relative overflow-hidden border border-white/20">
                <img 
                  src={rtmnuLogo} 
                  alt="RTMNU Logo"
                  className="w-16 h-16 object-contain rounded-lg relative z-10"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent"
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
              </div>
              {/* Sparkle effects */}
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-cyan-400 animate-pulse" />
              <Sparkles className="absolute -bottom-1 -left-1 w-4 h-4 text-blue-400 animate-pulse" style={{ animationDelay: "0.5s" }} />
            </div>
          </div>
        </motion.div>
        
        {/* Verse Text with modern styling */}
        <motion.div 
          variants={slideUpVariants}
          initial="hidden"
          animate="visible"
          className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/50"
          data-testid="verse-section"
        >
          <p className="text-gray-800 font-medium text-sm leading-relaxed font-devanagari">
            {t("splash.verse")}
          </p>
        </motion.div>
        
        {/* App Title with dynamic colors */}
        <motion.div 
          variants={scaleInVariants}
          initial="hidden"
          animate="visible"
          data-testid="app-title"
        >
          <motion.h1 
            className="text-white text-2xl font-bold mb-3 text-shadow-sm font-devanagari"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 30px rgba(255,255,255,0.8)",
                "0 0 20px rgba(255,255,255,0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {t("splash.title")}
          </motion.h1>
        </motion.div>
        
        {/* App Description */}
        <motion.div 
          variants={scaleInVariants}
          initial="hidden"
          animate="visible"
          data-testid="app-description"
        >
          <p className="text-white/90 text-sm font-medium leading-relaxed text-shadow-sm font-devanagari">
            {t("splash.description")}
          </p>
        </motion.div>
      </div>
      
      {/* Get Started Button */}
      <motion.div 
        className="w-full max-w-sm space-y-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        data-testid="get-started-section"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={isTransitioning ? { 
            scale: [1, 1.2, 0.8], 
            rotate: [0, 180, 360],
            opacity: [1, 0.7, 0]
          } : {}}
          transition={isTransitioning ? { duration: 0.8, ease: "easeInOut" } : {}}
        >
          <Button
            onClick={handleGetStarted}
            disabled={isTransitioning}
            className="w-full bg-white text-blue-700 hover:bg-white/90 font-bold py-4 text-lg rounded-2xl shadow-2xl border-2 border-white/50 backdrop-blur-sm transition-all duration-300 font-devanagari relative overflow-hidden"
            data-testid="get-started-button"
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 opacity-0 transition-opacity duration-300"
              whileHover={{ opacity: 0.1 }}
            />
            
            {/* Button text with loading animation */}
            <motion.span
              className="relative z-10 flex items-center justify-center gap-2"
              animate={!isTransitioning ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {isTransitioning && <Loader2 className="w-4 h-4 animate-spin" />}
              {isTransitioning ? "Loading App..." : t("splash.getStarted")}
            </motion.span>
            
            {/* Sparkle effects on hover */}
            <motion.div
              className="absolute top-2 right-2 opacity-0"
              whileHover={{ opacity: 1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
            </motion.div>
          </Button>
        </motion.div>
        
        {/* Student-friendly indicator */}
        <motion.div
          className="text-center"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-white/70 text-xs font-medium font-devanagari">
            ✨ {language === "en" ? "Made for Students" : language === "hi" ? "विद्यार्थियों के लिए" : "विद्यार्थ्यांसाठी"} ✨
          </p>
        </motion.div>
      </motion.div>
      
        {/* Bottom safe area for notched phones */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-transparent"></div>
      </motion.div>
    </AnimatePresence>
  );
}
