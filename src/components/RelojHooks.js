import React, {  useEffect, useState } from 'react';
/*Este reloj es el componente que muestra el estado de la hora 
pudiese mostrarlo tambien solo con llamar a {hora} en el return de la funcion
de esta manera tenemos que pasar como prop la hora y mostramos este componente en el return*/
function Reloj ({hora}){
  return <h3>{hora}</h3>
}

export default function RelojHooks(){
/*CREANDO LOS ESTADOS(SE CREA UN ESTADO POR CADA PROPIEDAD)*/ 
/*este es el estado de la hora*/
const[hora, setHora] = useState(new Date().toLocaleTimeString());
/*este s el estado visible(si es visible o no)*/
const[visible, setVisible] = useState(false);

/*CREANDO EL USEEFECT PARA ACTUALIZAR EL ESTADO CUANDO CIERTAS VARIABLES CAMBIEN*/
useEffect(()=>{
  let temporizador;
if (visible){
  temporizador = setInterval(() => {
    setHora(new Date().toLocaleTimeString())
  }, 1000);
} else{
  (clearInterval(temporizador));
}
  return () => {
    console.log('Fase de Desmontaje');
    clearInterval(temporizador);
  };

}, [visible])

/*USANDO EL METODO TICTAC
/*este metodo recibe un parametro que se le asigno al boton, lleva por nombre (valor),
para poderse ejecutar dependiendo de cual de ambos botones ejecute ya que cada uno tiene un parametro diferente
en este caso son true/fase estos parametros modifican a (valor por dicho parametro)
para ejecutar la linea de codigo correspondiente a cada parametro (true/false)*/

/*ya con esto lo que hara es modificar el estado de visible (se oculta o aparece)
const tictac = (valor) => setVisible(valor)
cuando queramos inicial el reloj, esta funcion que esta dentro del boton le
    dice que el parametro sera true dentro de la funcion tictac para cambiar su esta a visible

    <button onClick={() => tictac(true)}>Iniciar</button>
    caso contrario del boton iniciar
    <button onClick={() => tictac(false)}>Detener</button>
*/




  return(
    <>
    <h2>Reloj con Hooks</h2>
    

    {visible && <Reloj hora={hora}/>}
    {/*SIMPLIFICANDO ESCRIBIENDO LA FUNCION DIRECTAMENTE EN EL EVENTO*/}
    <button onClick={() => setVisible(true)}>Iniciar</button>
    
    <button onClick={() => setVisible(false)}>Detener</button> 


    </>
  )
}