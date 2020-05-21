import React from 'react'
import { connect } from 'react-redux';
import { deleteItem, selectItem } from './../actions';
// import UpdateItem from './UpdateItem';

function ItemList(props) {
  if (props.items == false) {
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
          {/* <UpdateItem item={item} /> */}
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => { 
  return {
    items: state.itemReducer
  }
}

export default connect(mapStateToProps, { deleteItem, selectItem })(ItemList);