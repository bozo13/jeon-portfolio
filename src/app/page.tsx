"use client"
import Image from "next/image";
import Landing from "@/components/Landing"
import { Container } from "@/components/Container";
import Globe from "@/components/Globe"
import Description from "@/components/Description"
import Projects from "@/components/Projects"
import SlidingImages from "@/components/SlidingImages";
import Contact from "@/components/Contact"
import RootLayout from "./layout";


export default function Home() {

  console.log( RootLayout )

  return (
    <>

    <Landing/>
      <Container>

        <Description />
        <Projects />
        <SlidingImages />
        <div className='spacer-s'/>

        
    <Contact />
    </Container>
  </>
  );
}
