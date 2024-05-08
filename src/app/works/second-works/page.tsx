'use client'
import PageLanding from '@/components/PageLanding';
import { usePathname } from "next/navigation";
import Sprache from '@/components/Sprache';
import { Container } from '@/components/Container';
import Footers from '@/components/Footers';



export default function Page(){
    const pathname = usePathname()
    const shortText =  [ "es ist zweite Seite von Works ",
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
        <Container className='px-24'>
        <div>
         <h1 className='text-6xl'>Zweite Seite</h1>
        </div> 
        <div className='py-32' />

            <Sprache sprachelist={sprachelist}/>
            <Sprache sprachelist={sprachelist}/>
            <Sprache sprachelist={sprachelist}/>
            <Sprache sprachelist={sprachelist}/>
            <Sprache sprachelist={sprachelist}/>
            <Sprache sprachelist={sprachelist}/>
            <Sprache sprachelist={sprachelist}/>
            <Sprache sprachelist={sprachelist}/>
            <Sprache sprachelist={sprachelist}/>
            <Sprache sprachelist={sprachelist}/>
            <div className='py-32' />
        </Container>
        <Footers />
        </>
    )
}
