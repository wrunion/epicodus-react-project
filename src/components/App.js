import React from 'react';
import ItemControl from './ItemControl';

function App() {
  return (
    <div className="App">
      <div className="Header"><h1>AunTea's Organics</h1></div>
      {/* <h2>There are no items to display.</h2> */}

      <ItemControl />
      <div className="Footer"><p>Copyright (c) 2020 AunTea's Organics</p></div>
    </div>
  );
}

export default App;