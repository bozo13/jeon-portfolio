'use client'

import PageLanding from '@/components/PageLanding';
import { usePathname } from "next/navigation";


export default function Page(){
    const Pathname = usePathname()
    const shortText =  [ "Ich bin eine talentierte und erfahrene Grafikdesigner und ",
                         "Frontend-Entwickler mit umfassenden Kenntnissen in Adobe Design-Programmen ",
                         "sowie JavaScript, HTML, SASS, ReactJS mit GatsbyJS und NextJS.",
                         "habe meine Fähigkeiten autodidaktisch erworben und ",
                         "\n",
                         "durch jahrelange Arbeit in der Industrie sowie im Außendienst ständig verbessert."
                      ]

    return (
        <>


      <PageLanding title={Pathname}  description={shortText}  link={Pathname} />

        <div>Contact</div>
        </>
    )
}
