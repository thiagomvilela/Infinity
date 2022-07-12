import styled from 'styled-components'

export const ShowCase = styled.section`
  background-image: linear-gradient(
    to bottom,
    ${props => props.theme.colors.background},
    #00a6ed 70%
  );
  color: ${props => props.theme.colors.text};
`

export const Image = styled.img`
  height: 150px;
`

export const Clients = styled.section`
  background-color: ${props => props.theme.colors.background};
`

export const Logos = styled.img`
  height: 80px;
  margin: 40px 0;
`

export const Divider = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  height: 5px;
`

export const Contact = styled.section`
  background-color: ${props => props.theme.colors.primary};
`
