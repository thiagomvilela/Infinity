import React from 'react'
import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useSchedule } from '../../contexts/ScheduleContext'
import { createSchedule } from '../../services/api'
import Field from '../field'
import UploadField from '../uploadField'
import { Button, FormContainer } from './styles'

const ScheduleForm = () => {
  const { user } = useAuth()
  const { setIsSchedulesUpdated } = useSchedule()
  const [scheduleDate, setScheduleDate] = useState(new Date())
  const [service, setService] = useState('')

  const scheduling = async (scheduleDate, service) => {
    const response = await createSchedule(user.id, scheduleDate, service)

    if (response.status == 200) {
      setIsSchedulesUpdated(false)
      setScheduleDate(new Date())
      setService('')
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    scheduling(scheduleDate, service)
  }

  return (
    <FormContainer onSubmit={e => handleSubmit(e)}>
      <Field
        type="datetime-local"
        state={scheduleDate}
        setState={setScheduleDate}
        label="Data"
        icon="schedule"
        placeholder="Data de agendamento"
      />
      <Field
        type="text"
        state={service}
        setState={setService}
        label="Serviço"
        icon="service"
        placeholder="Serviço"
        range={{ min: 2, max: 150 }}
      />
      <UploadField />
      <Button>Agendar</Button>
    </FormContainer>
  )
}

export default ScheduleForm
