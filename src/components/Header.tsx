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

export default function Header(): JSX.Element {
    const header = useRef<HTMLDivElement>(null);
    const [isActive, setIsActive] = useState<boolean>(false);
    const pathname = usePathname();
    const button = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isActive) setIsActive(false);
    }, [pathname]);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: header.current,
                start: "0% 10%",
                end: "+=500px",
                onLeave: () => { gsap.to(button.current, { scale: 1, duration: 0.25, ease: "power1.out" }) },
                onEnterBack: () => { gsap.to(button.current, { scale: 0, duration: 0.25, ease: "power1.out" }) }
            }
        });
    }, []);

    return (
        <>
            <div ref={header} className={styles.header}>
                <Link href={"/"}>
                    <div className={isActive === (pathname == "/") ? styles.activeLink : ''}>
                        <div className={styles.logo}>
                            <p className={styles.copyriht}>©</p>
                            <div className={styles.name}>
                                <p className={styles.codeBy}>Code by</p>
                                <p className={styles.jongok}>Jong ok</p>
                                <p className={styles.jeon}>Jeon</p>
                            </div>
                        </div>
                    </div>
                </Link>

                <div className={styles.nav}>
                    <Magnetic>
                        <div className={styles.el}>
                            <Link href={"/works"}>
                                <div className={isActive === (pathname == "/works") ? styles.activeLink : ''}>
                                    Work
                                </div>
                            </Link>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <Link href={"/about"}>
                                <div className={isActive === (pathname == "/about") ? styles.activeLink : ''}>
                                    about
                                </div>
                            </Link>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <Link href={"/contact"}>
                                <div className={isActive === (pathname == "/contact") ? styles.activeLink : ''}>
                                    Contact
                                </div>
                            </Link>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                </div>
            </div>

            <div ref={button} className={styles.headerButtonContainer}>
                <Rounded onClick={() => { setIsActive(!isActive) }} className={`${styles.button}`}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                </Rounded>
            </div>

            <AnimatePresence mode="wait">
                {isActive ? <Nav /> : undefined}
            </AnimatePresence>
        </>
    );
}
