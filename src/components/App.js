import React, { Component } from 'react'
import FormControl from './FormControl';
import ItemList from './ItemList';
// import ItemDetails from './ItemDetails';
// import UpdateItem from './UpdateItem';

class App extends Component {

  render() {
    return (
      <div className="App grid-container">
        <h1>App</h1>
        <FormControl />
        <ItemList /> 
        {/* <UpdateItem /> */}
      </div>
    )
  }
}

export default App;