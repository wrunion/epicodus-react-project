import React from 'react';
// import ItemControl from './ItemControl';
// import Footer from './Footer';
import ItemList from './ItemList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <ItemList />
          </div>
        </div>
      </div>

      {/* <div className="Header"><h1>AunTea's Organics</h1></div>
      <ItemControl />
      <Footer /> */}
    </div>
  );
}

export default App;