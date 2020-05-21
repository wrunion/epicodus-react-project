import React from 'react'
import { connect } from 'react-redux';
import { updateItem, deleteItem } from './../actions';


function ItemDetails(props) {
  const { item } = props;

  if (props.selectedItem) {
    return (
      <div className="ItemDetails" key={item.id}>
        {item.itemName}:  ${item.price}
        {/* <button onClick={() => props.deleteItem(item)}>Purchase</button> */}  
        <button onClick={() => props.updateItem(item)}>Edit</button>
        <button onClick={() => props.deleteItem(item)}>Delete</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedItem: state.selectedItemReducer.selectedItem,
    editing: state.selectedItemReducer.editing
  }
}

export default connect(mapStateToProps, { updateItem, deleteItem })(ItemDetails);