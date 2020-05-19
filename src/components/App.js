import React from 'react';
import ItemControl from './ItemControl';
import ItemDetail from './ItemDetail';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Header"><h1>AunTea's Organics</h1></div>
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <ItemControl />
          </div>
          <div className="column eight wide">
            <ItemDetail />
          </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default App;