import {useState} from 'react'

export default function Toggle(){
    const [isVasible, setIsVisible] = useState(false)

  return (
    <div>
        <button onClick={(()=>setIsVisible(!isVasible))}>
            {isVasible ? "Hide" : "View"} Text
        </button>
        <br /> 
            {isVasible && "This is a Coder Army! "}
        
    </div>
  )
}
