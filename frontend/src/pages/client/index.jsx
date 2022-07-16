import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'

import Ifpe from '../../assets/logoifpe.png'
import Porto from '../../assets/logo-porto-digital.png'
import Samsung from '../../assets/logo-samsung.png'
import Accenture from '../../assets/logoaccenture.png'
import Avanade from '../../assets/logo-avanade.png'
import Nutes from '../../assets/logo-nutes.png'
import Sony from '../../assets/logo-sony.png'
import Nubank from '../../assets/logo-nubank.png'

import { ShowCase, Image, Clients, Logos, Divider, Contact } from './styles'

import { Row, Col, Container, Button, Carousel } from 'react-bootstrap'

const Client = () => {
  return (
    <>
      <Header />
      <ShowCase>
        <Container className="py-5">
          <Row>
            <Col md={6} justify="center">
              <h1>
                Aqui você conhece as empresas parceiras que já trabalham
                conosco!
              </h1>
              <Button className="btn-lg w-50">Junte-se a nós!</Button>
            </Col>
            <Col md={6}>
              <Carousel className="my-5" align="center">
                <Carousel.Item>
                  <Image className="d-block" src={Ifpe} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <Image className="d-block" src={Porto} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <Image className="d-block" src={Samsung} alt="Third slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    className="d-block"
                    src={Accenture}
                    alt="Fourth slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image className="d-block" src={Avanade} alt="Fifth slide" />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </ShowCase>
      <Clients>
        <Container className="py-5">
          <Row align="center">
            <Col>
              <h2>
                Gostaria de conhecer as vantagens de ser um dos nossos parceiros?
                <a href=""> Preencha o formulário</a> e um especialista entrará
                em contato com você.
              </h2>
            </Col>
          </Row>
          <Row align="center">
            <Col className="my-4" lg={3} sm={6}>
              <Logos src={Ifpe} alt="" />
            </Col>
            <Col className="my-4" lg={3} sm={6}>
              <Logos src={Porto} alt="" />
            </Col>
            <Col className="my-4" lg={3} sm={6}>
              <Logos src={Samsung} alt="" />
            </Col>
            <Col className="my-4" lg={3} sm={6}>
              <Logos src={Nubank} alt="" />
            </Col>
            <Col className="my-4" lg={3} sm={6}>
              <Logos src={Accenture} alt="" />
            </Col>
            <Col className="my-4" lg={3} sm={6}>
              <Logos src={Avanade} alt="" />
            </Col>
            <Col className="my-4" lg={3} sm={6}>
              <Logos src={Nutes} alt="" />
            </Col>
            <Col className="my-4" lg={3} sm={6}>
              <Logos src={Sony} alt="" />
            </Col>
          </Row>
        </Container>
      </Clients>
      <Divider />
      <Contact>
        <Container className="py-4">
          <Row align="center">
            <Col>
              <h3 className="m-0 py-lg-2">Comece a trabalhar conosco!</h3>
            </Col>
            <Col sm={2} md={6}>
              <Button className="w-50 btn-lg" variant="outline-light">
                Cadastre-se
              </Button>
            </Col>
          </Row>
        </Container>
      </Contact>
      <Footer />
    </>
  )
}

export default Client
