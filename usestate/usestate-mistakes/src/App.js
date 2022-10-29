import './App.css';
import React from 'react';
import UseStateNoUpdate from './components/UseStateNoUpdate';
import UseStateNoInit from './components/UseStateNoInit';

function App() {
  return (
    <React.Fragment>
      <UseStateNoUpdate/>
      <UseStateNoInit/>
    </React.Fragment>
  );
}

export default App;
