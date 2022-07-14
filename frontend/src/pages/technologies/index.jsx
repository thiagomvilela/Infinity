import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Java from '../../assets/java.png'
import Css from '../../assets/css.png'
import Html from '../../assets/html.png'
import Js from '../../assets/javascript.png'
import Node from '../../assets/nodejs.png'
import Python from '../../assets/python.png'
import ReactIcon from '../../assets/react.png'
import Mariadb from '../../assets/mariadb.png'
import Oracle from '../../assets/oracle.png'
import Post from '../../assets/postgreesql.png'
import { Image, Title, Text, Div, Div2} from './styles'
import { Row, Col, Container } from 'react-bootstrap'

const Technologies = () => {
  return (
    <>
      <Header />
      <Container fluid align='center'>
        <Div>
          <Row md={2}>
            <Col>
              <Title>CSS</Title>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </Col>
            <Col md='auto'><Image src={Css} /></Col>
          </Row>
        </Div>
        <Div2>
          <Row md={2}>
            <Col md='auto'><Image src={Html} /></Col>
            <Col>
              <Title>HTML</Title>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </Col>
          </Row>
        </Div2>
        <Div>
          <Row md={2}>
            <Col>
              <Title>Java</Title>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </Col>
            <Col md='auto'><Image src={Java} /></Col>
          </Row>
        </Div>
        <Div2>
          <Row md={2}>
            <Col md='auto'><Image src={Js} /></Col>
            <Col>
              <Title>JavaScript</Title>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </Col>
          </Row>
        </Div2>
        <Div>
          <Row md={2}>
            <Col>
              <Title>Node.JS</Title>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </Col>
            <Col md='auto'><Image src={Node} /></Col>
          </Row>
        </Div>
        <Div2>
          <Row md={2}>
            <Col md='auto'><Image src={Python} /></Col>
            <Col>
              <Title>Python</Title>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </Col>
          </Row>
        </Div2>
        <Div>
          <Row md={2}>
            <Col>
              <Title>React</Title>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </Col>
            <Col md='auto'><Image src={ReactIcon} /></Col>
          </Row>
        </Div>
        <Div2>
          <Row md={2}>
            <Col md='auto'><Image src={Mariadb} /></Col>
            <Col>
              <Title>MariaDB</Title>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </Col>
          </Row>
        </Div2>
        <Div>
          <Row md={2}>
            <Col>
              <Title>Oracle</Title>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </Col>
            <Col md='auto'><Image src={Oracle} /></Col>
          </Row>
        </Div>
        <Div2>
          <Row md={2}>
            <Col md='auto'><Image src={Post} /></Col>
            <Col>
              <Title>PostgreSQL</Title>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </Col>
          </Row>
        </Div2>
      </Container>
      <Footer />
    </>
  )
}

export default Technologies
