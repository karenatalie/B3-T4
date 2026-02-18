import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }} // Mulai dari transparan & agak ke kanan
      animate={{ opacity: 1, x: 0 }}  // Masuk ke posisi normal
      exit={{ opacity: 0, x: -20 }}   // Keluar ke kiri
      transition={{ duration: 0.8, ease: "easeInOut" }} // Lambatin biar kelihatan
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;