import React from 'react';
import { motion } from "framer-motion";
import './Logo.css'

const bounceTransition = {
    y: {
        
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        type: "spring"
        
    },

};


const Logo = () => {
    return (
        <div className='logo'>
            <motion.p
                className='logo__text'
                transition={bounceTransition}
                animate={{
                    y: ["20%", "-20%"],
                    // backgroundColor: ["#ff6699", "#6666ff"]
                }}
            >
                chat
            </motion.p>
            <motion.p
                className='logo__text'
                style={{ color: '#64b5f6', fontWeight: '800', fontSize: '25px' }}
                transition={bounceTransition}
              
                animate={{
                    y: ["70%", "-70%"],
                    // backgroundColor: ["#ff6699", "#6666ff"]
                }}
                >
                <span style={{ color: '#64b5f6', fontWeight: '800', fontSize: '35px' }}>N</span>
                OW
            </motion.p>
        </div>
    )
}

export default Logo
