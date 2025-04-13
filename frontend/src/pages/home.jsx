import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 text-blue-900">
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.2 }} 
        className="text-center p-10 max-w-xl bg-white bg-opacity-80 rounded-lg shadow-xl"
      >
        <motion.h1 
          className="text-5xl font-extrabold mb-6"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to My AI Showcase
        </motion.h1>
        <motion.p 
          className="text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Explore the latest machine learning models and discover their predictions.
          Use the sidebar to navigate through different sections and uncover insights.
        </motion.p>
        <motion.div 
          className="text-xl font-semibold text-blue-600"
          animate={{ x: [0, -10, 10, -10, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          ← Navigate using the sidebar
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
