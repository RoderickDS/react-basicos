import React, {Component} from 'react';

export class EventosES6 extends Component{
  constructor(props){
    super(props);
    this.state = {
      contador: 0,
    };
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e){
    this.setState({
      contador: this.state.contador + 1,
    })
  }

  restar(e){
    this.setState({
      contador: this.state.contador - 1,
    })
  }

  render(){
    return(
      <div>
        <h2>Eventos en Componentes de Clase ES6</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    )
  }
}
//Propierties Initializer
export class EventosES7 extends Component{
  state = {
    contador: 0,
  }  ;
  
//Arrow Funtions
  sumar = (e) => {
    console.log("Sumar");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    })
  }

  restar =(e) => {
    console.log("Restar");
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    })
  }

  render(){
    return(
      <div>
        <h2>Eventos en Componentes de Clase ES7</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    )
  }
}
{/*Evento Personalizado Ejemplo con el boton*/}
/*function Boton (props){
  return (<button onClick={props.myOnClick}>Botón Hecho Componente</button>)
}*/


{/*Evento Personalizado Mismo ej con codigo diferente*/}

const Boton = ({myOnClick}) => 
  (<button onClick={myOnClick}>Botón Hecho Componente</button>
 )

export class MasSobreEventos extends Component{
  handleClick = (e, msj) => {
    //console.log(e);
   // console.log(e.nativeEvent);
   // console.log(e.target);
    //console.log(e.nativeEvent.target);
    //console.log(msj)
  }
  render(){
    return(
      <div>
        <h2>Más Sobre Eventos</h2>
        <button onClick={(e)=>this.handleClick(e, "hola pasando parametro desde un evento")}>Saludar</button>


        {/*Evento Personalizado 
          1) creamos la prop (myOnClick)
          2) pasamos las props a la funcion Boton
          3) luego en la funcion si asignamos el evento y pasamos como funcion {props.myOnClick}
        */}      
        <Boton myOnClick={(e)=>this.handleClick(e, "hola pasando parametro desde el boton componente")}/>
        


      </div>
    )
  }
}