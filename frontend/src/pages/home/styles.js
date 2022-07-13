import styled from 'styled-components'

export const ContainerRow = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.5rem;

  @media screen and (max-width: 828px) {
    flex-direction: column;
  }
`

export const ContainerCol = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
`

export const ShowCase = styled.section`
  background-image: linear-gradient(
    to bottom,
    ${props => props.theme.colors.background},
    #00a6ed 70%
  );
  color: ${props => props.theme.colors.text};

  @media screen and (max-width: 828px) {
    flex-direction: column;

    #Astronaut {
      display: none;
    }
  }
`

export const Search = styled.input`
  display: flex;
  width: 60%;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  padding: 5px 15px;
  border: none;
  border-radius: 3px;
`

export const Boxes = styled.section`
  background-color: ${props => props.theme.colors.background};
`

export const Box = styled.a`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  padding: 40px 20px;
  border-radius: 5px;
  margin-top: 40px;
  margin-bottom: 40px;
  color: black;
  background: #d8effe;
  box-shadow: 0 3px 5px rgba(216, 239, 254, 0.6);
  text-decoration: none;

  &:hover {
    color: black;
    background: rgba(216, 239, 254, 0.6);
  }

  @media screen and (max-width: 828px) {
    padding: 30px 10px;
    border-radius: 5px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

export const BoxIcons = styled.svg`
  height: 1.5rem !important;
`

export const BoxH2 = styled.h2`
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
`

export const Highlights = styled.section`
  background-color: ${props => props.theme.colors.background};
  padding-bottom: 40px;
`

export const HighlightsLeft = styled.a`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 610px;
  padding: 30px;
  background-color: #073042;
  color: #fefefe;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }

  @media screen and (max-width: 828px) {
    flex-direction: column;
    width: 100%;
  }
`

export const HighlightsRight = styled.a`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 610px;
  padding: 30px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }

  @media screen and (max-width: 828px) {
    flex-direction: column;
    width: 100%;
  }
`

export const HighlightsImg = styled.img`
  width: 100%;

  @media screen and (max-width: 828px) {
    height: 100px;
    margin-top: 40px;
  }
`

export const HighlightsButton = styled.button`
  margin-top: 40px;
  background: none;
  padding: 10px 30px;
  border: 1px solid #fff;
  border-radius: 30px;
  color: #fff;

  &:hover {
    background: rgba(216, 239, 254, 0.6);
  }
`

export const Article = styled.section`
  background-color: ${props => props.theme.colors.background};
`

export const ArticleCollumn = styled.div`
  flex: 1;
  line-height: normal;
`

export const ArticleSection = styled.section`
  flex: 1;
  margin-bottom: 40px;
  line-height: 1.5;
`

export const ArticleButton = styled.button`
  font-size: 16px;
  border: none;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 50px;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`

export const ArticleH2 = styled.h2`
  font-size: 40px;
`

export const ArticleParagraph = styled.p`
  margin: 10px 0px;
  line-height: 1.5;
`

export const ArticleImage = styled.img`
  width: 100%;
  height: 221.52px;

  @media screen and (max-width: 828px) {
    height: 100%;
  }
`

export const ArticleLink = styled.a`
  font-size: 32px;
  text-decoration: none;
  color: ${props => props.theme.colors.text};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

export const SeeMore = styled.section`
  background-color: ${props => props.theme.colors.background};
`

export const Shortcuts = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media screen and (max-width: 828px) {
    flex-direction: column;
  }
`

export const Shortcut = styled.a`
  display: flex;
  flex-direction: column;
  padding: 30px;
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.primary};

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`

export const ShortcutDiv = styled.div`
  position: absolute bottom;
  margin-top: 20px;
  align-self: flex-end;
`

export const ShortcutIcon = styled.img`
  width: 80px;
`

export const Comunity = styled.section`
  background-color: ${props => props.theme.colors.background};
`

export const ComunityShortcuts = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media screen and (max-width: 828px) {
    flex-direction: column;
  }
`

export const ComunityShortcut = styled.a`
  display: flex;
  flex-direction: column;
  padding: 20px;
  text-decoration: none;
  color: #fefefe;
  background-color: #073042;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

export const ComunityIcon = styled.img`
  width: 80px;
  margin: 0px;
`


