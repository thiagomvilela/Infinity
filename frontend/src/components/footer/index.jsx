import React from 'react'
import { Container, Button, Text, Link, RightBox } from './styles'

const Footer = () => {
  const handleClick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <Container>
      <Text>Infinity</Text>
      <RightBox>
        <Link href="https://github.com/thiagomvilela/Infinity" target="_blank">
          <i className="fab fa-github"></i>
        </Link>
        <Button className="" onClick={() => handleClick()}>
          <i className="fas fa-angle-up"></i>
        </Button>
      </RightBox>
    </Container>
  )
}

export default Footer
