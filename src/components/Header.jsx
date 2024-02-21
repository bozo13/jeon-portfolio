'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './Styles/Header.module.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import Nav from '@/components/Nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '@/common/RoundedButton';
import Magnetic from '@/common/Magnetic';

export default function Header() {
    const header = useRef(null);
    const [isactive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);

    useEffect( () => {
      if(isactive ) setIsActive(false)
    }, [pathname])

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
                onEnterBack: () => {gsap.to(button.current, {scale: 0, duration: 0.25, ease: "power1.out"},setIsActive(false))}
            }
        })
    }, [])

    return (
        <>
        <div ref={header} className={styles.header}>
            <Link href={"/"}
             isactive={isactive.toString( pathname == "/")} >
            <div className={styles.logo}>
                <p className={styles.copyright}>©</p>
                <div className={styles.name}>
                    <p className={styles.codeBy}>Code by</p>
                    <p className={styles.jongok}>Jong ok</p>
                    <p className={styles.jeon}>Jeon</p>
                </div>
            </div>
        
            </Link>
        
            <div className={styles.nav}>
                <Magnetic>
                    <div className={styles.el}>
                    <Link 
             
                        href={"/works"}
                        
                        isactive= { isactive.toString( pathname == "/works") } 
                        >
                        Work
                        </Link>
                 
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                    <Link 
                        href={"/about"}
                        isactive={ isactive.toString( pathname == "/about" )} 
                       
                        >
                            about</Link>
                            <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                    <Link 
                        href={"/contact"}
                        isactive={isactive.toString( pathname == "/contact") } >
                        Contact</Link>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
            </div>
        </div>

        <div ref={button} className={styles.headerButtonContainer}>
            <Rounded onClick={() => {setIsActive(!isactive)}} className={`${styles.button}`}>
                <div className={`${styles.burger} ${isactive ? styles.burgerActive : ""}`}></div>
            </Rounded>
        </div>
        
        <AnimatePresence mode="wait">
            {isactive ? <Nav />: undefined }
        </AnimatePresence>
    
        </>
    )
}