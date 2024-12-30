import React, { Component, useState } from 'react';

export default function ContadorHooks (props){
  //console.log(useState());
  /*esta es la variable estado inicial y la funcion que actualiazara el estado */
  const[contador, setContador] = useState(0);

  const sumar = () => {
    /*Esto dice actualizamos el estado set contador ok el nuevo valor sera el que trae la variable contador +1 */
    setContador(contador + 1)
  };

  const restar = () => {
    setContador(contador - 1)
  };

  return(
    <>
    <h2>Hooks - useState</h2>
    <nav>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
      {/* este es el renderizado. sin el this.state*/}
      <h3>{contador}</h3>
    </nav>
    <p>contador de {props.titulo}</p>
    </>
  );
}

ContadorHooks.defaultProps = {
  titulo: "clicks",
}
