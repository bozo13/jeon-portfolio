'use client';

import styles from './Styles/Linked.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '@/lib/animation';

export default function Linked({data, isactive, setSelectedIndicator}) {
  
    const { title, href, index} = data;
  
    return (
      <motion.div 
        className={styles.link} 
        onMouseEnter={() => {setSelectedIndicator(href)}} 
        custom={index} 
        variants={slide} 
        initial="initial" 
        animate="enter" 
        exit="exit"
      >
        <motion.div 
          variants={scale} 
          animate={isactive ? "open" : "closed"} 
          className={styles.indicator}>
        </motion.div>
        <Link href={href} prefetch={ false }>{title}</Link>
      </motion.div>
    )
}