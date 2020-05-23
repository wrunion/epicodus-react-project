import React from 'react'
import { connect } from 'react-redux';
import { updateItem, deleteItem, selectItem, editItem, purchaseItem } from './../actions';

function ItemDetails(props) {
  
    const { item } = props;
console.log(props)
    return (
      <div className="ItemDetails" key={item.id}>
        {item.itemName}:  ${item.price} <br />
        Available: {item.available} | <br/>
        {props.itemToEdit ? <p>Item To Edit is: {props.itemToEdit}</p>
        : null} <br />
        {/* <button onClick={() => props.deleteItem(item)}>Purchase</button> */}  
        {/* <button onClick={() => props.updateItem(item)}>Edit</button> */}
        {/* <button onClick={() => {props.deleteItem(item); props.selectItem(null) }}>Delete</button> */}
        <button onClick={()=> props.editItem(item)}>Edit</button>
        
        {/* <button onClick={()=> props.purchaseItem(item)}>Purchase</button> */}
      </div>
    )
  }


// const mapStateToProps = state => {
//   return {
//     selectedItem: state.selectedItemReducer.selectedItem,
//     itemToEdit: state.selectedItemReducer.itemToEdit 
//   }
// }

export default connect(null, { updateItem, deleteItem, selectItem, editItem, purchaseItem })(ItemDetails);