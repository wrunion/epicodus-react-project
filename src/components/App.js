import React from 'react';
import ItemControl from './ItemControl';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Header"><h1>AunTea's Organics</h1></div>
      <ItemControl />
      <Footer />
    </div>
  );
}

export default App;