'use client'
import PageLanding from '@/components/PageLanding';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Contact from '@/components/Contact';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { useScroll } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import Card from '@/components/Card';
import { projects, Project } from '@/data/projects';

export default function Page(){
    const pathname = usePathname()
    const shortText =  [ "Ich bin eine talentierte und erfahrene Grafikdesigner und ",
                         "Frontend-Entwickler mit umfassenden Kenntnissen in Adobe Design-Programmen ",
                         "sowie JavaScript, HTML, SASS, ReactJS mit GatsbyJS und NextJS.",
                         "habe meine Fähigkeiten autodidaktisch erworben und ",
                         "\n",
                         "durch jahrelange Arbeit in der Industrie sowie im Außendienst ständig verbessert."
                      ]


                      const container = useRef<HTMLDivElement>(null);
                      const { scrollYProgress } = useScroll({
                        target: container,
                        offset: ['start start', 'end end'],
                      });
                    
                      useEffect(() => {
                        const lenis = new Lenis();
                        function raf(time: number) {
                          lenis.raf(time);
                          requestAnimationFrame(raf);
                        }
                        requestAnimationFrame(raf);
                        // Cleanup on unmount
                        return () => {
                          lenis.destroy();
                        };
                      }, []);
                    
                    
  return (
        <>
        <PageLanding title={pathname}  description={shortText}  link={pathname} />

        <div ref={container}>
        {projects.map((project: Project, i: number) => {
          const targetScale = 1 - (projects.length - i) * 0.01;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              url={project.link}
            />
          );
        })}
        </div>
        <div className="p-7 md:p-14 bg-white">
          <h1>Works</h1>
          <Link href="/works/first-works">first-works</Link>
          <hr />
          <Link href="/works/second-works">second-works</Link>
        </div>
      
        <Contact />

        </>
    )
}
