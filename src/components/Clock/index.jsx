import React, { useEffect, useState } from 'react'
import Style from './Style.module.scss'

export default function index(timeNow) {
    const [time, setTime] = useState( new Date(timeNow))

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