import styled from 'styled-components'

export const FormContainer = styled.form`
  background-color: ${props =>
    props.theme.title == 'light' ? '#00000010' : '#ffffff10'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 100%;
  min-width: 256px;
  margin: 0 auto;
  justify-self: flex-end;
  border-radius: 8px;
`

export const Header = styled.header`
  padding: 32px 16px;
`

export const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  text-align: center;
  font-weight: 700;
  font-size: 1.5em;
  letter-spacing: 1px;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 24px;
  padding: 16px;
`

export const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  cursor: pointer;
  width: 100%;
  align-self: center;
  font-size: 1.1em;
  letter-spacing: 1px;
  border: none;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.4s;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`

export const Footer = styled.footer`
  background-color: ${props =>
    props.theme.title == 'light' ? '#00000010' : '#ffffff10'};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-top: 1px solid
    ${props => (props.theme.title == 'light' ? '#00000010' : '#ffffff10')};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  a {
    color: ${props => props.theme.colors.primary};
    font-weight: 700;
    transition: color 0.4s;
    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
`

export const Text = styled.p`
  font-weight: 400;
  margin: 0;
`
