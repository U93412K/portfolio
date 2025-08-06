

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Intro({ onComplete }) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      onComplete(); // Notify parent to show main portfolio
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return showIntro ? (
    
    
    <div class="h-screen w-screen flex items-center justify-center bg-yellow-300 text-gray-500">
      
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.2 }}
        transition={{ duration: 1.5 }}
        class="text-5xl font-bold tracking-wide"
      >
      <intro class="mt-1 block text-gray-500" >Welcome to My Portfolio!</intro>
      </motion.h1>
    </div>
  ) : null;
}
