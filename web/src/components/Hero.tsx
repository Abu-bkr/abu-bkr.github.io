import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80 backdrop-blur-sm" />
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-500 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0.2
              }}
              animate={{
                y: [null, Math.random() * -500],
                opacity: [0.2, 0],
                transition: {
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative container mx-auto px-4 pt-32 pb-16">
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.span
            variants={textVariants}
            className="inline-block text-blue-500 text-xl mb-4"
          >
            Welcome to the Future of Digital
          </motion.span>
          <motion.h1
            variants={textVariants}
            className="text-6xl md:text-7xl font-bold mb-6"
          >
            We Build Digital
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              {" "}Excellence
            </span>
          </motion.h1>
          <motion.p
            variants={textVariants}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Transforming ideas into powerful digital solutions. We craft cutting-edge websites and applications that drive business growth.
          </motion.p>
          <motion.div
            variants={textVariants}
            className="flex gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/20 transition-shadow"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}