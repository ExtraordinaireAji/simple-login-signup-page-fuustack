import React from 'react'
import { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../src/App.css'

const SignUp = () => {
 const [username, setUsername] = useState('')
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:2660/signup', {username: username, email: email, password: password})
        .then((result) => {
          console.log(result)  
          navigate('/login')
        })
        .catch((error) => {
          console.log(error.response?.data)
        })
    }
  return (

    <div className='signup-container'>
    <div className='input-container'>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Username</label>
            <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="">Email</label>
            <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="">Password</label>
            <input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Register</button>
            <p>
                Already have an account? Login <Link to="/login">here</Link>
            </p>
        </form>
    </div>
</div>
    
  )
}

export default SignUp