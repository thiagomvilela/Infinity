import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import {
  ContainerRow,
  ContainerCol,
  ShowCase,
  Search,
  Boxes,
  Box,
  BoxIcons,
  BoxH2,
  Highlights,
  HighlightsLeft,
  HighlightsRight,
  HighlightsImg,
  HighlightsButton,
  Article,
  ArticleCollumn,
  ArticleSection,
  ArticleButton,
  ArticleH2,
  ArticleParagraph,
  ArticleImage,
  ArticleLink,
  SeeMore,
  Shortcuts,
  Shortcut,
  ShortcutDiv,
  ShortcutIcon,
  Comunity,
  ComunityShortcuts,
  ComunityShortcut,
  ComunityIcon,
} from "./styles";
import Astronaut from "../../assets/astronaut-about.png";

const Home = () => {
  return (
    <>
      <Header />
      <ShowCase>
        <ContainerRow>
          <div>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              placeat
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              commodi quidem veniam quisquam recusandae, officia rem alias nam
              natus vel laboriosam quas eaque et provident tempora voluptatum
              dicta iure enim?
            </p>
            <Search placeholder="Search"></Search>
          </div>
          <div>
            <img
              id="Astronaut"
              src={Astronaut}
              alt="Foto de um astrounata sentado na Terra"
            />
          </div>
        </ContainerRow>
      </ShowCase>
      <Boxes>
        <ContainerRow>
          <Box href="#">
            <BoxIcons xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55" />
            </BoxIcons>
            <BoxH2>Lorem ipsum dolor sit amet</BoxH2>
            <i className="fas fa-download"></i>
          </Box>
          <Box href="#">
            <BoxIcons xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z" />
            </BoxIcons>
            <BoxH2>Lorem ipsum dolor sit amet</BoxH2>
            <BoxIcons xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" />
            </BoxIcons>
          </Box>
          <Box href="#">
            <BoxIcons xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z" />
            </BoxIcons>
            <BoxH2>Lorem ipsum dolor sit amet</BoxH2>
            <BoxIcons xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z" />
            </BoxIcons>
          </Box>
        </ContainerRow>
      </Boxes>
      <Highlights>
        <ContainerRow>
          <HighlightsLeft href="">
            <div>
              <p>Lorem</p>
              <h3>Lorem ipsum dolor sit, amet consectetur.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                ipsum! Suscipit magnam nihil nesciunt rem laudantium. Qui omnis
                adipisci reprehenderit!
              </p>
              <HighlightsButton>Lorem ipsum</HighlightsButton>
            </div>
            <div>
              <HighlightsImg
                src="https://developer.android.com/images/home/android-logo-13-twotone-1.png"
                alt=""
              />
            </div>
          </HighlightsLeft>
          <HighlightsRight href="">
            <div>
              <p>Lorem</p>
              <h3>Lorem ipsum dolor sit, amet consectetur.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                ipsum! Suscipit magnam nihil nesciunt rem laudantium. Qui omnis
                adipisci reprehenderit!
              </p>
              <HighlightsButton>Lorem ipsum</HighlightsButton>
            </div>
            <div>
              <HighlightsImg
                src="https://developer.android.com/images/cluster-illustrations/indie-games.svg"
                alt=""
              />
            </div>
          </HighlightsRight>
        </ContainerRow>
      </Highlights>
      <Article>
        <ContainerRow>
          <ArticleCollumn>
            <ArticleSection>
              <ArticleImage
                src="https://static.vecteezy.com/system/resources/previews/001/397/516/non_2x/cyber-security-illustration-free-vector.jpg"
                alt=""
              />
              <ArticleParagraph>Lorem</ArticleParagraph>
              <ArticleH2>Lorem ipsum dolor sit amet consectetur.</ArticleH2>
              <ArticleParagraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati excepturi corrupti consequatur. Sit ipsa ducimus eos
                dignissimos sunt itaque dolorem.
              </ArticleParagraph>
              <ArticleButton>Lorem ipsum dolor</ArticleButton>
            </ArticleSection>
          </ArticleCollumn>
          <ArticleCollumn>
            <ArticleSection>
              <ArticleImage
                src="https://static.vecteezy.com/system/resources/previews/004/578/878/non_2x/develop-web-optimization-seo-with-google-search-engine-free-vector.jpg"
                alt=""
              />
              <ArticleParagraph>Lorem</ArticleParagraph>
              <ArticleLink href="#">Lorem ipsum</ArticleLink>
              <ArticleParagraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
                veniam!
              </ArticleParagraph>
            </ArticleSection>
            <ArticleSection>
              <ArticleImage
                src="https://static.vecteezy.com/system/resources/previews/002/214/468/large_2x/teamwork-web-design-and-development-free-vector.jpg"
                alt=""
              />
              <ArticleParagraph>Lorem</ArticleParagraph>
              <ArticleLink href="#">Lorem ipsum</ArticleLink>
              <ArticleParagraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
                veniam!
              </ArticleParagraph>
            </ArticleSection>
          </ArticleCollumn>
          <ArticleCollumn>
            <ArticleSection>
              <ArticleImage
                src="https://static.vecteezy.com/system/resources/previews/000/158/932/non_2x/bookkeeping-vector-illustration.png"
                alt=""
              />
              <ArticleParagraph>Lorem</ArticleParagraph>
              <ArticleLink href="#">Lorem ipsum</ArticleLink>
              <ArticleParagraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
                veniam!
              </ArticleParagraph>
            </ArticleSection>
            <ArticleSection>
              <ArticleImage
                src="https://static.vecteezy.com/system/resources/previews/001/879/576/large_2x/designing-program-web-apps-on-monitor-screen-or-desktop-teamwork-in-developing-programming-debugging-development-process-illustration-for-website-homepage-header-landing-web-page-template-free-vector.jpg"
                alt=""
              />
              <ArticleParagraph>Lorem</ArticleParagraph>
              <ArticleLink href="#">Lorem ipsum</ArticleLink>
              <ArticleParagraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
                veniam!
              </ArticleParagraph>
            </ArticleSection>
          </ArticleCollumn>
        </ContainerRow>
      </Article>
      <SeeMore>
        <ContainerCol>
          <h2>Veja mais</h2>
          <Shortcuts>
            <Shortcut href="#">
              <h2>Lorem ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt itaque voluptatum ab harum unde impedit saepe delectus
                ipsa magni odit.
              </p>
              <ShortcutDiv className="icon">
                <ShortcutIcon
                  src="https://developer.android.com/images/cluster-illustrations/developer-guidance.svg"
                  alt=""
                />
              </ShortcutDiv>
            </Shortcut>
            <Shortcut href="#">
              <h2>Lorem ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt itaque voluptatum ab harum unde impedit saepe delectus
                ipsa magni odit.
              </p>
              <ShortcutDiv className="icon">
                <ShortcutIcon
                  src="https://developer.android.com/images/cluster-illustrations/samples.svg"
                  alt=""
                />
              </ShortcutDiv>
            </Shortcut>
            <Shortcut href="#">
              <h2>Lorem ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt itaque voluptatum ab harum unde impedit saepe delectus
                ipsa magni odit.
              </p>
              <ShortcutDiv className="icon">
                <ShortcutIcon
                  src="https://developer.android.com/images/cluster-illustrations/quality-guidelines.svg"
                  alt=""
                />
              </ShortcutDiv>
            </Shortcut>
            <Shortcut href="#">
              <h2>Lorem ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt itaque voluptatum ab harum unde impedit saepe delectus
                ipsa magni odit.
              </p>
              <ShortcutDiv className="icon">
                <ShortcutIcon
                  src="https://developer.android.com/images/cluster-illustrations/launch-app.svg"
                  alt=""
                />
              </ShortcutDiv>
            </Shortcut>
          </Shortcuts>
        </ContainerCol>
      </SeeMore>
      <Comunity>
        <ContainerCol>
          <h2>Acesse nossa Comunidade</h2>
          <ComunityShortcuts>
            <ComunityShortcut href="#">
              <ComunityIcon
                src="https://developer.android.com/images/logos/stack-overflow.svg"
                alt=""
              />
              <h2>Lorem ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt itaque voluptatum ab harum unde impedit saepe delectus
                ipsa magni odit.
              </p>
              <a href="#">Lorem</a>
            </ComunityShortcut>
            <ComunityShortcut href="#">
              <ComunityIcon
                src="https://developer.android.com/images/logos/twitter.svg"
                alt=""
              />
              <h2>Lorem ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt itaque voluptatum ab harum unde impedit saepe delectus
                ipsa magni odit.
              </p>
              <a href="#">Lorem</a>
            </ComunityShortcut>
            <ComunityShortcut href="#">
              <ComunityIcon
                src="https://developer.android.com/images/logos/google-developer-logomark-color-square-1000-1000_72.png"
                alt=""
              />
              <h2>Lorem ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt itaque voluptatum ab harum unde impedit saepe delectus
                ipsa magni odit.
              </p>
              <a href="#">Lorem</a>
            </ComunityShortcut>
          </ComunityShortcuts>
        </ContainerCol>
      </Comunity>
      <Footer />
    </>
  );
};

export default Home;
