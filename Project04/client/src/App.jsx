import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

function App() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
      axios.post('http://localhost:4400/logins', {email, password} )
      .then(result => console.log(result) )
      .catch(err => console.log(err) )
  }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg-primary'>
      <form onSubmit={handleSubmit}>
      <div className='bg-white p-3 rounded w-20' >
      <h2>Sign-In</h2>
        <div className='mb-3'>
          <label htmlFor='email'><strong>Email</strong></label>
          <input type='email' placeholder='Enter Email' autoComplete='off' name='email' className='form-control rounded-0' onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div className='mb-3'>
          <label htmlFor='password'><strong>Password</strong></label>
          <input type='password' placeholder='Enter Password' autoComplete='off' name='password' className='form-control rounded-0' onChange={(e)=> setPassword(e.target.value)} />
        </div>
        <button className='btn btn-success w-100 rounded-0'>Log in</button>
        <p>You are agree to our terms and policies</p>
        <button className='btn btn-default bg-light border w-100 rounded-0'>Create Account</button>
      </div>
      </form>
    </div>
  )
}
export default App
