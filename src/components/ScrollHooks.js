import React, { useEffect, useState } from 'react'

export default function ScrollHooks (){
  const [scrollY, setScrollY] = useState(0);
  

  useEffect(()=>{
    console.log("Moviendo el scroll");
    
    const detectarScroll = () => setScrollY(window.scrollY);
      /*Agregamos un listener al evento que queremos modificar
      al objeto windows le vas asignar en su evento scroll la funcion detectarscroll  */

      window.addEventListener('scroll', detectarScroll); 
      
      /*Cuando no exista el componente no exista en UI desencademos el return
      que significa la fase de desmontaje del useEffect*/
      return () => {
        window.removeEventListener('scroll', detectarScroll) 
      };

  },[scrollY]);


/*Fase de montaje se deja vacio el arr */
  useEffect(()=>{
    console.log('Fase de montaje');
  },[]);
/*Fase de actualizacion lo ideal es poner la variable que queremos que modifique
 dicho estado dentro del arr*/ 
  useEffect(()=>{
    console.log('Fase de actualizacion');
  });

  /*cuando a un useEfect ejecutas la funcion en el return react intrepreta que 
  quieres que ejecute la fase de desmontaje del evento*/
  useEffect(()=>{
    
    return () => {
    console.log('Fase de Desmontaje')};
  });

  
  

  return(
    <>
    <h2>Hooks - useEffect y el Ciclo de vida</h2>
    <p>Scroll Y del Navegador {scrollY}px</p>
    </>
  )
}
