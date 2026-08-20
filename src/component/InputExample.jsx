import { useState } from "react"

export  default function InputExample(){
    const [name,setName] = useState("")
  return (
    <>
        <input type="text" value={name} onChange={((e)=>setName(e.target.value ))} />
        <h5>Hello, {name|| "Guest"}</h5>

    </>
  )
}
