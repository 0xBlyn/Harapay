import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/LogoScroll.module.css';

const LogoScroll: React.FC = () => {
  const logos = [
    { name: 'Bitcoin', svg: '<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="#F7931A" /><path d="M50 10 L50 40 L75 50 L50 60 L25 50 Z" fill="#FFFFFF" /></svg>' },
    { name: 'Ethereum', svg: '<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="#F7931A" /><path d="M50 10 L50 40 L75 50 L50 60 L25 50 Z" fill="#FFFFFF" /></svg>' },
    { name: 'HBar', svg: '<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="#3498DB" /><path d="M50 35 L65 50 L50 65 L35 50 Z" fill="#FFFFFF" /></svg>' },
    // Add more blockchain logos here
  ];

  return (
    <div className="w-full overflow-hidden bg-gray-900 py-10">
      <motion.div
        className="flex space-x-8"
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className={`flex-shrink-0 ${styles.glowEffect}`}>
            <div dangerouslySetInnerHTML={{ __html: logo.svg }} className="w-16 h-16" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoScroll;
