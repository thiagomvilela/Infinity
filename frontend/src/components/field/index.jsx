import React from 'react'
import { Container, Icon, Input, Label, WrapperInput } from './styles'

const Field = ({ state, setState, type, label, icon, placeholder, range }) => {
  const handleChange = e => {
    setState(e.target.value)
  }

  const renderIcon = () => {
    if (icon == 'email') {
      return <Icon className="fas fa-user"></Icon>
    } else if (icon == 'password') {
      return <Icon className="fas fa-lock"></Icon>
    } else if (icon == 'name') {
      return <Icon className="fas fa-signature"></Icon>
    } else if (icon == 'service') {
      return <Icon className="fas fa-concierge-bell"></Icon>
    } else if (icon == 'schedule') {
      return <Icon className="far fa-calendar-plus"></Icon>
    }
  }

  return (
    <Container>
      <Label>{label}</Label>
      <WrapperInput>
        {renderIcon()}

        <Input
          required
          value={state}
          type={type}
          placeholder={placeholder}
          minLength={range?.min}
          maxLength={range?.max}
          onChange={e => handleChange(e)}
        />
      </WrapperInput>
    </Container>
  )
}

export default Field
