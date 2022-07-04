import styled from 'styled-components'

export const Container = styled.div`
  padding-left: 30%;
  padding-right: 30%;
  padding-bottom: 5%;
  background-image: linear-gradient(to bottom, ${props => props.theme.colors.background}, #00A6ED 70%);
  color: ${props => props.theme.colors.text};


  @media screen and (max-width: 828px){
    flex-direction:column;
  }
`

export const Image = styled.img`
  width: 60%;
  display: block;
  margin: 0 auto;
`
