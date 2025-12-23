import React, { useState } from 'react'
import Adminlogin from './Components/Adminlogin'
import Userlogin from './Components/Userlogin'

const Loginpage = () => {
  const [isUser, setIsUser] = useState(true)

  return (
    <div style={{
      ...styles.page,
      background: isUser 
        ? 'linear-gradient(135deg,rgb(255, 255, 255),rgb(0, 0, 0))' 
        : 'linear-gradient(135deg,rgb(0, 0, 0),rgb(255, 255, 255))' 
    }}>
      
      <div style={styles.card}>
        <h1 style={styles.title}>Library System</h1>

        <button 
          onClick={() => setIsUser(!isUser)} 
          style={{
            ...styles.switchBtn,
            backgroundColor: isUser ? '#2563eb' : '#1e293b' 
          }}
        >
          {isUser ? 'Switch to Admin Login' : 'Switch to User Login'}
        </button>

        <h2 style={{
          ...styles.subtitle,
          color: isUser ? '#2563eb' : '#dc2626' 
        }}>
          {isUser ? 'USER PORTAL' : 'ADMIN PORTAL'}
        </h2>

        <div style={styles.formArea}>
          {isUser ? <Userlogin /> : <Adminlogin />}
        </div>
      </div>
    </div>
  )
}

export default Loginpage

/* ---------- STYLES ---------- */

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.5s ease', // Smooth background transition
    fontFamily: 'Segoe UI, Arial, sans-serif'
  },

  card: {
    width: '90%',
    maxWidth: '420px',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '40px 30px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
    textAlign: 'center'
  },

  title: {
    color: '#1e3a8a',
    margin: '0 0 10px 0',
    fontSize: '28px',
    fontWeight: '700'
  },

  subtitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    marginBottom: '25px'
  },

  switchBtn: {
    color: '#ffffff',
    border: 'none',
    borderRadius: '25px',
    padding: '10px 24px',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    marginBottom: '20px',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase'
  },

  formArea: {
    marginTop: '10px',
    textAlign: 'left' 
  }
}