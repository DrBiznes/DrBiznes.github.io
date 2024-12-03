import React from 'react';
import { motion } from 'framer-motion';
import { Water } from '../components/Water/Water';

const NotFound = () => {
  // Force the document to have no scroll since we want a fixed view
  React.useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen flex flex-col items-center justify-center text-white font-mono"
      >
        <div className="flex flex-col items-center space-y-8">
          <img
            src="/assets/404.jpg"
            alt="404 illustration"
            className="w-64 h-64 object-contain"
          />
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold">404</h1>
            <p className="text-xl">"I died" - Car</p>
          </div>
        </div>
        <Water />
      </motion.div>
    </div>
  );
};

export default NotFound;