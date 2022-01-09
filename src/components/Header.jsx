import React from 'react'
import PropTypes from 'prop-types';
function Header({text, bgColor, textColor}) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    }
    return (
        <header style={headerStyles}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}
//deixa uma configuração de props default se elas não forem inputadas no component
Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
}
//Impede de que o valor passado pelas props seja um tipo de dado diferente do esperado
/*
Header.PropTypes = {
    text: PropTypes.string
    //Aqui por exemplo a prop text só recebe valores em string, qualquer outro é rejeitado 
}*/
export default Header
