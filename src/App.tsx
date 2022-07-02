import React from 'react';

import './App.css';
import { motion, useCycle } from 'framer-motion';

function App() {

  const variants = {
    active: {
      backgroundColor: "#f00",
      borderRadius: "50%",
      transition: { duration: 0.5 }
    },
    inactive: {
      backgroundColor: "#fff",

    }
  }

  const [isActive, cycle] = useCycle("inactive", "active");

  return (
    <div id='animContainer'>
      <motion.div
        className='animBlock'
        animate={{ rotate: 360, borderRadius: '50%', backgroundColor: '#f00' }}
        // whileHover={{ scale: 1.5, rotate: 0, borderRadius: '0%', backgroundColor: '#fff' }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror', ease: 'anticipate' }}
      />
      <motion.div variants={variants} className='animBlock' animate={isActive} onClick={() => cycle()} />
    </div>
  );
}

export default App;
