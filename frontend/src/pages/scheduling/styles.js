import styled from 'styled-components'

export const Container = styled.main`
  background-color: ${props =>
    props.theme.title == 'light' ? '#00000010' : '#ffffff10'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding: 16px;
`

export const ScheduleInfo = styled.section`
  background-color: ${props =>
    props.theme.title == 'light' ? '#00000010' : '#ffffff10'};
  align-self: flex-start;
  border-radius: 8px;
  padding: 8px;
`

export const Title = styled.h3`
  font-style: italic;
  margin: 0;
  padding: 4px;
`
