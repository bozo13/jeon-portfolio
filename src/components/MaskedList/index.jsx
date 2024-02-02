import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './style.module.scss'


export function MaskList({ maskedlist }) {

    const animation = {
      initial: {y: "100%", opacity:0 },
      enter: i => ({y: "0", opacity:"100%" , transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.2 * i}}),
      exit: i => ({y: "100%",opacity:0, transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.2 * i}})
    }

    const lineAnim ={
      initial: { width:"0%" },
      enter:i => ( { width:"100%" , transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.2 * i}}),
      exit: i => ( { width:"0%" , transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.2 * i}}),
     
    }
  
    const { ref, inView, entry } = useInView({
      threshold: 0.1,
      triggerOnce: false
    });
  
  
    return(
  
  
        <ul ref={ref} className={styles.lineMask}>
        {
          maskedlist.map( (Children, index) => {
            return (
              <>
               <motion.li className= {styles.singletablerow}  key={index}  custom={index} variants={animation} initial="initial" animate={inView ? "enter" : "exit"}>
                <div className= {styles.singletablecol}>
                  <span className={styles.eyebrow}>Company name</span>
                  <p className={styles.stacked}>{Children.name}</p>
               </div>

               <div className= {styles.singletablecol}>
                  <span className={styles.eyebrow}>Position</span>
                  <p className={styles.stacked}>{Children.position}</p>
               </div>

               <div className= {styles.singletablecol}>
                  <span className={styles.eyebrow}>Period Location</span>
                  <p className={styles.stacked}>{Children.period}</p>
               </div>
             
              </motion.li>
                <motion.div className={styles.borderBottom}   key={index}  custom={index} initial="initial" variants={lineAnim} animate={inView ? "enter" : "exit"}  />
                </>
          )
          })
        }
          </ul>

  
    )
  }