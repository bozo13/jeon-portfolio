import React, { useEffect, useState } from 'react'
import Style from './Styles/Clock.module.scss'

export default function Clock( ) {
    const [time, setTime] = useState( new Date())

    useEffect(()=> {
    const timer = setInterval(() => {
      setTime(new Date( ))
    }, 1000)
    return () => clearInterval(timer)
  } ,[])

  return (
    <div className={Style.clock}> {time.toLocaleTimeString('en-US', {timeZone:"Europe/Berlin", hour: "2-digit", minute: "2-digit" } )} </div>
  )
}

//, { hour: "2-digit", minute: "2-digit" }