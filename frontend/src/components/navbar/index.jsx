import React from 'react'
import { Container, IconLink } from './styles'

import { Link } from 'react-router-dom'
import { useNavbar } from '../../contexts/NavbarContext'

const PATH = '/Infinity' // vite.config.ts

const Navbar = () => {
  const { isOpen, setIsOpen } = useNavbar()

  const closeSidebar = () => {
    setIsOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <Container isOpen={isOpen} onClick={() => closeSidebar()}>
      <IconLink>
        <Link to={PATH + '/'}>Home</Link>
      </IconLink>
      <IconLink>
        <Link to={PATH + '/contact'}>Contact</Link>
      </IconLink>
      <IconLink>
        <Link to={PATH + '/about'}>About</Link>
      </IconLink>
      <IconLink>
        <Link to={PATH + '/technologies'}>Technologies</Link>
      </IconLink>
      <IconLink>
        <Link to={PATH + '/scheduling'}>Scheduling</Link>
      </IconLink>
      <IconLink>
        <Link to={PATH + '/form'}>Form</Link>
      </IconLink>
      <IconLink>
        <Link to={PATH + '/client'}>Clients</Link>
      </IconLink>
      <IconLink>
        <Link to={PATH + '/login'}>Login</Link>
      </IconLink>
      <IconLink>
        <Link to={PATH + '/signUp'}>Sign Up</Link>
      </IconLink>
    </Container>
  )
}

export default Navbar
