import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Astronaut from '../../assets/astronaut-sign-up.png'
import { BackgroundContainer, Container, Image } from './styles'
import SignUpForm from '../../components/signUpForm'

const SignUp = () => {
  return (
    <BackgroundContainer>
      <Header />

      <Container>
        <Image src={Astronaut} />
        <SignUpForm />
      </Container>

      <Footer />
    </BackgroundContainer>
  )
}

export default SignUp
