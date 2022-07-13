import styled from 'styled-components'

export const Container = styled.nav`
  background-color: ${props => props.theme.colors.background};
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  transition: 0.4s transform;
  transform: ${props => (props.isOpen ? 'translateX(0%)' : 'translateX(100%)')};

  @media screen and (min-width: 828px) {
    position: static;
    min-width: inherit;
    min-height: inherit;
    flex-direction: row;
    transform: none;
  }
`

export const IconLink = styled.div`
  a {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    transition: color 0.4s;

    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
`
