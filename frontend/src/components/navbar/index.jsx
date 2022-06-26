import React from 'react'
import { Container, IconLink } from './styles'

import { Link } from 'react-router-dom'

const PATH = 'Infinity' // vite.config.ts

const Navbar = () => {
  return (
    <Container>
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
        <Link to={PATH + '/methodology'}>Methodology</Link>
      </IconLink>
      <IconLink>
        <Link to={PATH + '/form'}>Form</Link>
      </IconLink>
      <IconLink>
        <Link to={PATH + '/client'}>Clients</Link>
      </IconLink>
    </Container>
  )
}

export default Navbar
