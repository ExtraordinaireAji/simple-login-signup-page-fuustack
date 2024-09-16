import React from 'react'
import { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../src/App.css'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:2660/login', {username, password} )
        .then((result) => {
            console.log(result)
            if (result.data === 'success') {
                navigate('/Home')
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }
  return (
        <div className='signup-container'>
            <div className='input-container'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Username</label>
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label htmlFor="">Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                    <p>
                        Don't have an account? Sign up <a href="/signup">here</a>
                    </p>
                </form>
            </div>
    </div>

  )
}

export default Login