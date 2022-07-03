import React from 'react';
import './App.css';
import { motion, useCycle } from 'framer-motion';
import Test1 from './test1';
import Test2 from './test2';





function App() {

  const toggleVariants = {
    hidden: {
      backgroundColor: '#0f0',
      borderRadius: "50%",
      transition: { duration: 0.5 }
    },
    visible: {
      backgroundColor: '#f00',
      borderRadius: "25%",
      transition: { duration: 0.5 }
    }
  }

  const containerVariants = {
    hidden: {
      x: '-100%',
      transition: {
        type: 'anticipate',
      }
    },
    visible: {
      x: '0%',
      transition: {
        type: 'easeInOut',
      }
    }
  }

  const itemVariants = {
    hidden: {
      y: '-100%',
      scale: 0,
      transition: {
        type: 'anticipate',
      }
    },
    visible: {
      y: '0%',
      scale: 1,
      transition: {
        type: 'anticipate',
      }
    }
  }




  const [isActive, cycle] = useCycle("inactive", "active");
  const [navVisible, setNavVisible] = useCycle('visible', 'hidden');

  const navItems = ['Home', 'About', 'Contact'];

  return (
    <>
      <motion.div variants={toggleVariants} animate={navVisible} id='navToggle' onClick={() => setNavVisible()} />
      <motion.div variants={containerVariants} animate={navVisible} id='navContainer' >
        {navItems.map((item, index) => (
          <motion.div key={index} variants={itemVariants} animate={navVisible} id='navItem' onClick={() => setNavVisible()} whileHover={{ scale: 1.1, transition: { duration: 0.1 } }} >
            {item}
          </motion.div>
        ))}
      </motion.div>

      {/* <div id='testingContainer'>
        <Test1 />
        <Test2 />
      </div> */}
    </>
  );
}



export default App;
