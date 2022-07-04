import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 2%;
  padding-bottom: 20%;
  background-image: linear-gradient(to left, ${props => props.theme.colors.background}, #00A6ED 70%);
  color: ${props => props.theme.colors.text};

  @media screen and (max-width: 828px){
    flex-direction:column;
  }
`

export const Image = styled.img`
  padding-top: 2%;
  padding-left: 18%;
`

export const Title = styled.h1`

`

export const Text = styled.p`
  text-align: justify;
  padding-top: 5px;
  font-size: 1.5em;
`
