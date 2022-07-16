import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { signUpSession } from '../../services/api'
import { validateEmail, validateName } from '../../utils/validate'
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

const SignUpForm = () => {
  const navigate = useNavigate()
  const PATH = '/Infinity'
  const { user } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signUp = async (name, email, password) => {
    if (!validateEmail(email) || !validateName(name)) {
      console.log('Email - Name')
      return
    }

    const response = await signUpSession(name, email, password)
    console.log(response)

    if (response?.status == 200) {
      navigate(PATH + '/login')
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    signUp(name, email, password)
  }

  if (user.authenticated) {
    return <Message>Você já está autenticado</Message>
  }

  return (
    <FormContainer onSubmit={e => handleSubmit(e)}>
      <Header>
        <Title>Cadastre-se e Entre</Title>
      </Header>

      <Main>
        <Field
          type="text"
          state={name}
          setState={setName}
          label="Nome"
          icon="name"
          placeholder="Nome"
          range={{ min: 2, max: 150 }}
        />

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

        <Button>Cadastrar</Button>
      </Main>

      <Footer>
        <Text>Você não é novo aqui?</Text>
        <Link to={PATH + '/login'}>Entrar</Link>
      </Footer>
    </FormContainer>
  )
}

export default SignUpForm
