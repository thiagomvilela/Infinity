import React from 'react'
import { Container } from './styles'

const Map = () => {
  return (
    <Container>
      <address>
        <p>Entre em Contato por E-mail: <a href="mailto:infinity.ifpe@gmail.com">Clique aqui 📧</a></p>
        <p> Visite nossa Página: <a href="https://thiagomvilela.github.io/Infinity/" target="_blank">Infinity♾️</a></p>
        <p> Instituto Federal de Pernambuco: <a href="https://www.ifpe.edu.br/campus/paulista" target="_blank">IFPE (Campus Paulista)</a></p>
      </address>

      <hr />
      <h5>Endereço:</h5>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.515056446582!2d-34.861024148546555!3d-7.94560588132668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab3dbf4a9cd5f1%3A0x45bf1641ad29a799!2sIFPE-%20Intituto%20Federal%20De%20Pernambuco%20%2C%20Paulista!5e0!3m2!1spt-BR!2sbr!4v1650408729027!5m2!1spt-BR!2sbr"
        width="800"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Container>
  )
}

export default Map
