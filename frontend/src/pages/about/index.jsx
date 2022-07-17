import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Astronaut from '../../assets/astronaut-about.png'
import { Container, Text, Image, Title, LeftBox, RightBox } from './styles'

const About = () => {
  return (
    <>
      <Header />

      <Container>
        <LeftBox>
          <Title>Quem Somos?</Title>
          <Text>
            A Infinity é uma empresa especializada no desenvolvimento de
            sistemas inovadores. Para nós, desenvolver sistemas é a arte de
            transformar ideias em um negócio de sucesso. Com uma equipe
            altamente criativa, competente e qualificada para tornar seus sonhos
            em realidade. Fazendo parte da história de mais de 500 clientes,
            faremos a diferença na sua história!
          </Text>
        </LeftBox>
        <RightBox>
          <Image src={Astronaut} />
        </RightBox>
      </Container>

      <Footer />
    </>
  )
}

export default About
