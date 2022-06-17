import React from 'react'
import { Container } from './styles'

import Navbar from '../navbar'
import ToogleTheme from '../toogleTheme'

const Header = () => {
  return (
    <Container>
      <h2>Logo</h2>
      <Navbar />
      <ToogleTheme />
    </Container>
  )
}

export default Header
