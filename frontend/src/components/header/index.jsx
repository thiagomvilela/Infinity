import React from 'react'
import { Container, Image, LeftBox, RightBox, Title } from './styles'

import Logo from '../../assets/logo.svg'
import Navbar from '../navbar'
import ToggleNavbar from '../toggleNavbar'
import ToggleTheme from '../toggleTheme'
import ToggleLogin from '../toggleLogin'

const Header = () => {
  return (
    <Container>
      <LeftBox>
        <Image src={Logo} alt="Infinity Logo" />
        <Title>Infinity</Title>
      </LeftBox>
      <RightBox>
        <Navbar />
        <ToggleTheme />
        <ToggleLogin />
        <ToggleNavbar />
      </RightBox>
    </Container>
  )
}

export default Header
