import styles from './Styles/Contact.module.scss';
import Image from 'next/image';
import Rounded from '@/common/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import Magnetic from '@/common/Magnetic';

export default function Contact(): JSX.Element {
    const ContactRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ContactRef,
        offset: ["start end", "end end"]
    });
    const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const y = useTransform(scrollYProgress, [0, 1], [0, 0]);
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

    return (
        <motion.div style={{ y }} ref={ContactRef} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.gridContainer} />
                        <div className={styles.imageContainer}>
                            <Image
                                fill={true}
                                alt={"image"}
                                src={`/images/_DSF8142_black.jpg`}
                            />
                        </div>
                        <h2>Let&apos;s work <br />together</h2>
                    </span>
                    <motion.div style={{ x }} className={styles.buttonContainer}>
                        <Rounded backgroundColor={"#333"} className={styles.button}>
                            <p>Get in touch</p>
                        </Rounded>
                    </motion.div>
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
    );
}
