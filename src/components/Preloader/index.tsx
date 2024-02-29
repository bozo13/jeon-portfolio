import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { opacity, slideUp } from './anim';
import { Suspense } from 'react';

import styles from './style.module.scss';

const words: string[] = ["Hello", "Bonjour", "Ciao", "Olà", "안녕하세요", "Hallå", "Hallo"];

interface Dimension {
  width: number;
  height: number;
}

interface IndexProps {
  finishLoading: () => void;
}

export default function Index({ finishLoading }: IndexProps): JSX.Element {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [dimension, setDimension] = useState<Dimension>({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;
    const timeout = setTimeout(() => {
      setIsMounted(true);
      setIndex(index + 1);
    }, index === 0 ? 1700 : 150);

    return () => clearTimeout(timeout);
  }, [index]);

  const initialPath: string = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath: string = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 1 }
    }
  };

  return (
    <Suspense fallback={null}>
      <motion.div variants={slideUp} initial="initial" className={styles.introduction} exit="exit">
        {isMounted && dimension.width > 0 && (
          <>
            <motion.p variants={opacity} initial="initial" animate="enter">{words[index]}</motion.p>
            <svg>
              <motion.path variants={curve} initial="initial" exit="exit" onAnimationComplete={finishLoading}></motion.path>
            </svg>
          </>
        )}
      </motion.div>
    </Suspense>
  );
}
