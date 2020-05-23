import React from 'react'
import { connect } from 'react-redux';
import { deleteItem, selectItem, editItem } from './../actions';


function ItemList(props) {

  return (
    <div className="ItemList flex-container">
      <h3>The Inventory Is:</h3>
      {props.items.map(item => 
        <div className="item" key={item.id}>
          {item.itemName}:  ${item.price} | Available: {item.available}
          <button onClick={() => props.deleteItem(item)}>Delete</button>
          <button onClick={()=> props.selectItem(item)}>Show Details</button>
          {/* <button onClick={()=> props.editItem(item)}>Edit Item</button> */}
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => { 
  return {
    selectedItem: state.selectedItemReducer.selectedItem,
    itemToEdit: state.selectedItemReducer.itemToEdit
  }
}

export default connect(mapStateToProps, { deleteItem, selectItem, editItem })(ItemList);