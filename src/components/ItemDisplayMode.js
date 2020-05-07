import React from 'react';

const ItemDisplayMode = (props) => {

  function purchaseItem(id) {
    // const id = e.target.id.value;
    // e.target.itemName.value
    console.log(id);
    props.purchaseCallback(id);
  }
  

  function handleDeleteClick(id) {
    console.log(id);
    props.deleteCallback(id);
  }

  return(
  <div className="ItemDisplayMode" key={props.id}>
      <h3>{props.name}</h3>
      <p><em>{props.description}</em></p>
      <p>Available: {props.available} | Price: {props.price}</p>
      <button id={props.id} onClick={() => purchaseItem(props.id)}>Purchase</button>
      <button id={props.id} onClick={() => handleDeleteClick(props.id)}>Delete</button>
      <button onClick={props.handleAddItemClick}>Add Item</button>
  </div>
  );
}

export default ItemDisplayMode;