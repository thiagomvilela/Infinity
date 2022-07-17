import { useState } from 'react'
import { createContext, useContext } from 'react'

const initialValue = {
  isSchedulesUpdated: true,
  setIsSchedulesUpdated: () => {},
}

const ScheduleContext = createContext(initialValue)

export const useSchedule = () => useContext(ScheduleContext)

export const ScheduleContextProvider = ({ children }) => {
  const [isSchedulesUpdated, setIsSchedulesUpdated] = useState(
    initialValue.isSchedulesUpdated,
  )

  return (
    <ScheduleContext.Provider
      value={{ isSchedulesUpdated, setIsSchedulesUpdated }}
    >
      {children}
    </ScheduleContext.Provider>
  )
}
