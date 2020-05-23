import React from 'react';
import ItemControl from './ItemControl';
import ItemDetail from './ItemDetail';
import FormControl from './FormControl';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <h1>AunTea's Organics</h1></div>
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <ItemControl />
          </div>
          <div className="column eight wide">
            <ItemDetail />
            <FormControl />
          </div>
        </div>
      </div>
      <div className="ui container grid">
        <div className="column sixteen wide">

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;