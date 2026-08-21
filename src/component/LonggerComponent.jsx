import {useState,useEffect} from 'react'

const LonggerComponent = () => {
    const [count,setCount]=useState(1)
    useEffect(()=>{
        console.log(`Count: ${count}`)
    },[count])
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default LonggerComponent