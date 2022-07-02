import React from 'react';

import './App.css';
import { motion, useCycle } from 'framer-motion';

function App() {

  const blockVariants = {
    active: {
      backgroundColor: "#f00",
      borderRadius: "50%",
      transition: { duration: 0.5 }
    },
    inactive: {
      backgroundColor: "#fff",

    }
  }

  const containerVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      transition: { duration: 0.5 }
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  const [isActive, cycle] = useCycle("inactive", "active");
  const [containerHidden, setContainerHidden] = useCycle('visible', 'hidden');

  return (
    <>
      <div id='toggleBtn' onClick={() => setContainerHidden()} />
      <motion.div id='animContainer' variants={containerVariants} animate={containerHidden}>
        <motion.div
          className='animBlock'
          animate={{ rotate: 360, borderRadius: '50%', backgroundColor: '#f00' }}
          // whileHover={{ scale: 1.5, rotate: 0, borderRadius: '0%', backgroundColor: '#fff' }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror', ease: 'anticipate' }}
        />
        <motion.div variants={blockVariants} className='animBlock' animate={isActive} onClick={() => cycle()} />
      </motion.div>
    </>
  );
}

export default App;
