import { useState } from 'react'

const MultiForm = () => {
    const [formName, setFormName] = useState({
        name: "",
        email: "",
        password: ""
    })
    function handleChange(e){
        const {name,value} = e.target
        setFormName((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
  return (
    <>
        <form onSubmit={(e) => {
            e.preventDefault()
            alert("Form Submitted!")
            console.log("Form Data : ", formName)
        }}>
            <h2 style={{    color: "blue",fontFamily: "monospace" }}>Multi-Field Form</h2>
            <label htmlFor='name'>Name : </label>
            <input 
            type="text" 
            placeholder='Enter Name'
            name='name'
            value={formName.name}
            onChange={handleChange}
             />
            <br/>
            <label htmlFor='email'>Email : </label>
            <input type="email" 
            placeholder='Enter Email' 
            name='email'
            value={formName.email}
            onChange={handleChange}
             />
            <br/>
            <label htmlFor='password'>Password : </label>
            <input type="password" 
            placeholder='Enter Password' 
            name='password'
            value={formName.password}
            onChange={handleChange}
             />
            <br/>
            <button type='submit'>Submit</button>

        </form>
    </>
  )
}

export default MultiForm