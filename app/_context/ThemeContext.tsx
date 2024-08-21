'use client'

import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'

interface ThemeContextProps {
    theme: string,
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState('dark');

    console.log(theme)

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
        localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
    }

    useEffect(() => {
        setTheme(localStorage.getItem('theme') || 'dark');
    }, [])

    useEffect(() => {
        document.documentElement.className = theme
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('Cant Access To ThemeProvider');
    return context
}

export default ThemeProvider

