import { useState } from 'react'
import './App.css'
import AuthForm from './Components/AuthForm'
import LoginForm from './Components/LoginForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthForm />
    </>
  )
}

export default App
