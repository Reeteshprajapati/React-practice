import React, { useState } from 'react'

export default function Counter2 () {
    const [count, setCount] =useState(0)
    const change=()=>{
        // console.log("gjhfjhfj",e)

        setCount(count+1)
    }   
  return (
    <>
        <h1>Counter : {count}</h1>
        <button onClick={change}>Click here!</button>
    </>
  )
}

// -------------------------
// // import React, { useState } from 'react'

// export default function Counter2 () {
//     const [count, setCount] =useState(0)
//     const change=(e)=>{
//         console.log("gjhfjhfj",e)

//         setCount(count+1)
//     }   
//   return (
//     <>
//         <h1>Counter : {count}</h1>
//         <button onClick={(e)=>change(e.target.value)}>Click here!</button>
//     </>
//   )
// }
