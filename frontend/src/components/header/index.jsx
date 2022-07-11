import React from 'react'
import { Container, RightBox, Title } from './styles'

import Navbar from '../navbar'
import ToggleNavbar from '../toggleNavbar'
import ToggleTheme from '../toggleTheme'

const Header = () => {
  return (
    <Container>
      <Title>Logo</Title>
      <RightBox>
        <Navbar />
        <ToggleTheme />
        <ToggleNavbar />
      </RightBox>
    </Container>
  )
}

export default Header
