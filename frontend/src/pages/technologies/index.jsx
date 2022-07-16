import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Java from '../../assets/java.png'
import Css from '../../assets/css.png'
import Html from '../../assets/html.png'
import Js from '../../assets/javascript.png'
import Node from '../../assets/nodejs.png'
import Python from '../../assets/python.png'
import ReactIcon from '../../assets/react.png'
import Mariadb from '../../assets/mariadb.png'
import Oracle from '../../assets/oracle.png'
import Post from '../../assets/postgreesql.png'
import { Image, Title, Text, Div, Div2} from './styles'
import { Row, Col, Container } from 'react-bootstrap'

const Technologies = () => {
  return (
    <>
      <Header />
      <Container fluid align='center'>
        <Div>
          <Row md={2}>
            <Col>
              <Title>CSS</Title>
              <Text>Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags *style*. Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos.</Text>
            </Col>
            <Col md='auto'><Image src={Css} /></Col>
          </Row>
        </Div>
        <Div2>
          <Row md={2}>
            <Col md='auto'><Image src={Html} /></Col>
            <Col>
              <Title>HTML</Title>
              <Text> HyperText Markup Language (em português, Linguagem de Marcação de Hipertexto), é uma linguagem de marcação utilizada na construção de páginas na Web. Isso quer dizer que ele permite a construção de websites e a inserção de novos conteúdos, como imagens e vídeos, por meio dos hipertextos.</Text>
            </Col>
          </Row>
        </Div2>
        <Div>
          <Row md={2}>
            <Col>
              <Title>Java</Title>
              <Text>o Java é uma linguagem de programação orientada a objetos que atualmente faz parte do núcleo da Plataforma Java. A sintaxe utilizada deriva do C++ porém com um modelo mais simples. Como sua principal característica, todo o código é escrito dentro de uma classe e tudo é um objeto, com exceção dos tipos intrínsecos (números reais e ordinais, valores booleanos e caracteres) que não são classes por questões da funcionalidade exercida.</Text>
            </Col>
            <Col md='auto'><Image src={Java} /></Col>
          </Row>
        </Div>
        <Div2>
          <Row md={2}>
            <Col md='auto'><Image src={Js} /></Col>
            <Col>
              <Title>JavaScript</Title>
              <Text>JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.</Text>
            </Col>
          </Row>
        </Div2>
        <Div>
          <Row md={2}>
            <Col>
              <Title>Node.JS</Title>
              <Text>Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.</Text>
            </Col>
            <Col md='auto'><Image src={Node} /></Col>
          </Row>
        </Div>
        <Div2>
          <Row md={2}>
            <Col md='auto'><Image src={Python} /></Col>
            <Col>
              <Title>Python</Title>
              <Text>Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Sendo uma linguagem Open-Source de propósito geral usado bastante em data science, machine learning, desenvolvimento de web, desenvolvimento de aplicativos, automação de scripts, fintechs e mais.</Text>
            </Col>
          </Row>
        </Div2>
        <Div>
          <Row md={2}>
            <Col>
              <Title>React</Title>
              <Text>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais.</Text>
            </Col>
            <Col md='auto'><Image src={ReactIcon} /></Col>
          </Row>
        </Div>
        <Div2>
          <Row md={2}>
            <Col md='auto'><Image src={Mariadb} /></Col>
            <Col>
              <Title>MariaDB</Title>
              <Text>MariaDB é um sistema de gerenciamento de banco de dados que surgiu como fork do MySQL, criado pelo próprio fundador do projeto após sua aquisição pela Oracle. MariaDB é mantido atualizado com a última versão do MySQL e irá funcionar exatamente como MySQL.</Text>
            </Col>
          </Row>
        </Div2>
        <Div>
          <Row md={2}>
            <Col>
              <Title>Oracle</Title>
              <Text>Banco de Dados Oralce (Oracle Database) é um Sistema Gerenciador de Banco de Dados (SGDB) - isso é, um software que permite a administração de dados computacionais - multiplataforma e de natureza objeto-relacional comercializado pela Oracle Corporation.</Text>
            </Col>
            <Col md='auto'><Image src={Oracle} /></Col>
          </Row>
        </Div>
        <Div2>
          <Row md={2}>
            <Col md='auto'><Image src={Post} /></Col>
            <Col>
              <Title>PostgreSQL</Title>
              <Text>PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto baseado no POSTGRES, Versão 4.2, na Universidade da Califórnia no Departamento de Ciências da Computação em Berkeley, o qual foi pioneiro em muitos conceitos que vieram a estar disponíveis em alguns bancos de dados comerciais mais tarde.</Text>
            </Col>
          </Row>
        </Div2>
      </Container>
      <Footer />
    </>
  )
}

export default Technologies
