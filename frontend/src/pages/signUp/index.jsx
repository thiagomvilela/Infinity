import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Astronaut from '../../assets/astronaut-sign-up.png'
import { Container, Image } from './styles'
import { Form, Button } from 'react-bootstrap'

const SignUp = () => {
  return (
    <>
      <Header />

      <Container>

      <Image src={Astronaut} />
        <Form>
        <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text"/>
            <Form.Text className="text-muted" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email"/>
            <Form.Text className="text-muted" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password"/>
          </Form.Group>

          <Button variant="primary" type="submit">Cadastrar</Button>
          {'  '}
          <Button variant="primary" type="reset">Limpar</Button>

        </Form>

      </Container>

      <Footer />
    </>
  )
}

export default SignUp
