import React from 'react'
import { useState, useEffect } from 'react'

const TimeCounter = () => {
    const [count,setCount]=useState(1)
    useEffect(()=>{
        const interval = setInterval(()=>{
            console.log("Timer is running");
            setCount((prevCount)=>prevCount+1)
        }, 1000)

        return () => {
            console.log("Timer is cleared");
            clearInterval(interval)
        }
    },[])
      return (
    <div>
        <h1>TimeCounter: {count}</h1>
        {/* <button onClick={()=>setCount(count+1)}>Increment</button> */}
    </div>
  )
}

export default TimeCounter