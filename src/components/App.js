import React from 'react';
import ItemControl from './ItemControl';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Header"><h1>AunTea's Organics</h1></div>
      <ItemControl />
      <div className="Footer"><p>Copyright (c) 2020 AunTea's Organics</p></div>
    </div>
  );
}

export default App;