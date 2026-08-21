import React, { useEffect, useState } from 'react'

const UseStateBasic = () => {
    const [count,setCount]=useState(1)
    const [total,setTotal]=useState(2)
    // ---------Variation first-------------------
        // again and again show alert box when we click on increment or decrement button because we use useEffect without dependency array.

    // useEffect(()=>{
    //     // document.title=`Count: ${count}`
    //     alert(`Count: ${count}`)
    // },)
    // ------------Variation second---------------
    // dependency array is used to avoid again and again show alert box when we click on increment or decrement button.

    // useEffect(()=>{
    //     // document.title=`Count: ${count}`
    //     alert(`Count: ${count}`)
    // },[]) 
    // --------------Variation third-------------
    // dependency array is used to avoid again and again show alert box when we click on increment or decrement button.

    // useEffect(()=>{
      // document.title=`Count: ${count}`
      // alert(`Count: ${count}`)
    // },[count])

      // --------Variation fourth-------------------
      // return function is used to clean up the previous effect before running the next effect. It is used to avoid memory leak.
      // useEffect(()=>{
      //   document.title=`Count without dependency: ${count}`
      //   alert(`Count next return: ${count}`)
      //   return()=>{
      //     alert(`Count default returned: ${count}`)
      //   }
      // },[count])
      // ------------
      // -----Variation fifth--------------
      useEffect(()=>{
        // document.title=`Count without dependency: ${count,total}`
        alert(`Count next return: ${count} Total: ${total}`)
        return()=>{
          // document.title=`Count default returned: ${count,total}`
          alert(`Count default returned: ${count} Total: ${total}`)
        } },[count,total])

  return (
    <>
        <h1> {`count: ${count}, total: ${total}`}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setTotal(1)}>Reset</button>
    </>
  )
}

export default UseStateBasic