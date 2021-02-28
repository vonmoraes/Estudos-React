// import logo from './logo.svg';
import './App.css';
// import Hello from './Hello';
import {
  MyFirstFunctionalComponent,
  MyFirstClassComponent,
  ConditionalComponent,
  Button,
} from './Components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div className="content">
          {/* <Button buttontext="Clica clica clica!" alerttext= "Clicou :D!"/>  */}
          {/* entendendendo o funcionamento do PROPS  */}
          <MyFirstFunctionalComponent paragrafo="Este é um paragráfo em functional component, mais recomendado para ser utilizado!" 
            nome="Este é um props de nome. "/>
             <p> - Tem um tutorial legal na página <a href="https://www.taniarascia.com/getting-started-with-react/"> compartilhada </a></p>
             <p> - Tem um conteúdo que fala sobre o por que de utilizar o functional ao invés do class <a href="https://reactjs.org/docs/components-and-props.html#function-and-class-components"> aqui </a></p>
          {/* <MyFirstClassComponent paragrafo="este é um paragráfo de class component" nome="este é um nome de class component Lucas de Souza Moraes"/> */}
          {/* componente condicional */}
          <ConditionalComponent renderA={false}/>



        </div>
      </header>
    </div>
  );
}

export default App;
