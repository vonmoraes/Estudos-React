import { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Hello from './Hello';
import {
  CssComponent,
  CssModuleComponent,
  InlineStyleComponent,
  MaterialUIStyleComponent,
  PreprocessorComponent,
  StyledComponent,
} from './Components';

function App() {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 15000);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div className="content">
          <CssComponent isActive={isActive}/>

          <CssModuleComponent isActive={isActive}/>

          <InlineStyleComponent isActive={isActive}/>

          <MaterialUIStyleComponent isActive={isActive}/>

          <PreprocessorComponent isActive={false}/>

          <StyledComponent isActive={isActive}/>

        </div>
      </header>
    </div>
  );
}

export default App;
