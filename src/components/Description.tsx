import * as React from 'react';
import styles from './Styles/Description.module.scss';
import { useInView, motion } from 'framer-motion';

import { slideUp, opacity } from '@/lib/animation';
import Rounded from '../common/RoundedButton';
import Quote from './quote'
import Link from 'next/link'; 

export default function Description() {

    const phrase = "Die Kombination meiner Leidenschaft für Design, Code und Interaktion positioniert mich an einer einzigartigen Stelle in der Welt des Webdesigns.";
    const description =  React.useRef<HTMLDivElement| null>(null);
    const isInView = useInView(description)

    return (
        <div ref={description} className={styles.description}>


            <div className={styles.body}>
            <div className={styles.quote}>
                <Quote/>
            </div>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}>
                                    <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span>
                                </span>
                    })
                }
                </p>
            <div className={styles.quote}>
                <Quote />
            </div>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>helfe Marken, sich im digitalen Zeitalter hervorzuheben. Gemeinsam werden wir den neuen Status Quo festlegen. Kein Unsinn, immer auf dem neuesten Stand.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <Link href="/about">
                            <p>About me</p>
                        </Link>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}


/*

Ich bin eine talentierte und erfahrene Grafikdesigner und Frontend-Entwickler mit umfassenden Kenntnissen in Adobe Design-Programmen sowie JavaScript, HTML, SASS, ReactJS mit GatsbyJS und NextJS. 
habe meine Fähigkeiten autodidaktisch erworben und durch jahrelange Arbeit  in der Industrie sowie im Außendienst ständig verbessert.

Die Kombination meiner Leidenschaft für Design, Code und Interaktion positioniert mich an einer einzigartigen Stelle in der Welt des Webdesigns.
helfe Marken, sich im digitalen Zeitalter hervorzuheben. Gemeinsam werden wir den neuen Status Quo festlegen. Kein Unsinn, immer auf dem neuesten Stand.

*/

