'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen/LoadingScreen';

export default function LoadingWrapper({ children }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a brief loading period for the initial app opening
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 seconds splash screen

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }

    return <>{children}</>;
}
