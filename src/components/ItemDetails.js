import React from 'react'
import { connect } from 'react-redux';
import { updateItem, deleteItem, selectItem } from './../actions';

function ItemDetails(props) {

    const { item } = props;

    return (
      <div className="ItemDetails" key={item.id}>
        {item.itemName}:  ${item.price}
        {/* <button onClick={() => props.deleteItem(item)}>Purchase</button> */}  
        {/* <button onClick={() => props.updateItem(item)}>Edit</button> */}
        <button onClick={() => {props.deleteItem(item); props.selectItem(null) }}>Delete</button>
      </div>
    )
  }


// const mapStateToProps = state => {
//   return {
//     selectedItem: state.selectedItemReducer.selectedItem,
//     itemToEdit: state.selectedItemReducer.itemToEdit
//   }
// }

export default connect(null, { updateItem, deleteItem, selectItem })(ItemDetails);