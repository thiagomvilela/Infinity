import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Astronaut from '../../assets/astronaut-login.png'
import { BackgroundContainer, Container, Image } from './styles'
import LoginForm from '../../components/loginForm'

const Login = () => {
  return (
    <BackgroundContainer>
      <Header />

      <Container>
        <Image src={Astronaut} />
        <LoginForm />
      </Container>

      <Footer />
    </BackgroundContainer>
  )
}

export default Login
