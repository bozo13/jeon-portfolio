'use client'
import Image from 'next/image';
import styles from '@/components/Styles/Card.module.scss';
import { useTransform, motion, useScroll, cubicBezier } from 'framer-motion';
import { useRef } from 'react';

export interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
  progress: any;
  range: number[];
  targetScale: number;
  key:string;
}

const Card: React.FC<CardProps> = ({ i, title, description, src, url, color, progress, range, targetScale }) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale], { ease:cubicBezier(0.17, 0.67, 0.83, 0.67)});

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div 
        style={{ scaleY: scale,  top: `calc(-5vh + ${i * 25}px)`, border: `1px solid var(--color-dark)`, background:`var(--color-light)` }} 
        className={styles.card}
      >
        <h2>{title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p>{description}</p>
            <span>
              <a href={url} target="_blank" rel="noopener noreferrer"> More Details </a>
     
            </span>
          </div>

          <div className={styles.imageContainer}>
            <motion.div
              className={styles.inner}
              style={{ scale: imageScale }}
            >
              <Image
                fill
                src={`/images/pixelated/${src}`}
                alt="image" 
              />
            </motion.div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default Card;
