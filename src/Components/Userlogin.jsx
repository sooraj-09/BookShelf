import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Userlogin() {
  const email = useRef()
  const password = useRef()
  const navigate = useNavigate()

  function login(e) {
    e.preventDefault()

    const em = email.current.value
    const ps = password.current.value

    if (em === '' || ps === '') {
      alert('Please enter all credentials')
    } else if (em === 'user@gmail.com' && ps === 'user') {
      navigate('/User')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <form onSubmit={login} style={styles.form}>

      <h3 style={styles.heading}>User Login</h3>

      <input
        type="email"
        placeholder="User Email"
        ref={email}
        style={styles.input}
      />

      <input
        type="password"
        placeholder="Password"
        ref={password}
        style={styles.input}
      />

      <button type="submit" style={styles.button}>
        Login
      </button>

    </form>
  )
}

/* ---------- STYLES ---------- */

const styles = {
  form: {
    width: '100%',
    textAlign: 'left'
  },

  heading: {
    textAlign: 'center',
    color: '#1e3a8a',
    marginBottom: '20px',
    fontSize: '22px',
    fontWeight: '600'
  },

  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    fontSize: '14px',
    outline: 'none'
  },

  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.3s ease'
  }
}
