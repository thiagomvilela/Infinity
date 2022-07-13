import styled from 'styled-components'

export const Container = styled.footer`
  background-color: ${props => props.theme.colors.background};
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid ${props => props.theme.colors.text};
  gap: 8px;
  padding: 8px;
`

export const Text = styled.p`
  font-size: 1.3em;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 0;
`

export const RightBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

export const Button = styled.button`
  background-color: transparent;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  font-size: 1.3em;
  border: none;
  transition: color 0.4s;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`

export const Link = styled.a`
  background-color: transparent;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  font-size: 1.3em;
  transition: color 0.4s;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`
