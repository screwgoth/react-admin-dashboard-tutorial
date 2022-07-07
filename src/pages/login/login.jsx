import React, { useState } from 'react';
import './login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  const [error, setError] = useState(false)

  const handleLogin = (e) => {
  }
  return (
	<div className='login'>
    <form onSubmit={handleLogin}>
      <input type='email' placeholder='Email' />
      <input type='password' placeholder='Password' />
      <Link to="/" style={{textDecoration: "none"}}>
      <button type='submit'>Login</button>
      </Link>
      {error && <span>Wrong Email or Password</span>}
    </form>
  </div>
  )
}

export default Login