import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
