import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'
const AboutPage = () => {
  return (
    <Card>
        <div className="about">
        <h1>Sobre esse projeto:</h1>
        <p>Aplicação para enviar feedbacks sobre um produto ou serviço.</p>
        <p>versão: 1.0.0</p>
        </div>
        <p>
            <Link to='/'>Voltar para a Home</Link>
        </p>
    </Card>
  )
}

export default AboutPage