import React from 'react';

import './App.css';
import { motion, useCycle } from 'framer-motion';
import Basics from './basics';

function Test2() {

    const toggleVariants = {
        hidden: {
            backgroundColor: '#00ff00',
            borderRadius: "50%",
            transition: { duration: 0.5 }
        },
        visible: {
            backgroundColor: '#ff0000',
            borderRadius: "25%",
            transition: { duration: 0.5 }
        }
    }


    const [isActive, cycle] = useCycle("inactive", "active");
    const [containerHidden, setContainerHidden] = useCycle('visible', 'hidden');

    return (
        <>
            <motion.div variants={toggleVariants} animate={containerHidden} id='toggleBtn' onClick={() => setContainerHidden()} />
            <Basics containerVar={containerHidden} blockVar={isActive} cycleFunc={() => cycle()} />
        </>
    );
}

export default Test2;
