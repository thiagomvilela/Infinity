import React from 'react'
import './styles.css'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/about'>About</Link>
      <Link to='/technologies'>Technologies</Link>
      <Link to='/scheduling'>Scheduling</Link>
      <Link to='/methodology'>Methodology</Link>
      <Link to='/form'>Form</Link>
      <Link to='/customers'>Customers</Link>
    </nav>
  )
}

export default Navbar
