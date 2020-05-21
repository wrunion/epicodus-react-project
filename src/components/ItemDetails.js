import React from 'react'
import { connect } from 'react-redux';
import { editItem } from './../actions';


function ItemDetails(props) {
  const { item } = props;

  return (
    <div className="ItemDetails" key={item.id}>
      {item.itemName}:  ${item.price}
      {/* <button onClick={() => props.deleteItem(item)}>Purchase</button> */}  
      <button onClick={() => props.editItem(item)}>Edit</button>
      <button onClick={() => props.deleteItem(item)}>Delete</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    selectedItem: state.selectedItemReducer.selectedItem,
    itemToEdit: state.selectedItemReducer.itemToEdit
  }
}

export default connect(mapStateToProps, { editItem })(ItemDetails);