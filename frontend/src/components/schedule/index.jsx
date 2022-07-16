import React from 'react'
import Table from '../table'
import ScheduleForm from '../scheduleForm'
import { Container, LeftBox, RightBox, Title } from './styles'

const Schedule = () => {
  return (
    <Container>
      <LeftBox>
        <Title>Minha Agenda</Title>
        <Table />
      </LeftBox>
      <RightBox>
        <ScheduleForm />
      </RightBox>
    </Container>
  )
}

export default Schedule
