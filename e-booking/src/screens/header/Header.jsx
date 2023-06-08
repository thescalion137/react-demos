import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import user from '../../assets/logo/user.png'
import './header.scss'
const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movies</div>
      </Link>

      <div className="user-image">
        {/* <img src={user} alt="user" /> */}
        <button variant="outline-primary" onClick={() => { navigate('/sign-in') }}>Login</button>
      </div>
    </div>
  )
}

export default Header