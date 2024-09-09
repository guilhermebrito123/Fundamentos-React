//Componentes:
import FirstComponent from './components/FirstComponent';
import Template from './components/Template';
import Events from './components/Events';
import Challenge from './components/Challenge'
//Arquivos CSS:
import './App.css';

function App() {
  return (
    <div className = "container">
      <h1>Fundamentos REACT</h1>
      <FirstComponent />
      <Template />
      <Events />
      <br/>
      <br/>
      <br/>
      <br/>
      <Challenge />
    </div>
  );
}

export default App;
