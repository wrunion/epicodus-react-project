import React from 'react'
import {v4 } from 'uuid';

function Form(props) {
  // const { handleSubmitCallback } = props;

  function handleSubmit(e) {
    e.preventDefault();
    // const { itemName, description, available, price, id} = e.target.value;
    // console.log(itemName, description, available, price, id);
    props.handleSubmitCallback({
      itemName: e.target.itemName.value, 
      description: e.target.description.value, 
      available: parseInt(e.target.available.value), 
      price: parseInt(e.target.price.value), 
      id: e.target.id});
  } 

  return (
    <div className="Form">
      <form id={v4()} onSubmit={handleSubmit}>
        <div className="inputField">
          <label>Item Name: <input type="text" name="itemName" id="itemName" /></label>
        </div>
        <div className="inputField">
          <label>Description: <input type="text" name="description" id="description" /></label>
        </div>
        <div className="inputField">
          <label>Price: <input type="number" name="price" price="price" /></label>
        </div>
        <div className="inputField">
          <label>Available: <input type="number" name="available" price="available" /></label>
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  )
}

export default Form;