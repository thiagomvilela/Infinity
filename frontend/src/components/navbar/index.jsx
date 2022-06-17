import React from 'react'
import { Container, IconLink } from './styles'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Container>
      <IconLink>
        <Link to='/'>Home</Link>
      </IconLink>
      <IconLink>
        <Link to='/contact'>Contact</Link>
      </IconLink>
      <IconLink>
        <Link to='/about'>About</Link>
      </IconLink>
      <IconLink>
        <Link to='/technologies'>Technologies</Link>
      </IconLink>
      <IconLink>
        <Link to='/scheduling'>Scheduling</Link>
      </IconLink>
      <IconLink>
        <Link to='/methodology'>Methodology</Link>
      </IconLink>
      <IconLink>
        <Link to='/form'>Form</Link>
      </IconLink>
      <IconLink>
        <Link to='/client'>Clients</Link>
      </IconLink>
    </Container>
  )
}

export default Navbar
