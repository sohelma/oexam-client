'use client';

import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
    const [scrambledText, setScrambledText] = useState("EXAMINERLY");
    const [statusIndex, setStatusIndex] = useState(0);
    const [fadeStatus, setFadeStatus] = useState(false);

    const finalText = "EXAMINERLY";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%";
    const steps = [
        "Initializing System Modules...",
        "Authenticating Candidate...",
        "Loading Question Database...",
        "Applying Security Checks...",
        "Preparing Interface..."
    ];

    useEffect(() => {
        // Scramble Animation Logic
        const scramble = () => {
            let iteration = 0;
            const interval = setInterval(() => {
                setScrambledText(
                    finalText
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return finalText[index];
                            }
                            return letters[Math.floor(Math.random() * letters.length)];
                        })
                        .join("")
                );

                if (iteration >= finalText.length) {
                    clearInterval(interval);
                }

                iteration += 0.5;
            }, 40);
        };

        // Initial trigger
        scramble();

        // Repeat every  seconds
        const scrambleInterval = setInterval(scramble, 3000);

        // Status Text Loop
        const statusInterval = setInterval(() => {
            setFadeStatus(true);
            setTimeout(() => {
                setStatusIndex((prev) => (prev + 1) % steps.length);
                setFadeStatus(false);
            }, 300);
        }, 800);

        return () => {
            clearInterval(scrambleInterval);
            clearInterval(statusInterval);
        };
    }, []);

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-[#05070d] text-[#00f5ff] overflow-hidden font-mono select-none">
            {/* CRT Scanlines Effect */}
            <div
                className="absolute inset-0 pointer-events-none z-10 opacity-30"
                style={{
                    background: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 3px)'
                }}
            ></div>

            <div className="text-center relative z-20 px-4">
                {/* Scramble Heading */}
                <h1 className="text-5xl md:text-7xl font-black tracking-[0.1em] mb-8 drop-shadow-[0_0_15px_rgba(0,245,255,0.8)] min-h-[1em]">
                    {scrambledText}
                </h1>

                {/* Status Message */}
                <div className={`text-sm md:text-lg tracking-[0.05em] mb-10 transition-all duration-300 h-6 ${fadeStatus ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`}>
                    {steps[statusIndex]}
                </div>

                {/* RGB Animated Balls */}
                <div className="flex justify-center gap-4">
                    <div className="w-4 h-4 rounded-full animate-terminal-bounce animate-color-cycle animate-subtle-pulse"></div>
                    <div
                        className="w-4 h-4 rounded-full animate-terminal-bounce animate-color-cycle animate-subtle-pulse"
                        style={{ animationDelay: '0.2s, 0.3s, 0.2s' }}
                    ></div>
                    <div
                        className="w-4 h-4 rounded-full animate-terminal-bounce animate-color-cycle animate-subtle-pulse"
                        style={{ animationDelay: '0.4s, 0.6s, 0.4s' }}
                    ></div>
                </div>
            </div>

            {/* Vignette Effect for CRT vibe */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] z-30"></div>
        </div>
    );
};

export default LoadingScreen;
