"use client"
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
    const { darkMode, toggleTheme } = useTheme();

    return (
        <button
            suppressHydrationWarning
            className={styles.toggle}
            onClick={toggleTheme}
            aria-label="Toggle Theme"
        >
            <div className={`${styles.iconWrapper} ${darkMode ? styles.dark : styles.light}`}>
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </div>
        </button>
    );
}
