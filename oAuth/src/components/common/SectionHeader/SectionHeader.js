"use client"
import styles from './SectionHeader.module.css';
import { motion } from 'framer-motion';

export default function SectionHeader({ subtitle, title, centered = true }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`${styles.header} ${centered ? styles.centered : ''}`}
        >
            {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
            <h2 className={styles.title}>
                {title.split(' ').map((word, i) => (
                    <span key={i}>
                        {i === title.split(' ').length - 1 ? (
                            <span className={styles.accent}>{word}</span>
                        ) : (
                            word + ' '
                        )}
                    </span>
                ))}
            </h2>
            <div className={styles.line}></div>
        </motion.div>
    );
}
