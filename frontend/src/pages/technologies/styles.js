import styled from 'styled-components'

export const Image = styled.img`
  width: 50%;
  padding-top: 4.8em;
  padding-bottom: 4.8em;
`
export const Title = styled.h1`
  padding-top: 1.5em;
  font-size: 3.2em;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
`
export const Text = styled.p`
  padding-bottom:1.5em;
  color: ${props => props.theme.colors.text};
`
export const Div = styled.div`
  background-image: linear-gradient(to left, ${props => props.theme.colors.background} 50%);
  padding-left: 3%;
`
export const Div2 = styled.div`
  background-image: linear-gradient(to left, ${props => props.theme.colors.background}, #00A6ED, #00A6ED, ${props => props.theme.colors.background});
  padding-left: 3%;
`
