import React from "react";
import '../stylesheets/Button.css'

function Button(props) {
  
  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  }
  
  return (
    <button
      className={`button-div ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manageClick(props.children)} >
      {props.children}
    </button>
  )
}

export default Button;