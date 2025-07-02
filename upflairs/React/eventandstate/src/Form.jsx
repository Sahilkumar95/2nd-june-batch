import React, { useState } from 'react'

function Form() {
    // const [name,setName] = useState('')
    // const [email,setEmail] = useState('')
    const [user, setUser] = useState({
        name:'',
        email:'',
        mobile:'',
        age:'',
        occupation:''
    })
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
  return (
    <div>
        <form >
            <label htmlFor="" >name</label>
            <input type="text" onChange={handleChange}
            value={user.name}  name='name'
            /><br />
            <label htmlFor="">email</label>
            <input type="text" onChange={handleChange} 
            value={user.email}  name='email'
            /><br />    
            <label htmlFor="">mobile</label>
            <input type="number" onChange={handleChange} 
            value={user.mobile}  name='mobile'
            /><br />    
            <label htmlFor="">age</label>
            <input type="number" onChange={handleChange} 
            value={user.age}  name='age'
            
            /><br />  
            <label htmlFor="">occupation</label>
            <input type="number" onChange={handleChange} 
            value={user.occupation}  name='occupation'
            /><br />    
        </form>
    </div>
  )
}
