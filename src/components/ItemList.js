import React from 'react'
import { connect } from 'react-redux';
import { deleteItem, selectItem, editItem } from './../actions';

function ItemList(props) {
  
  if (props.items.length === 0) {
    return (
      <h3>There are no items to display</h3>
    );
  }
  return (
    <div className="ItemList flex-container">
      <h3>The Inventory Is:</h3>
      {props.items.map(item => 
        <div className="item" key={item.id}>
          {item.itemName}:  ${item.price}
          <button onClick={() => props.deleteItem(item)}>Delete</button>
          <button onClick={()=> props.selectItem(item)}>Show Details</button>
          <button onClick={()=> props.editItem(item)}>Edit</button>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => { 
  return {
    items: state.itemReducer,
    editing: state.selectedItemReducer.editing
  }
}

export default connect(mapStateToProps, { deleteItem, selectItem, editItem })(ItemList);