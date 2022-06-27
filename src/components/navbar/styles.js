import styled from 'styled-components'

export const Container = styled.nav`
  background-color: ${props => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const IconLink = styled.div`
  a {
    color: ${props => props.theme.colors.text};
  }
`
