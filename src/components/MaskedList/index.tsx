import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './style.module.scss';

interface ListItem {
  name: string;
  position: string;
  period: string;
}

interface MaskListProps {
  maskedlist: ListItem[];
}

export function MaskList({ maskedlist }: MaskListProps) {
  const animation = {
    initial: { y: '100%', opacity: 0 },
    enter: (i: number) => ({ y: '0', opacity: '100%', transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.2 * i } }),
    exit: (i: number) => ({ y: '100%', opacity: 0, transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.2 * i } })
  };

  const lineAnim = {
    initial: { width: '0%' },
    enter: (i: number) => ({ width: '100%', transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.2 * i } }),
    exit: (i: number) => ({ width: '0%', transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.2 * i } })
  };

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <ul ref={ref} className={styles.lineMask}>

    <motion.li className={styles.singletablerow} variants={animation} initial="initial" animate={inView ? "enter" : "exit"}>
              <div className={styles.singletablecol}>
                <span className={styles.eyebrow}>Company name</span>
    
              </div>
              <div className={styles.singletablecol}>
                <span className={styles.eyebrow}>Position</span>
              </div>
              <div className={styles.singletablecol}>
                <span className={styles.eyebrow}>Period Location</span>
              </div>
    </motion.li>
      {maskedlist.map((Children, index) => (
    
          <motion.li  key={Children.name + index} className={styles.singletablerow} custom={index} variants={animation} initial="initial" animate={inView ? "enter" : "exit"}>
            <div className={styles.singletablecol}>
 
              <p className={styles.stacked}>{Children.name}</p>
            </div>
            <div className={styles.singletablecol}>
        
              <p className={styles.stacked}>{Children.position}</p>
            </div>
            <div className={styles.singletablecol}>
  
              <p className={styles.stacked}>{Children.period}</p>
            </div>
            <motion.div className={styles.borderBottom} key={Children.name + index + index} custom={index} initial="initial" variants={lineAnim} animate={inView ? "enter" : "exit"} />
          </motion.li>
          
 
      ))}
    </ul>
  );
}
