import React from 'react'
import { Container, Text } from './styles'

const Message = ({ children }) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  )
}

export default Message
