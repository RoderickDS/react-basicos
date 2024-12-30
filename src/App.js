import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import  { EventosES6, EventosES7, MasSobreEventos } from './components/Eventos';
import Padre from './components/ComunicacionesComponentes';
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';
import RelojHooks from './components/RelojHooks';
import AjaxHooks from './components/AjaxHooks';
import AjaxRods from './components/AjaxRods';
import HooksPersonalizados from './components/HooksPersonalizado';
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
        <img src={logo} className="App-logo" alt="logo" /> 
        </section>
        <section>
        {/* 
          <Componente name="Hola soy un componente, saludos desde la app"/>
          <Propiedades cadena='String' numero={19} boolenao={true}
          arreglo={[1,2,3]} objeto={{nombre:'Roderick', apellido:'Díaz'}}
          funcion={(num) => num * num} elementoReact={<p>Esto es un elemento react</p>}
          componenteReact={<Componente name='Soy un componente pasado como prop'/>}/>
          
          <hr/>
          <Estado/>
          <hr/>
          <RenderizadoCondicional/>
          <hr/>
          <RenderizadoElementos/>
          <hr/>
          <EventosES6/>
          <hr/>
          <MasSobreEventos/>          
          <hr/>
          <Padre/>          
          <AjaxApis/>
          <hr/>
          <EventosES7/>
          <hr/>
          <ContadorHooks titulo="Seguidores"/>
          
          <CicloVida/> 
        <hr/>  
              
        <hr/>
        <ScrollHooks/> 
        <hr/>
        <RelojHooks/>        
        
        <hr/>
        
        <AjaxRods/>
        <AjaxHooks/>
      */}
      <HooksPersonalizados/>
        </section>
      </header>
    </div>
  );
}

export default App;
