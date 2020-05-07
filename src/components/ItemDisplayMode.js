import React from 'react';

const ItemDisplayMode = (props) => {
  return(
  <div className="ItemDisplayMode" key={props.id}>
      <h3>{props.name}</h3>
      <p><em>{props.description}</em></p>
      <p>Available: {props.available} | Price: {props.price}</p>
      <button id={props.id} onClick={props.handlePurchaseClick}>Purchase</button><button id={props.id} onClick={props.handleDeleteClick}>Delete</button><button onClick={props.handleAddItemClick}>Add Item</button>

  </div>
  );
}

export default ItemDisplayMode;