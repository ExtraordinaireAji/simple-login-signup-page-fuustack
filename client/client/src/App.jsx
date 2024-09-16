import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import SignUp from './SignUp'
import Login from './Login'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App