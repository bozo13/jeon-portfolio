import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Style from './style.module.scss';
import { useRef } from 'react';

interface MaskTextProps {
  maskedtext: string[];
}

export function MaskText({ maskedtext }: MaskTextProps): JSX.Element {
  const animation: Variants = {
    initial: { y: "100%", opacity: "0%" },
    enter: (i: number) => ({ y: "0", opacity: "100%", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } }),
    exit: (i: number) => ({ y: "100%", opacity: "0%", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
  };

  const { ref, inView, entry } = useInView({
    threshold: 0.22,
    triggerOnce: false
  });

  return (
    <div ref={ref} className={Style.textContainer}>
      {maskedtext.map((Children, index) => (
        <div key={index} className={Style.lineMask}>
          <motion.p custom={index} variants={animation} initial="initial" animate={inView ? "enter" : "exit"}>{Children}</motion.p>
        </div>
      ))}
    </div>
  );
}
