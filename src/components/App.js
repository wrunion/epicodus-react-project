import React, { Component } from 'react'
import FormControl from './FormControl';
import ItemList from './ItemList';
// import ItemDetails from './ItemDetails';

class App extends Component {
  render() {
    return (
      <div className="App grid-container">
        <h1>App</h1>
        <FormControl />
        <ItemList /> 
        {/* <ItemDetails /> */}
      </div>
    )
  }
}

export default App;