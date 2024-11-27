import { motion } from 'framer-motion';
import { Water } from '../components/Water/Water';

export const TransitDatabase = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen flex items-center justify-center"
    >
      <h1 
        style={{ fontFamily: 'Times New Roman' }}
        className="text-4xl text-white"
      >
        Coming soon :)
      </h1>
      <Water />
    </motion.div>
  );
};

export default TransitDatabase; 