import React, { Component } from 'react'
import { connect } from 'react-redux';
import './App.css';
import FormControl from './FormControl';
import ItemList from './ItemList';
import ItemDetails from './ItemDetails';
import { updateItem, deleteItem, selectItem, editItem, purchaseItem } from './../actions';

class App extends Component {

  render() {
    return (
      <div className="App grid-container">
        <h1>App</h1>
        <FormControl />
        <ItemList items={this.props.items}/>
        {this.props.selectedItem && this.props.itemToEdit ? 
          <ItemDetails 
            item={this.props.selectedItem}
            itemtoEdit={this.props.itemToEdit} />
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.itemReducer,
    selectedItem: state.selectedItemReducer.selectedItem,
    itemToEdit: state.selectedItemReducer.itemToEdit
  }
}

export default connect(mapStateToProps, { updateItem, deleteItem, selectItem, editItem, purchaseItem })(App);