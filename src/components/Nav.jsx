'use client'

import React, { useState } from 'react'
import styles from './Styles/Nav.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '@/lib/animation';
import Linked from './Linked';
import Curve from './Curve';
import Footer from './Footer';


const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/works",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export default function Nav() {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (

    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className={styles.menu}
      >
       <div className={styles.body}>
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={styles.nav}>
                    <div className={styles.header}>
                        <p>Navigation</p>
                    </div>
                    {
                      navItems.map( (data, index) => {
                        return  <Linked 
                                      key={index} 
                                      data={{...data, index}} 
                                      isactive={selectedIndicator == data.href} 
                                      setSelectedIndicator={setSelectedIndicator}>
                                </Linked>
                      })
                    }
            </div>
            <Footer />
        </div>
        <Curve />
    </motion.div>

  )
}


//condition ? value : undefined