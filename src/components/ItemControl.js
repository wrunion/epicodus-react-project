import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { deleteItem, selectItem, editItem } from './../actions';

class ItemControl extends Component {
  render() {
    return (
      <div className="ItemControl">
        <h2>Item Control</h2>
      </div>
    )
  }
}

const mapStateToProps = state => { 
  return {
    items: state.itemReducer,
    selectedItem: state.selectedItemReducer.selectedItem,
    itemToEdit: state.selectedItemReducer.itemToEdit
  }
}

export default connect(mapStateToProps, { deleteItem, selectItem, editItem })(ItemControl);