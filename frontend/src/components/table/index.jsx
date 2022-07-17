import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { formatDate } from '../../utils/formatter'
import { useAuth } from '../../contexts/AuthContext'
import { getAllScheduleByUserId } from '../../services/api'
import { BodyRow, Column, Container, HeadRow, Row, Title } from './styles'
import { useSchedule } from '../../contexts/ScheduleContext'

const Table = () => {
  const { user } = useAuth()
  const { isSchedulesUpdated, setIsSchedulesUpdated } = useSchedule()
  const [data, setData] = useState([])

  const getSchedulesData = async () => {
    const response = await getAllScheduleByUserId(user.id)
    setIsSchedulesUpdated(true)
    setData(response.data)
  }

  useEffect(() => {
    getSchedulesData()
  }, [isSchedulesUpdated])

  const renderRows = () => {
    return data.map(schedule => {
      return (
        <Row key={schedule.scheduleDate}>
          <Column>{user.name}</Column>
          <Column>{formatDate(schedule.scheduleDate)}</Column>
          <Column>{schedule.service}</Column>
        </Row>
      )
    })
  }

  return (
    <Container>
      <HeadRow>
        <Row>
          <Title>Solicitação</Title>
          <Title>Agendamento</Title>
          <Title>Serviço</Title>
        </Row>
      </HeadRow>

      <BodyRow>{renderRows()}</BodyRow>
    </Container>
  )
}

export default Table
