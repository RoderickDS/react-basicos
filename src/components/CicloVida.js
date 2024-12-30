import React, {Component} from 'react';

class Reloj extends Component {
  constructor(props){
    super(props);
  }

    /*Este es el componente que representa la fase de desmontaje, este se va a ejecutar cuando el metodo ya no exista(cuando se eliminado)*/
componentWillUnmount(){
  console.log(3,'El componente ha salido eliminado del DOM')
  }
  
  render(){
    return <h3>{this.props.hora}</h3>
  }
  
}

export default class CicloVida extends Component {
  constructor (props){
    super(props)
    console.log(0, "El componente se inicializa, aún no esta en el DOM")
    {/*Definimos el estado dentro del contructor (es un objeto) */}
    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    };
    {/*creamos la variable donde almacenaremos el set interval para poder iniciarlo y poder detenerlo */}

    this.temporizador = null;    
  };

  /*Estos son los componentes de la fase de actualizacion */
  componentDidMount(){
    console.log(1, 'el componente ya se encuentra en el DOM')
  };

/*Metodos para ver el estado y las propiedades previas de un estado*/
  componentDidUpdate(prevProps, prevState){
    console.log(2, 'El estado o las props del componente han cambiado');
    console.log(prevProps);
    console.log(prevState);
  };
  /*Este metodo es el que actualiza el Estado (en este caso un set interval) */
  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString()
      })
    }, 1000);   
    
  };
  


  /* Este metodo es el que llama al metodo tictac para que inice*/
  iniciar = () => {
    this.tictac();
    this.setState({
      visible: true,
    })
  };
  /* Este metodo es el que detiene el temporicador*/
  detener = () => {
    clearInterval(this.temporizador);
    this.setState({
      visible: false,
    })
  };
  render(){
    console.log(4, 'El componente se dibuja (o redibuja por algun cambio) en el DoM')
    return(
      <>
      <h2>Ciclo de Vida de los Componente de Clase</h2>
      {/* esto dice lo siguiente: si la propiedad visible es true entonces muestra el reloj, si no, no muestres nada*/}
      {this.state.visible && <Reloj hora={this.state.hora}/>}

      {/*Aca creamos los 2 botones para llamar a los metodos */}
      <button onClick={this.iniciar}>Iniciar</button>
      <button onClick={this.detener}>Detener</button>
      </>
    )
  }
}