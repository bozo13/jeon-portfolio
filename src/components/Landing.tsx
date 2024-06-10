
import styles from './Styles/Landing.module.scss';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { motion } from 'framer-motion';
import Globe from './Globe';
import dynamic from 'next/dynamic';

export default function Landing(): JSX.Element {
  const firstText = useRef<HTMLParagraphElement>(null);
  const secondText = useRef<HTMLParagraphElement>(null);
  const slider = useRef<HTMLDivElement>(null);
  let xPercent = 0;
  let direction = -1;

  const animate = () => {
    if (slider.current !== null) {
      if (xPercent < -100) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -100;
      }
      gsap.set(firstText.current, { xPercent: xPercent });
      gsap.set(secondText.current, { xPercent: xPercent });
      requestAnimationFrame(animate);
      xPercent += 0.1 * direction;
    }
  };

  const Parallax = dynamic(() => import('./Parallax').then(mod => mod.Parallax), { ssr: false });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px"
    });
    requestAnimationFrame(animate);
  }, []);

  return (
    <div >
      <motion.div initial="initial" animate="enter" className={styles.landing}>
        <div className={styles.backgroundGrid} />
        <div >
          <Parallax speed={-4}>
        
            <Globe />
          </Parallax>
        </div>
        <div className={styles.sliderContainer}>
          <div ref={slider} className={styles.slider}>
            <p ref={firstText}>GRAFIKER & FRONT END ENTWICKLER -</p>
            <p ref={secondText}>GRAFIKER & FRONT END ENTWICKLER -</p>
          </div>
        </div>
   
        <div  className={styles.description}>
        <Parallax speed={3}>
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="#000"/>
          </svg>
          <p>JOJ</p>
          <p>Designer & Developer</p>
          </Parallax>
        </div>
    
      </motion.div>
    </div>
  );
}

/*
<Image 
        src="/images/background.jpg"
        fill={true}
        alt="background"
      />
      
*/