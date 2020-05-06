import React from 'react'
import {v4 } from 'uuid';

function Form(props) {
  const { handleSubmitCallback } = props;

  function handleSubmit(e) {
    e.preventDefault();
    const { itemName, description, available, price, id} = e.target;
    handleSubmitCallback({itemName, description, available, price, id});
  } 

  return (
    <div className="Form">
      <form>
        <input type="text" name="itemName" id="itemName" />
        <input type="text" name="description" id="description" />
        <input type="number" name="available" price="available" />
        <input type="number" name="price" price="price" />
        <button type="submit" onSubmit={handleSubmit} id={v4()}>Add Item</button>
      </form>
    </div>
  )
}

export default Form;