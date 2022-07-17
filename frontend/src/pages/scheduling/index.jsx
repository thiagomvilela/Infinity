import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Schedule from '../../components/schedule'
import { useAuth } from '../../contexts/AuthContext'
import { Container, ScheduleInfo, Title } from './styles'

const Scheduling = () => {
  const { user } = useAuth()

  return (
    <>
      <Header />
      <Container>
        <ScheduleInfo>
          <Title>Olá, {user.name}</Title>
        </ScheduleInfo>
        <Schedule />
      </Container>
      <Footer />
    </>
  )
}

export default Scheduling
