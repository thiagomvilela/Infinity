import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { Button, Icon } from './styles'

const ToggleLogin = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const LogoutButton = () => {
    const handleLogout = () => {
      logout()
    }

    return (
      <Button onClick={() => handleLogout()}>
        <Icon className="fas fa-sign-out-alt"></Icon>
      </Button>
    )
  }

  const LoginButton = () => {
    const handleLogin = () => {
      const PATH = '/Infinity'
      navigate(PATH + '/login')
    }

    return (
      <Button onClick={() => handleLogin()}>
        <Icon className="fas fa-sign-in-alt"></Icon>
      </Button>
    )
  }

  return user.authenticated ? LogoutButton() : LoginButton()
}

export default ToggleLogin
