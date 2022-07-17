import React from 'react'
import Table from '../table'
import ScheduleForm from '../scheduleForm'
import { Container, LeftBox, RightBox, Title } from './styles'
import { ScheduleContextProvider } from '../../contexts/ScheduleContext'

const Schedule = () => {
  return (
    <Container>
      <ScheduleContextProvider>
        <LeftBox>
          <Title>Minha Agenda</Title>
          <Table />
        </LeftBox>
        <RightBox>
          <ScheduleForm />
        </RightBox>
      </ScheduleContextProvider>
    </Container>
  )
}

export default Schedule
