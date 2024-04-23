'use client'
import Styles from './style.module.scss';
import Globe from '@/components/Globe';
import ShuffleText from '../ShuffleText';
import { motion } from "framer-motion";


interface PageLandingProps {
  title: string;
  description: string [];
  link: string;
}


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      ease: 'easeOut',
    }
  }
}

const item = {
  hidden: { opacity: 0, y:-20 },
  show: { opacity: 1, y:0, 
  }
}


export default function PageLanding({ title, description, link }: PageLandingProps) {
  return (
    <div  data-scroll data-scroll-container>
    <motion.div className={Styles.Landing}   variants={container}
    initial="hidden"
    animate="show">
      <div  className={Styles.background} />
      <div  data-scroll data-scroll-speed={0.4} className={Styles.title}>
      <motion.div variants={item}  >
        <ShuffleText shuffletextEL={title} link={link} randomText={[]}  />
      </motion.div>
    </div>
    <div  data-scroll data-scroll-speed={-0.2} className="absolute left-0 ">
      <motion.div variants={item} >
        <Globe />
      </motion.div>
      </div>
      <div data-scroll data-scroll-speed={0.1} className={Styles.description}>
        <motion.svg variants={item} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="#FFF" />
        </motion.svg>
        <motion.p variants={item} className={Styles.description}>{description}</motion.p>
      </div>

    </motion.div>
    </div>
  );
}
