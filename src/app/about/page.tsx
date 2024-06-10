'use client'
import Style from './page.module.scss'

import PageLanding from '@/components/PageLanding';
import { usePathname } from "next/navigation";
import { Container } from '@/components/Container';
import { MaskText } from '@/components/MaskedText';
import { MaskList } from '@/components/MaskedList';
import Quote from "@/components/quote";
import BackToTopButton from "@/components/BacktoTop"
import { Faehigkeiten } from '@/components/Faehigkeiten';
import Sprache from '@/components/Sprache';
import Contact from '@/components/Contact';
import MonoGrid from '@/components/monoGrid';

const phrases = [
    "Mein Name ist Jong-ok Jeon und Ich bin eine talentierte und erfahrene Grafikdesigner und Frontend-Entwickler. mit umfassenden Kenntnissen in Adobe Design-Programmen sowie JavaScript, HTML, SASS, ReactJS mit GatsbyJS und NextJS. ",
    "habe meine Fähigkeiten autodidaktisch erworben und durch jahrelange Arbeit  in der Industrie sowie im Außendienst ständig verbessert. Die Kombination meiner Leidenschaft für Design, Code und Interaktion positioniert mich an einer einzigartigen Stelle in der Welt des Webdesigns. helfe Marken, sich im digitalen Zeitalter hervorzuheben. Gemeinsam werden wir den neuen Status Quo festlegen. Kein Unsinn, immer auf dem neuesten Stand.",
    "Von 2014 bis 2017 leitete ich ein kleines Designstudio. Diese Erfahrung hat meine Vision und meine Einblicke in meine Arbeit erheblich erweitert, ",
    "und mein Verständnis für den gesamten Arbeitsprozess ist gewachsen. ",
]

const phrases2  = [
    "Es kann vorhersagen, wie das, was ich tue, den Endverbraucher erreichen wird. Und je mehr ich es entwarf, desto stärker war es mit dem Bauhaus verbunden. ",
    "UX ist auch mit dem Bauhaus oder dem modernistischen Design verbunden und ich war überzeugt, dass ihre Forschung noch genutzt werden kann. Deshalb habe ich mich nach Deutschland gesehnt und bin so weit gekommen. Nachdem ich im Juli 2016 geheiratet hatte, ",
    "kam ich im April 2017 endlich nach Deutschland.\n \n",
    "In Deutschland habe ich zwei Ziele.",
    "Die erste besteht darin, sich durch Deutsch vollständig in die deutsche Gesellschaft zu integrieren. Zweitens werde ich mich durch viel Erfahrung in Deutschland weiterentwickeln.",
    "Diese Unterstützung für Ihr Unternehmen ist ein Schritt weiter zu meinem Ziel.",
]

const carrierData =[
  { 
    name: "Cadman",
    position : "mediengestalter ",
    period :  "2019 - 2020 \n Düsseldorf"

  },
  { 
    name: " aland",
    position : "team manager",
    period :  "2009 - 2010 \n Seoul, Korea "

  },
  {
    name: " Uand LC",
    position : "team manager",
    period :  "2012 - 2014  \n Seoul, Korea"


  },  { 
    name: "Cadman",
    position : "mediengestalter ",
    period :  "2019 - 2020 \n Düsseldorf"

  },
  { 
    name: " aland",
    position : "team manager",
    period :  "2009 - 2010 \n Seoul, Korea "

  },
  {
    name: " Uand LC",
    position : "team manager",
    period :  "2012 - 2014  \n Seoul, Korea"


  },  { 
    name: "Cadman",
    position : "mediengestalter ",
    period :  "2019 - 2020 \n Düsseldorf"

  },
  { 
    name: " aland",
    position : "team manager",
    period :  "2009 - 2010 \n Seoul, Korea "

  },
  {
    name: " Uand LC",
    position : "team manager",
    period :  "2012 - 2014  \n Seoul, Korea"


  }
]


const abschlusseData =[
  { 
    name: "ROK Armee",
    position : 'Hauptgefreite \n aus dem Militärdienst entlassen werden',
    period :  " 09/2003 - 09/2005 \n "

  },
  { 
    name: " Universität Hoseo",
    position : "Verlassen der Universität \n Wirtschaft und der internationale Handel",
    period :  "2009 - 2010 \n "

  },
  {
    name: " Chung Am High School ",
    position : "Abschließen",
    period :  "2012 - 2014  \n Seoul, Korea"
  }
]

const faehigkeitenlist = [
  {
    name: "Adobe Creative Suite \n Illustrator / Photoshop / Indesign",
    explain: "Grafik Programm ",
  },
  {
    name: "HTML / CSS / Javascript Frameworks \n ReactJS (including GatsbyJS, NextJS)",
    explain: "web development ",
  },
  {
    name: "adobe XD / Figma ",
    explain: "as a prototyping tool",
  },
]
const sprachelist = [
  {
    name: "Koreanische",
    explain: "Muttersprache",
  },
  {
    name: "Deutsche",
    explain: "Mittelstufe B2",
  },
 
]


export default function Page() {
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

          <div className='md:flex mt-14 w-full '>
              <div className='flex mb-14 justify-start md:justify-end w-full md:w-2/5  '>
                <h1 className='text-xl'>Greetings</h1>
                <div className='w-6  mr-32 ml-3 md:ml-5' >
                  <Quote />
                </div>
              </div>
              <div className=' w-full md:w-3/5'>
                <MaskText  maskedtext ={phrases}  />
                <MaskText  maskedtext ={phrases2} />
              </div>
            </div>
    

            <div className='md:flex mt-14 w-full '>
              <div className='flex mb-14 justify-start md:justify-end w-full md:w-2/5  '>
                <h1 className='text-xl'>KARRIERE</h1>
                <div className='w-6  mr-32 ml-3 md:ml-5' >
                  <Quote />                  
                </div>
                <div className='scale-150'>
         
              <div className='scale-150'>
              <MonoGrid />
              </div>  
         </div>       
              </div>
           
              <div className=' w-full md:w-3/5'>
                <MaskList maskedlist={carrierData} />
              </div>
            </div>

            <div className='md:flex mt-14 w-full '>
              <div className='flex mb-14 justify-start md:justify-end w-full md:w-2/5  '>
                <h1 className='text-xl'>Abschlüsse</h1>
                <div className='w-6  mr-32 ml-3 md:ml-5' >
                  <Quote />
                </div>
              </div>
              <div className=' w-full md:w-3/5'>
                <MaskList maskedlist={abschlusseData} />
              </div>
            </div>

            <div className='md:flex mt-14 w-full '>
              <div className='flex mb-14 justify-start md:justify-end w-full md:w-2/5  '>
                <h1 className='text-xl'>FÄHIGKEITEN</h1> 
                <div className='w-6  mr-32 ml-3 md:ml-5' >
                  <Quote />
                </div>
              </div>
              <div className=' w-full md:w-3/5'>
                <Faehigkeiten faehigkeitenlist={faehigkeitenlist} />
              </div>
              </div>  
            
              <div className='md:flex mt-14 w-full '>
                <div className='flex mb-14 justify-start md:justify-end w-full md:w-2/5  '>
                  <h1>SPRACHE</h1> 
                  <div className='w-6  mr-32 ml-3 md:ml-5' >
                    <Quote />
                  </div>
                </div>
                <div className=' w-full md:w-3/5'>
                  <Sprache sprachelist={sprachelist} />
                </div>
              </div>


        <div className='bg-black text-white max-w-32 m-32 text-center p-1  '>
          <BackToTopButton />
        </div>
      </div>
      <Contact />
      </>
  )
}
