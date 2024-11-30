import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Level } from '../components/game/Level';

type LevelContextType = {
    level: Level;
    setLevel: (newLevel: Level) => void;
};

const LevelContext = createContext<LevelContextType | undefined>(undefined);

export const useLevel = (): LevelContextType => {
    const context = useContext(LevelContext);
    if (!context) {
        throw new Error('useLevel must be used within a LevelProvider');
    }
    return context;
};

type LevelProviderProps = {
    children: ReactNode;
    initialLevel: Level;
};

export const LevelProvider: React.FC<LevelProviderProps> = ({ children, initialLevel }) => {
    const [level, setLevel] = useState<Level>(initialLevel);



    return (
        <LevelContext.Provider value={{ level, setLevel }}>
            {children}
        </LevelContext.Provider>
    );
};
