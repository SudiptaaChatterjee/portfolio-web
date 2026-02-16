'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
    const [index, setIndex] = useState(0);
    const words = ["Hello", "Namaste", "Developer", "Designer", "Sudipta Chatterjee"];

    useEffect(() => {
        if (index == words.length - 1) return;
        const timeout = setTimeout(() => {
            setIndex(index + 1);
        }, 200); // Speed of word switching
        return () => clearTimeout(timeout);
    }, [index, words.length]);

    return (
        <motion.div
            initial={{ height: '100vh' }}
            animate={{ height: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1a1a1a] overflow-hidden"
        >
            {/* Animated Text */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-white text-4xl md:text-6xl font-bold flex items-center justify-center absolute z-10"
            >
                <span className="mr-2 text-orange-500">•</span>
                {words[index]}
            </motion.p>

            {/* Path/Curtain Effect */}
            <svg className="absolute w-full h-[calc(100%+300px)] pointer-events-none">
                <motion.path
                    initial={{ d: "M0 0 L100 0 L100 100 Q100 100 50 100 Q0 100 0 100 Z" }} // Flat bottom
                    exit={{ d: "M0 0 L100 0 L100 0 Q100 0 50 0 Q0 0 0 0 Z" }} // Pull up
                    transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 1.5 }}
                    fill="#1a1a1a"
                />
            </svg>
        </motion.div>
    );
};

export default Preloader;
