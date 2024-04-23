import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Styles/Sprache.module.scss';

interface SpracheProps {
  sprachelist: { name: string; explain: string }[];
}

const Sprache: React.FC<SpracheProps> = ({ sprachelist }) => {
  const animation = {
    initial: { y: "100%", opacity: 0 },
    enter: (i: number) => ({ y: "0", opacity: "100%", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.2 * i } }),
    exit: (i: number) => ({ y: "100%", opacity: 0, transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.2 * i } })
  };

  const lineAnim = {
    initial: { width: "0%" },
    enter: (i: number) => ({ width: "100%", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.2 * i } }),
    exit: (i: number) => ({ width: "0%", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.2 * i } }),
  };

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <ul ref={ref} className={styles.lineMask}>
      {sprachelist.map((Children, index) => (
        <li key={index}>
          <motion.div className={styles.singletablerow} custom={index} variants={animation} initial="initial" animate={inView ? "enter" : "exit"}>
            <div className={styles.singletablecol}>
              <p>{Children.name}</p>
              <p>{Children.explain}</p>
            </div>
          </motion.div>
          <motion.div className={styles.borderBottom} custom={index} initial="initial" variants={lineAnim} animate={inView ? "enter" : "exit"} />
        </li>
      ))}
    </ul>
  );
};

export default Sprache;
