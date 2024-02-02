
'use client'
import './globals.css'
//import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Header from '../components/Header';
import { usePathname , useRouter } from 'next/navigation';
import React, { useEffect, useState, useRef } from 'react';
import Preloader from "../components/Preloader";
import { AnimatePresence } from 'framer-motion';
import { LenisScroller } from "../components/LenisScroller";
import LocomotiveScroll from 'locomotive-scroll';


/*
import  KHInterferenceTRIAL from '/fonts/KHInterferenceTRIAL-Light.woff2'
import KHTekaTRIALLight from '/fonts/KHInterferenceTRIAL-Light.woff2'

const inter = Inter({ subsets: ['latin'] })

const myFont = localFont({ 
                    
                          src:[ {
                            path: './fonts/KHInterferenceTRIAL-Light.woff2',
                            weight: '400',
                          
                          },
                             ]      ,                       
                        })

const myFont2 = localFont({ src: './fonts/KHTekaTRIAL-Light.woff2' });
  */
 





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
    <html lang="en">
      {/*
      <style jsx global>{`
        :root {
          --font-base: ${KHInterferenceTRIAL.style.fontFamily};
          --font-text: ${KHTekaTRIALLight.style.fontFamily};
        }
      `}</style>
      */}
      <title>JOJ Webdesigns</title>
      <body > 
      <main data-scroll-container ref={ref} >
      <AnimatePresence 
        mode='wait'
      >     
      {isLoading && isHome  && (
        <Preloader  finishLoading={()=>setIsLoading(false)} />)}
      </AnimatePresence>
      <Header />
        {children} 
 
        <LenisScroller /> 
      </main>
      </body>
     
    </html>
   
  )
}

