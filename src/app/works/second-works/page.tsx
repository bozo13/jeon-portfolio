'use client'
import PageLanding from '@/components/PageLanding';
import { usePathname } from "next/navigation";
import Sprache from '@/components/Sprache';
import { Container } from '@/components/Container';
import Contact from '@/components/Contact';
import { Parallax } from '@/components/Parallax';



export default function Page(){
    const pathname = usePathname()
    const shortText =  [ "Es ist zweite Seite von Works ",
                         "",
                         "\n",
                         "."
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

  return (
        <>
        <PageLanding title={pathname}  description={shortText}  link={pathname} />
        <Container className='px-12 py-12 md:px-24 md:py-24'>
        <Parallax speed={-1}>
         <h1 className='text-2xl md:text-6xl'>Zweite Seite</h1>
        </Parallax> 
        <div className='py-12 md:py-24' />

            <Sprache sprachelist={sprachelist}/>
            <Sprache sprachelist={sprachelist}/>
            <Sprache sprachelist={sprachelist}/>

            <div className='py-12 md:py-24' />
        </Container>
        <Contact />
        </>
    )
}
