import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Water } from '../components/Water/Water';

export const Home = () => {
  useEffect(() => {
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
        className="relative h-screen z-20 flex flex-col justify-end"
      >
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30">
          <h1 className="text-4xl font-bold text-white mb-4 text-center">
            Welcome to my website!$!!$!
          </h1>
          <p className="text-gray-300 text-center">
            ENGAGE with EVERYTHING by me Jamino EXPLORE my stuff
          </p>
        </div>
        <Water />
      </motion.div>
    </div>
  );
};