'use client'
import PageLanding from '@/components/PageLanding';
import { usePathname } from "next/navigation";


export default function Page(){
    const pathname = usePathname()
    const shortText =  [ "es ist erster Seite von Works ",
                         "",
                         "\n",
                         "."
                      ]

  return (
        <>
        <PageLanding title={pathname}  description={shortText}  link={pathname} />

        <div>Titke</div>
        </>
    )
}
