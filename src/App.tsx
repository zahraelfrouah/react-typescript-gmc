import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
     <Greeting name="Alice" />
     <Counter />
    </div>
  );
}

export default App;
