import React from 'react'
import './styles.css'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/about'>About</Link>
    </nav>
  )
}

export default Navbar
