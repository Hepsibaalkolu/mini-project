import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreateUser() {
    const [name , setName] = useState()
    const [email , setEmail] = useState()
    const [age , setAge] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8800/createUser', {name, email, age})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }
    

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-item-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={Submit} >
                <h2>Add User</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input onChange = {(e) => setName(e.target.value)} type='text' placeholder='Enter Name' className='form-control'/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Email</label>
                    <input onChange = {(e) => setEmail(e.target.value)} type='email' placeholder='Enter Email' className='form-control'/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Age</label>
                    <input onChange = {(e) => setAge(e.target.value)} type='text' placeholder='Enter Age' className='form-control'/>
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreateUser