import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Astronaut from '../../assets/astronaut-login.png'
import { Container, Image } from './style'
import { Form, Button } from 'react-bootstrap'

const Login = () => {
  return (
    <>
      <Header />
      <Container>
      <Image src={Astronaut} />
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email"/>
            <Form.Text className="text-muted" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password"/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Lembre-se de mim" />
          </Form.Group>

          <Button variant="primary" type="submit">Entrar</Button>{'  '}
          <Button variant="primary" type="reset">Limpar</Button>

        </Form>

      </Container>
      <Footer />
    </>
  )
}

export default Login
