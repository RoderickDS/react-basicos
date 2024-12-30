import React, {Component} from 'react';

function EstadoAHijo(props){
  return (<div>
    <h3>{props.contadorHijo}</h3>
  </div>)
}

export default class Estado extends Component {
  constructor(props){
    super(props);
    this.state = {
      contador: 0,
      contador2: 10,
      contador3: 100,
    };
/*
    setInterval(() => {
      this.setState({
        contador: this.state.contador + 1,
        contador2: this.state.contador2 + 10,
        contador3: this.state.contador3 + 100
      })
    }, 1000);*/
  }
  render (){
    return (
      <div>
        <h2>El State</h2>

        <p>{this.state.contador + " " + this.state.contador2 + " " + this.state.contador3}</p>    
        <EstadoAHijo contadorHijo={this.state.contador +' ' + this.state.contador2}/>
      </div>
    )
  }
}