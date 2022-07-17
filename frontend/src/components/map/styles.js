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
  text-align: center;
  color: ${props => props.theme.colors.text};
`
export const Text = styled.p`
  padding-bottom:1.5em;
  text-align: center;
  color: ${props => props.theme.colors.text};
`
export const Div = styled.div`
  background-image: linear-gradient(to left, ${props => props.theme.colors.background} 50%);
  padding-left: 7%;
`
export const Div2 = styled.div`
  background-image: linear-gradient(to left, ${props => props.theme.colors.background}, #00A6ED, #00A6ED, ${props => props.theme.colors.background});
  padding-left: 7%;
`
export const Container = styled.div`

`

export const Iframe = styled.iframe`

width: 600px;
height: 450px;


@media screen and (max-width: 828px) {

width: 200px;
height: 266px;
}
`
