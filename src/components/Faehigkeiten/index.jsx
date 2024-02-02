import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './style.module.scss'


export function Faehigkeiten({ faehigkeitenlist }) {

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
         faehigkeitenlist.map( (Children, index) => {
            return (
              <li>
               <motion.div className= {styles.singletablerow}  key={index}  custom={index} variants={animation} initial="initial" animate={inView ? "enter" : "exit"}>
                <div className= {styles.singletablecol}>
                  <div>
                  <h1>{"0"+(index + 1)+ "."}</h1>
                  <p>{Children.name}</p>
                  </div>
                  <p>{Children.explain}</p>
                </div>
                
              </motion.div>
              <motion.div className={styles.borderBottom}   key={index}  custom={index} initial="initial" variants={lineAnim} animate={inView ? "enter" : "exit"}  />
                </li>
          )
          })
        }
          </ul>

  
    )
  }