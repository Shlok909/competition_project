import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, School, Users, Sparkles, Star, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import backgroundImage from "@assets/rm222-mind-20_1754825033014.jpg";

export default function MainApp() {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time for smooth user experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.03,
      y: -5,
      rotateY: 5,
      transition: { duration: 0.3 }
    }
  };

  const buttonHoverVariants = {
    hover: { 
      scale: 1.05, 
      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.95, 
      transition: { duration: 0.1 }
    }
  };

  const iconFloatVariants = {
    float: {
      y: [-2, 2, -2],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  if (isLoading) {
    return (
      <motion.div 
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center space-y-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full mx-auto"></div>
          </motion.div>
          
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-white text-xl font-bold mb-2">
              {t("app.loadingTitle")}
            </h2>
            <p className="text-white/80 text-sm">
              {t("app.loadingMessage")}
            </p>
          </motion.div>
          
          <motion.div
            className="flex justify-center space-x-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-white rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div 
        className="min-h-screen p-2 sm:p-4 lg:p-6 relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        variants={staggerChildren}
        data-testid="main-app"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
      {/* Background overlay for better content readability */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Subtle animated particles that complement the background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 text-white/30"
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {i % 2 === 0 ? <Star className="w-3 h-3" /> : <Sparkles className="w-3 h-3" />}
          </motion.div>
        ))}
      </div>

      {/* Header */}
      <motion.div 
        variants={fadeInVariants}
        className="text-center mb-6 sm:mb-8 pt-4 sm:pt-8 px-2 relative z-10"
        data-testid="header-section"
      >
        <motion.h1 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 font-devanagari drop-shadow-lg"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {t("main.title")}
        </motion.h1>
        <p className="text-white/90 font-medium font-devanagari text-sm sm:text-base md:text-lg drop-shadow-md px-4">
          {t("main.welcome")}
        </p>
        <div className="flex justify-center mt-2 sm:mt-3">
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-white/80 to-white/60 rounded-full drop-shadow-sm"></div>
        </div>
      </motion.div>

      {/* Main Features Grid */}
      <motion.div 
        variants={staggerChildren}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-sm sm:max-w-2xl md:max-w-4xl mx-auto relative z-10 px-2"
        data-testid="features-grid"
      >
        <motion.div variants={fadeInVariants} whileHover="hover">
          <motion.div variants={cardHoverVariants}>
            <Card className="h-full bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-xl border-0 overflow-hidden relative" data-testid="card-schemes">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
              <CardHeader className="pb-2 sm:pb-3 relative z-10">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl">
                  <motion.div 
                    className="p-1.5 sm:p-2 bg-white/20 rounded-full"
                    variants={iconFloatVariants}
                    animate="float"
                  >
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                  <span className="font-devanagari text-sm sm:text-base md:text-lg">{t("main.schemes")}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-purple-100 text-xs sm:text-sm mb-4 sm:mb-6 font-devanagari leading-relaxed">
                  {t("main.schemesDesc")}
                </p>
                <motion.div variants={buttonHoverVariants} whileHover="hover" whileTap="tap">
                  <Button className="w-full bg-white text-purple-600 hover:bg-purple-50 font-bold py-2 sm:py-3 text-xs sm:text-sm transition-all duration-300 relative overflow-hidden" data-testid="button-view-schemes">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-purple-200 to-purple-100 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="font-devanagari relative z-10">{t("main.viewSchemes")}</span>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeInVariants} whileHover="hover">
          <motion.div variants={cardHoverVariants}>
            <Card className="h-full bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-xl border-0 overflow-hidden relative" data-testid="card-jobs">
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8"></div>
              <CardHeader className="pb-2 sm:pb-3 relative z-10">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl">
                  <motion.div 
                    className="p-1.5 sm:p-2 bg-white/20 rounded-full"
                    variants={iconFloatVariants}
                    animate="float"
                  >
                    <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                  <span className="font-devanagari text-sm sm:text-base md:text-lg">{t("main.jobs")}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-green-100 text-xs sm:text-sm mb-4 sm:mb-6 font-devanagari leading-relaxed">
                  {t("main.jobsDesc")}
                </p>
                <motion.div variants={buttonHoverVariants} whileHover="hover" whileTap="tap">
                  <Button className="w-full bg-white text-green-600 hover:bg-green-50 font-bold py-2 sm:py-3 text-xs sm:text-sm transition-all duration-300 relative overflow-hidden" data-testid="button-view-jobs">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-green-200 to-green-100 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="font-devanagari relative z-10">{t("main.viewJobs")}</span>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeInVariants} whileHover="hover">
          <motion.div variants={cardHoverVariants}>
            <Card className="h-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-xl border-0 overflow-hidden relative" data-testid="card-admissions">
              <div className="absolute top-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mt-12"></div>
              <CardHeader className="pb-2 sm:pb-3 relative z-10">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl">
                  <motion.div 
                    className="p-1.5 sm:p-2 bg-white/20 rounded-full"
                    variants={iconFloatVariants}
                    animate="float"
                  >
                    <School className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                  <span className="font-devanagari text-sm sm:text-base md:text-lg">{t("main.admissions")}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-blue-100 text-xs sm:text-sm mb-4 sm:mb-6 font-devanagari leading-relaxed">
                  {t("main.admissionsDesc")}
                </p>
                <motion.div variants={buttonHoverVariants} whileHover="hover" whileTap="tap">
                  <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold py-2 sm:py-3 text-xs sm:text-sm transition-all duration-300 relative overflow-hidden" data-testid="button-view-admissions">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-100 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="font-devanagari relative z-10">{t("main.admissionInfo")}</span>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeInVariants} whileHover="hover">
          <motion.div variants={cardHoverVariants}>
            <Card className="h-full bg-gradient-to-br from-orange-500 to-pink-600 text-white shadow-xl border-0 overflow-hidden relative" data-testid="card-support">
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mb-10"></div>
              <CardHeader className="pb-2 sm:pb-3 relative z-10">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl">
                  <motion.div 
                    className="p-1.5 sm:p-2 bg-white/20 rounded-full"
                    variants={iconFloatVariants}
                    animate="float"
                  >
                    <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                  <span className="font-devanagari text-sm sm:text-base md:text-lg">{t("main.support")}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-orange-100 text-xs sm:text-sm mb-4 sm:mb-6 font-devanagari leading-relaxed">
                  {t("main.supportDesc")}
                </p>
                <motion.div variants={buttonHoverVariants} whileHover="hover" whileTap="tap">
                  <Button className="w-full bg-white text-orange-600 hover:bg-orange-50 font-bold py-2 sm:py-3 text-xs sm:text-sm transition-all duration-300 relative overflow-hidden" data-testid="button-get-support">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-orange-200 to-orange-100 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="font-devanagari relative z-10">{t("main.getHelp")}</span>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.div 
        variants={fadeInVariants}
        className="text-center mt-8 sm:mt-12 pb-4 sm:pb-8 relative z-10 px-2"
        data-testid="footer-section"
      >
        <div className="bg-white/90 rounded-full px-4 sm:px-6 py-2 sm:py-3 inline-block shadow-lg">
          <p className="text-gray-700 text-xs sm:text-sm font-medium font-devanagari">
            {t("main.footer")}
          </p>
        </div>
      </motion.div>
    </motion.div>
    </AnimatePresence>
  );
}
