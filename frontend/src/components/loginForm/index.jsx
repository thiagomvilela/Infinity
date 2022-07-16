import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { validateEmail } from '../../utils/validate'
import Field from '../field'
import Message from '../message'
import {
  Button,
  Footer,
  FormContainer,
  Header,
  Main,
  Text,
  Title,
} from './styles'

const LoginForm = () => {
  const PATH = '/Infinity'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, login } = useAuth()

  const handleSubmit = e => {
    e.preventDefault()

    if (!validateEmail(email)) {
      console.log('Email')
      return
    }

    login(email, password)
  }

  if (user.authenticated) {
    return <Message>Você já está autenticado</Message>
  }

  return (
    <FormContainer onSubmit={e => handleSubmit(e)}>
      <Header>
        <Title>Entre em sua conta</Title>
      </Header>

      <Main>
        <Field
          type="email"
          state={email}
          setState={setEmail}
          label="Endereço de Email"
          icon="email"
          placeholder="Email"
          range={{ min: 2, max: 150 }}
        />

        <Field
          type="password"
          state={password}
          setState={setPassword}
          label="Senha"
          icon="password"
          placeholder="Senha"
          range={{ min: 2, max: 32 }}
        />

        <Button>Entrar</Button>
      </Main>

      <Footer>
        <Text>Você é novo aqui?</Text>
        <Link to={PATH + '/signup'}>Cadastre-se</Link>
      </Footer>
    </FormContainer>
  )
}

export default LoginForm
