'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
    const [phase, setPhase] = useState<'greeting' | 'terminal'>('greeting');
    const [greetingIdx, setGreetingIdx] = useState(0);
    const [logs, setLogs] = useState<string[]>([]);
    const [isComplete, setIsComplete] = useState(false);

    const greetings = ["Hello", "Namaste", "Developer", "Designer", "Sudipta Chatterjee"];

    const sequence = [
        "> INITIALIZING SYSTEM...",
        "> LOADING MERN_STACK_MODULES...",
        "> ESTABLISHING NEURAL_LINK...",
        "> ACCESSING PORTFOLIO.DB...",
        "> SUCCESS: IDENTITY VERIFIED",
        "> WELCOME, SUDIPTA"
    ];

    useEffect(() => {
        if (phase === 'greeting') {
            const interval = setInterval(() => {
                if (greetingIdx < greetings.length - 1) {
                    setGreetingIdx(prev => prev + 1);
                } else {
                    clearInterval(interval);
                    setTimeout(() => setPhase('terminal'), 500);
                }
            }, 150);
            return () => clearInterval(interval);
        } else {
            let logIdx = 0;
            const interval = setInterval(() => {
                if (logIdx < sequence.length) {
                    setLogs(prev => [...prev, sequence[logIdx]]);
                    logIdx++;
                } else {
                    clearInterval(interval);
                    setTimeout(() => setIsComplete(true), 500);
                }
            }, 100);
            return () => clearInterval(interval);
        }
    }, [phase, greetingIdx]);

    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    key="preloader-overlay"
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a] overflow-hidden p-6"
                >
                    <div className="w-full max-w-2xl font-mono">
                        {phase === 'greeting' ? (
                            <motion.div
                                key="greeting"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-white text-3xl md:text-5xl font-bold text-center"
                            >
                                <span className="text-orange-500 mr-4 font-mono">{">"}</span>
                                {greetings[greetingIdx]}
                            </motion.div>
                        ) : (
                            <div className="flex flex-col gap-1 text-sm md:text-base leading-relaxed">
                                {logs.map((log, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className={i === sequence.length - 1 ? "text-orange-500 font-bold" : "text-orange-500/70"}
                                    >
                                        {log}
                                    </motion.div>
                                ))}
                                <div className="text-orange-500 typewriter-cursor"></div>
                            </div>
                        )}
                    </div>

                    {/* Matrix-like subtle background */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden text-[10px] text-orange-500 break-all leading-none font-mono">
                        {Array(100).fill(0).map((_, i) => (
                            <div key={i}>011010100111010010110101010011101101010100111011010110100101</div>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
