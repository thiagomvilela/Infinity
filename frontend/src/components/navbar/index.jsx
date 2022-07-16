import React from 'react'
import { Container, IconLink } from './styles'

import { Link } from 'react-router-dom'
import { useNavbar } from '../../contexts/NavbarContext'

const PATH = '/Infinity' // vite.config.ts

const Navbar = () => {
  const { isOpen, setIsOpen } = useNavbar()

  const closeSidebar = () => {
    setIsOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <Container isOpen={isOpen} onClick={() => closeSidebar()}>
      <IconLink>
        <Link to={PATH + '/'}>Home</Link>
      </IconLink>
      <IconLink>
        <Link to={PATH + '/contact'}>Contatos</Link>
      </IconLink>
      <IconLink>
        <Link to={PATH + '/about'}>Sobre</Link>
      </IconLink>
      <IconLink>
        <Link to={PATH + '/technologies'}>Tecnologias</Link>
      </IconLink>
      <IconLink>
        <Link to={PATH + '/scheduling'}>Agendamento</Link>
      </IconLink>
      <IconLink>
        <Link to={PATH + '/client'}>Clientes</Link>
      </IconLink>
    </Container>
  )
}

export default Navbar
