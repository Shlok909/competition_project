import { motion } from "framer-motion";

export default function LoadingIndicator() {
  const loadingVariants = {
    initial: { width: "0%" },
    animate: { 
      width: "100%", 
      transition: { 
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  const pulseVariants = {
    initial: { opacity: 0.6 },
    animate: { 
      opacity: 1, 
      transition: { 
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <div className="flex justify-center" data-testid="loading-indicator-container">
      <div className="w-8 h-1 bg-white bg-opacity-60 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-white rounded-full"
          variants={pulseVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="h-full bg-white rounded-full"
            variants={loadingVariants}
            initial="initial"
            animate="animate"
          />
        </motion.div>
      </div>
    </div>
  );
}
