import styles from './Styles/Contact.module.scss';
import Image from 'next/image';
import Rounded from '@/common/RoundedButton';
import  {useRef}  from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import Magnetic from '@/common/Magnetic';

export default function Contact() {

    const ContainerRef = useRef(false);
    const { scrollYProgress } = useScroll({
        target: ContainerRef,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    return (
        <motion.div style={{y}} ref={ContainerRef} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
              
                    <span>
                    <div className={styles.gridContainer}/>
                        <div className={styles.imageContainer}>
                            <Image 
                            fill={true}
                            alt={"image"}
                            src={`/images/_DSF8142_black.jpg`}
                            />
                        </div>
                        <h2>Let &apos; s work <br/>together</h2>
                    </span>
                   
                    <motion.div style={{x}} className={styles.buttonContainer}>
                        <Rounded  backgroundColor={"#333"} className={styles.button}>
                            <p>Get in touch</p>
                        </Rounded>
                   </motion.div>
                    {/*
                    <motion.svg style={{rotate, scale: 2}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
                    </motion.svg>
    */  }
                </div>
                <div className={styles.nav}>
                        <Rounded>
                            <p>jeon.deutschland@gmail.com</p>
                        </Rounded>
                        <Rounded>
                            <p>+49 152 2341 0949</p>
                        </Rounded>
                </div>
                <div className={styles.info}>
                    <div>
                        <span>
                            <h3>Version</h3>
                            <p>2022 © Edition</p>
                        </span>
                        <span>
                            <h3>Version</h3>
                            <p>Berlin</p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <h3>socials</h3>
                            <Magnetic>
                                <p>Awwwards</p>
                            </Magnetic>
                        </span>
                        <Magnetic>
                            <p>Instagram</p>
                        </Magnetic>
                        <Magnetic>
                            <p>Dribbble</p>
                        </Magnetic>
                        <Magnetic>
                            <p>Linkedin</p>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
