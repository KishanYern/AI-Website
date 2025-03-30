import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-blue-50 text-blue-900">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-center p-6 max-w-lg"
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to My AI Showcase</h1>
        <p className="text-lg">Explore cutting-edge AI projects and innovations. Use the sidebar to navigate through different sections.</p>
        <motion.div 
          className="mt-6 text-xl font-semibold text-blue-600"
          animate={{ x: [0, -5, 5, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          ← Navigate using the sidebar
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
