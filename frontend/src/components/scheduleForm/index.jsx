import React from 'react'
import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { createSchedule } from '../../services/api'
import Field from '../field'
import { Button, FormContainer } from './styles'

const ScheduleForm = () => {
  const { user } = useAuth()
  const [scheduleDate, setScheduleDate] = useState(new Date().toISOString())
  const [service, setService] = useState('')

  const scheduling = async (scheduleDate, service) => {
    const response = await createSchedule(user.id, scheduleDate, service)
    console.log(response)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Working...')
    // setScheduleDate(scheduleDate.replace('T', ' '))
    // scheduling(scheduleDate, service)
  }

  return (
    <FormContainer onSubmit={e => handleSubmit(e)}>
      <Field
        type="datetime-local"
        state={scheduleDate}
        setState={setScheduleDate}
        label="Date"
        icon="schedule"
        placeholder="Schedule Date"
        range={{ min: '2022-07-15T00:00' }}
      />
      <Field
        type="text"
        state={service}
        setState={setService}
        label="Service"
        icon="service"
        placeholder="Service"
        range={{ min: 2, max: 150 }}
      />
      <Button>Agendar</Button>
    </FormContainer>
  )
}

export default ScheduleForm
