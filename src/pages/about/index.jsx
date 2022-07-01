import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Astronaut from '../../assets/astronaut-about.png'
import { Container, LeftBox, Text, Image, Title } from './styles'

const About = () => {
  return (
    <>
      <Header />

      <Container>

        <LeftBox>
          <Title>Quem Somos</Title>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumre et dolore magna aliqua.</Text>
        </LeftBox>

        <Image src={Astronaut} />

      </Container>

      <Footer />
    </>
  )
}

export default About
