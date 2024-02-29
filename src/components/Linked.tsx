'use client';
import { motion } from 'framer-motion';
import styles from './Styles/Linked.module.scss';
import Link from 'next/link';
import { slide, scale } from '@/lib/animation';

interface LinkedProps {
  data: {
    title: string;
    href: string;
    index: number;
  };
  isactive: boolean;
  setSelectedIndicator: (href: string) => void;
}

export default function Linked({ data, isactive, setSelectedIndicator }: LinkedProps) {
  const { title, href, index } = data;

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => { setSelectedIndicator(href) }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isactive ? "open" : "closed"}
        className={styles.indicator}
      ></motion.div>
      <Link href={href} prefetch={false}>{title}</Link>
    </motion.div>
  );
}
