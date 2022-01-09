import React from 'react'
import PropTypes from 'prop-types';
function Header({text}) {
    return (
        <header>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}
//deixa uma configuração de props default se elas não forem inputadas no component
Header.defaultProps = {
    text: 'Feedback UI'
}
//Impede de que o valor passado pelas props seja um tipo de dado diferente do esperado
/*
Header.PropTypes = {
    text: PropTypes.string
    //Aqui por exemplo a prop text só recebe valores em string, qualquer outro é rejeitado 
}*/
export default Header
