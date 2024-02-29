'use client'
import './globals.css'
//import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Header from '../components/Header';
import { usePathname , useRouter } from 'next/navigation';
import React, { useEffect, useState, useRef } from 'react';
import Preloader from "../components/Preloader";
import { AnimatePresence } from 'framer-motion';
import SmoothScroll from "../components/SmoothScroll";
import LocomotiveScroll from 'locomotive-scroll';
import { Suspense } from 'react';

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

 





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname()
  const isHome = pathname === '/'

  const [isLoading, setIsLoading] = useState(isHome);




  const ref = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    let scroll: import("locomotive-scroll");
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default();
    });

   // cleanup phase
    return () => {
      if (scroll) scroll.destroy();
    };
  });




  return (
    <html lang="de">
 
      <style jsx global>{`
        :root {
          --font-base: ${myFont.style.fontFamily};
          --font-text: ${myFont2.style.fontFamily};
        }
      `}</style>

      <title>JOJ Webdesigns</title>
        <body > 

        <Header />
        <main data-scroll-container ref={ref} >


        <Suspense>
            <AnimatePresence 
              mode='wait'
            >         
              {isLoading && isHome  && (

                <Preloader  finishLoading={()=>setIsLoading(false)} />
                )
              }
            </AnimatePresence>
    
          {children} 
          </Suspense>  
        </main>
        <SmoothScroll /> 
      
      
      </body>
    </html>
   
  )
}

