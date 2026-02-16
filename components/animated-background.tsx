'use client';

import { motion } from 'framer-motion';

const AnimatedBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Moving Orbit 1 - Orange */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px]"
            />

            {/* Moving Orbit 2 - Purple/Blue shift for depth */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.15, 0.1],
                    x: [0, -50, 0],
                    y: [0, 50, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-[40%] -right-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px]"
            />

            {/* Moving Orbit 3 - Bottom */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.05, 0.1, 0.05],
                    x: [0, 30, 0],
                    y: [0, 20, 0],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-[20%] left-[20%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]"
            />
        </div>
    );
};

export default AnimatedBackground;
