import React from 'react'
import { Container, Button } from './styles'

const Footer = () => {
  const handleClick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <Container>
      <h4>Infinity</h4>
      <Button className="" onClick={() => handleClick()}><i className="fas fa-angle-up"></i></Button>
    </Container>
  )
}

export default Footer
