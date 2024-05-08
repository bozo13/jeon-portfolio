'use client'
import './globals.css'
//import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Header from '@/components/Header';
import { CustomHead } from '@/components/CustomHead'
import { usePathname , useRouter } from 'next/navigation';
import React, { useEffect, useState, useRef } from 'react';
import Preloader from "../components/PreLoader";
import { AnimatePresence } from 'framer-motion';


import dynamic from 'next/dynamic'


const LenisScroller = dynamic(
  () => import('../components/LenisScroller').then((mod) => mod.LenisScroller),
  { ssr: false }
)


interface SeoProps {
  title: string;
  description: string;
  image: string;
  keywords: string;
}

interface RootLayoutProps {
  children: React.ReactNode;
  seo?: SeoProps;
}

/*
import  KHInterferenceTRIAL from '../../public/fonts/KHInterferenceTRIAL-Light.woff2'
import KHTekaTRIALLight from '../../public/fonts//KHInterferenceTRIAL-Light.woff2'
*/
//const inter = Inter({ subsets: ['latin'] })

const myFont = localFont({ 
                    
                          src:[ {
                            path: '../../public/fonts/KHInterferenceTRIAL-Light.woff2',
                            weight: '400',
                          
                          },
                             ]      ,                       
                        })

const myFont2 = localFont({ src: '../../public/fonts//KHTekaTRIAL-Light.woff2' });




export default function RootLayout({ children, seo = { title: '', description: '', image: '', keywords: '' } }: RootLayoutProps) {
  const pathname = usePathname();
  const isHome = pathname === '/';
 
  const [isLoading, setIsLoading] = useState<boolean>(isHome);


  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
  
          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])
   
  
  return (
    <html lang="de">
      <style jsx global>{`
        :root {
          --font-base: ${myFont.style.fontFamily};
          --font-text: ${myFont2.style.fontFamily};
        }
      `}</style>
    <CustomHead {...seo} />
      <body >  
        <LenisScroller />
          <main data-scroll-container >
              <AnimatePresence 
                mode='wait'
              >     
              {isLoading && isHome  && (
                <Preloader  finishLoading={()=>setIsLoading(false)} />)}
              </AnimatePresence>
            <Header />
            {children} 
          </main>
    
      </body>

    </html>
  );
}