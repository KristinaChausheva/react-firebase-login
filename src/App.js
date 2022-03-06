import "./App.css"
import { signup, logout, useAuth, login } from "./config"
import { useRef, useState } from "react"

function App() {
  const [loading, setLoading] = useState(false)
  const emailRef = useRef()
  const passwordRef = useRef()

  const currentUser = useAuth()

  async function handleSignup() {
    setLoading(true)
    try {
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch (error) {
      alert(error)
    }
    setLoading(true)
  }

  async function handleLogin() {
    setLoading(true)
    try {
      await login(emailRef.current.value, passwordRef.current.value)
    } catch (error) {
      alert(error)
    }
    setLoading(true)
  }

  async function handleLogout() {
    setLoading(true)
    try {
      await logout()
    } catch (error) {
      alert(error)
    }
    setLoading(false)
  }

  return (
    <div className="App">
      <div>Oyu are currently login as {currentUser?.email}</div>
      <input ref={emailRef} placeholder="Email"></input>
      <input ref={passwordRef} placeholder="password" type="password"></input>

      <button disabled={loading || currentUser} onClick={handleSignup}>
        Sign UP
      </button>
      <button disabled={loading || !currentUser} onClick={handleLogout}>
        Logout
      </button>
      <button disabled={loading || currentUser} onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}

export default App
