import styled from 'styled-components'

export const Container = styled.div`
  background-color: black;
`

export const Image = styled.img`
  height: 200px;
  width: 200px;
`
export const Text = styled.p`
  color: ${props => props.theme.colors.background};
`
