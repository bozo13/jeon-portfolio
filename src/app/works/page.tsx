'use client'
import PageLanding from '@/components/PageLanding';
import { usePathname } from "next/navigation";
import Image from 'next/image';
import Contact from '@/components/Contact';
import Link from 'next/link';


export default function Page(){
    const pathname = usePathname()
    const shortText =  [ "Ich bin eine talentierte und erfahrene Grafikdesigner und ",
                         "Frontend-Entwickler mit umfassenden Kenntnissen in Adobe Design-Programmen ",
                         "sowie JavaScript, HTML, SASS, ReactJS mit GatsbyJS und NextJS.",
                         "habe meine Fähigkeiten autodidaktisch erworben und ",
                         "\n",
                         "durch jahrelange Arbeit in der Industrie sowie im Außendienst ständig verbessert."
                      ]

  return (
        <>
        <PageLanding title={pathname}  description={shortText}  link={pathname} />
        <div className='p-7 md:p-14 bg-white'>
            <h1>Works</h1>
            <Link href='/works/first-works'>first-works</Link>
            <hr/>
            <Link href='/works/second-works'>second-works</Link>
            </div>
        <Contact />

        </>
    )
}
