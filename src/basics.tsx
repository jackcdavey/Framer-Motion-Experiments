import React from 'react';
import './App.css';
import { AnimationControls, motion, TargetAndTransition, useCycle, VariantLabels } from 'framer-motion';

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





export default function Basics(props: { containerVar: boolean | AnimationControls | TargetAndTransition | VariantLabels | undefined; blockVar: boolean | AnimationControls | TargetAndTransition | VariantLabels | undefined; }) {
    return (
        <motion.div id='animContainer' variants={containerVariants} animate={props.containerVar}>
            <motion.div
                className='animBlock'
                animate={{ rotate: 360, borderRadius: '50%', backgroundColor: '#f00' }}
                // whileHover={{ scale: 1.5, rotate: 0, borderRadius: '0%', backgroundColor: '#fff' }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror', ease: 'anticipate' }}
            />
            <motion.div variants={blockVariants} className='animBlock' animate={props.blockVar} />
        </motion.div>
    );
}