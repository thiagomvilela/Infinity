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
        <Title>Log In to your account</Title>
      </Header>

      <Main>
        <Field
          type="email"
          state={email}
          setState={setEmail}
          label="Email Address"
          icon="email"
          placeholder="Email"
          range={{ min: 2, max: 150 }}
        />

        <Field
          type="password"
          state={password}
          setState={setPassword}
          label="Password"
          icon="password"
          placeholder="Password"
          range={{ min: 2, max: 32 }}
        />

        <Button>Log In</Button>
      </Main>

      <Footer>
        <Text>Are you new?</Text>
        <Link to={PATH + '/signup'}>Sign Up</Link>
      </Footer>
    </FormContainer>
  )
}

export default LoginForm
