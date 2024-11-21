import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-20"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
      >
        <motion.h1 
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Transform Your Digital Presence
          <Sparkles className="inline-block ml-4 text-yellow-400" />
        </motion.h1>
        
        <motion.p 
          className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          We craft exceptional digital experiences that captivate your audience and drive results
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <button className="px-8 py-4 bg-white text-purple-900 rounded-full font-semibold hover:bg-opacity-90 transition-all flex items-center justify-center group">
            Get Started
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:bg-opacity-10 transition-all">
            View Our Work
          </button>
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}