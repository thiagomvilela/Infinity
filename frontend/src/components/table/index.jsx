import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { getAllScheduleByUserId } from '../../services/api'
import { BodyRow, Column, Container, HeadRow, Row, Title } from './styles'

const Table = () => {
  const { user } = useAuth()
  const [data, setData] = useState([])

  const getSchedulesData = async () => {
    const response = await getAllScheduleByUserId(user.id)
    setData(response.data)
  }

  useEffect(() => {
    getSchedulesData()
  }, [])

  const renderRows = () => {
    return data.map(schedule => {
      return (
        <Row key={schedule.scheduleDate}>
          <Column>{user.name}</Column>
          <Column>{schedule.scheduleDate}</Column>
        </Row>
      )
    })
  }

  return (
    <Container>
      <HeadRow>
        <Row>
          <Title>Solicitado por</Title>
          <Title>Data do agendamento</Title>
        </Row>
      </HeadRow>

      <BodyRow>{renderRows()}</BodyRow>
    </Container>
  )
}

export default Table
