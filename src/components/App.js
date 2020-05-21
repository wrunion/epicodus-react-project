import React, { Component } from 'react'
import FormControl from './FormControl';
// import ItemList from './ItemList';

class App extends Component {
  render() {
    return (
      <div className="App grid-container">
        <h1>App</h1>
        {/* <ItemList />  */}
        <FormControl />
      </div>
    )
  }
}

export default App;