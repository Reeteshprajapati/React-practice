import { useState } from 'react'

const SimpleForm = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")

    function handleSubmit(e){
        e.preventDefault()//not reload page
        console.log("Name : ",name)
        console.log("Email : ",email)
        // setName("")
        // setEmail("")
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name : </label>
            <input type="text"
             placeholder='Enter Name' 
             value={name}
             onChange={(e) => setName(e.target.value)}
            />
            <br/>
            <label htmlFor='email'>Email : </label>
            <input type="email" 
            placeholder='Enter Email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <br/>
            <button type='submit'>Submit</button>
        </form>
    </>
  )
}

export default SimpleForm