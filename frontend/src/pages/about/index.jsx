import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Astronaut from '../../assets/astronaut-about.png'
import { Container, Text, Image, Title } from './styles'
import { Row, Col } from 'react-bootstrap'
const About = () => {
  return (
    <>
      <Header />

      <Container align='center'>

        <Row md={2}>
          <Col>
          <Title>Quem Somos</Title>
          <Text>A Infinity é uma empresa especializada no desenvolvimento de sistemas inovadores. Para nós, desenvolver sistemas é a arte de transformar ideias em um negócio de sucesso. Com uma equipe altamente criativa, competente e qualificada para tornar seus sonhos em realidade. Fazendo parte da história de mais de 500 clientes, faremos a diferença na sua história!</Text>
          </Col>
        <Col>
        <Image src={Astronaut} />
        </Col>
        </Row>
      </Container>

      <Footer />
    </>
  )
}

export default About
