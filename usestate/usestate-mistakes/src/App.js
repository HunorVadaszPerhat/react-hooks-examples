import './App.css';
import React from 'react';
import UseStateNoUpdate from './components/UseStateNoUpdate';
import UseStateNoInit from './components/UseStateNoInit';
import UseStateSpread from './components/UseStateSpread';
import UseStateInputsAllUpdate from './components/UseStateInputsAllUpdate';
import UseStateDerivedStates  from './components/UseStateDerivedStates';

function App() {
  return (
    <React.Fragment>
      <UseStateNoUpdate/>
      <UseStateNoInit/>
      <UseStateSpread/>
      <UseStateInputsAllUpdate/>
      <UseStateDerivedStates/>
    </React.Fragment>
  );
}

export default App;
