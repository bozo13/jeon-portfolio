'use client'

import cn from 'clsx'
import PageLanding from '@/components/PageLanding';
import { usePathname } from "next/navigation";
import { useStore } from '@/lib/store';
import s from '@/components/Styles/HeroTextIn.module.scss'
import styles from './page.module.scss'
import Rounded from '@/common/RoundedButton';
import Contact from '@/components/Contact';
import PixelatedImage from '@/components/Pixelated'
import Image from 'next/image'

const HeroTextIn = ({ children, introOut }: any ) => {
  return (
    <div className={cn(s['hide-text'], introOut && s['show-text'])}>
      {children}
    </div>
  )
}

export default function Page(){
    const pathname = usePathname()
    const shortText =  [ "es ist erster Seite von Works ",
                         "",
                         "\n",
                         "."
                      ];
                      
  
                     

    const introOut = useStore((state) => state.introOut)
    const setIntroOut = useStore(({ setIntroOut }) => setIntroOut)
    
    setIntroOut(true)
    
  return (
        <>
  
        <div className={cn(styles['o-container'],"pt-52 bg-white")}>
          <div className={cn(styles['o-layout'],styles['-gutter-small'])}>
            <div className={cn(styles['o-layout_item'], styles['c-project_year'])} >
              <HeroTextIn introOut={introOut}>
                  <span >
                 2024
                  </span>
              </HeroTextIn>
              </div>
            <div className={cn(styles['o-layout_item'],styles['c-project_title'])}>
              <HeroTextIn introOut={introOut}>
                  <h1 >
                   fuck this  <br/>
                   shit!
                  </h1>
              </HeroTextIn>
              <div className='overflow-hidden'>

                    <h3 className='text-6xl tracking-tight   leading-snug'>
                      fuck yourself
                    </h3>
                </div>
            </div>
          </div>
          </div>
          <div className='relative'>
          <div className={cn(styles['o-container'],'block')}>
            <div className={cn(styles['o-layout'],styles['-reverse'],)}>
            <div className={cn(styles['o-layout_item'],styles['c-project-summary_visual-wrapper'])} >
              <div className={cn(styles['c-project-summary_visual'])} > 
                  <PixelatedImage src={`/images/pixelated/6.png`} src10={`/images/pixelated/6_small.png`}/>
                  <h3>0_small</h3>
              </div>
              </div>
              <div className={cn(styles['o-layout_item'])} > 
              <div className= {cn(styles['c-project-summary_content'])}>
                <div className={cn(styles['c-project-summary_punchline'])}>
                  <div className={cn(styles['c-text-lines_item'])}>
                  <HeroTextIn introOut={introOut}>
                      <h1>
                          The description i don&#39;t know why i made this shit in the world.
                          
                      </h1>
                  </HeroTextIn>


            <div className={cn(styles['font-base'],'list-item list-decimal py-5')}>
         
                  <li className=' py-1 text-4xl  uppercase' >
                   
                      design 
                                    </li>
                  <li className=' py-1 text-4xl  uppercase' >
                   
                     branding 
                                     </li>
                  <li className=' py-1 text-4xl  uppercase' >
                     
                        foto 
                     
                  </li>
            </div>
                  </div>
                </div>
              </div>
              </div>

              <div className={cn(styles['o-layout_item'], 'pb-28')} > 
            <div className= {cn(styles['c-project-summary_text'])}>
              <p> Going against the trend of ever-increasing online services that are cold and impersonal, Opto-Réseau takes a live-and-in-person approach leveraging an expertise that thrives on discussion and guidance. The brand identity puts the person and authenticity front and centre by borrowing certain codes from the world of fashion and magazines. The platform provides some flexibility, as it can be deployed across all clinics, which vary from one to the next. It has a living, evolving quality guided by the text, which can change and tell different stories, depending on the context.</p>
            </div>
            </div>
            </div>
    
          
         

            </div>
            </div>
            <div className='w-full h-auto flex flex-col justify-between' > 
                  <PixelatedImage src={`/images/pixelated/home.png`} src10={`/images/pixelated/home_small.png`}/>
           
              </div>

                <div className='w-full h-auto flex flex-col justify-between'>
            <PixelatedImage src={`/images/pixelated/gravel.png`} src10={`/images/pixelated/gravel_small.png`}/>
            </div>

  


          <div className= {cn(styles['Grid_Container'])} >
            <div className='  '> 
            <PixelatedImage src={`/images/pixelated/3.png`} src10={`/images/pixelated/3_small.png`}/>
              <h3>1_small</h3>
            </div>
            <div className=' '>  
              <PixelatedImage src={`/images/pixelated/2.png`} src10={`/images/pixelated/2_small.png`}/>
              <h3>2_small</h3>
            </div>
            <div className=' '> 
           
              <PixelatedImage src={`/images/pixelated/works/brownyard/1.png`} src10={`/images/pixelated/works/brownyard/1_small.png`}/>
              <h3>3_small</h3>
            </div>
            <div className=' '> 
              <PixelatedImage src={`/images/pixelated/4.png`} src10={`/images/pixelated/4_small.png`}/>
              <h3>4_small</h3>
            </div>

            <div className='  '> 
            <PixelatedImage src={`/images/pixelated/3.png`} src10={`/images/pixelated/3_small.png`}/>
              <h3>1_small</h3>
            </div>
            <div className=' '>  
              <PixelatedImage src={`/images/pixelated/2.png`} src10={`/images/pixelated/2_small.png`}/>
              <h3>2_small</h3>
            </div>
            <div className=' '> 
           
              <PixelatedImage src={`/images/pixelated/works/brownyard/1.png`} src10={`/images/pixelated/works/brownyard/1_small.png`}/>
              <h3>3_small</h3>
            </div>
            <div className=' '> 
              <PixelatedImage src={`/images/pixelated/4.png`} src10={`/images/pixelated/4_small.png`}/>
              <h3>4_small</h3>
            </div>
          </div>


      
        <Contact />
        </>
    )
}

