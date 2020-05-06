import React from 'react'
import {v4 } from 'uuid';

function Form(props) {
  // const { handleSubmitCallback } = props;

  function handleSubmit(e) {
    e.preventDefault();
    const { itemName, description, available, price, id} = e.target;
    console.log({itemName, description, available, price, id});
    // handleSubmitCallback({itemName, description, available, price, id});
  } 

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   props.handleSubmitCallback({names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: v4()});
  // }

  return (
    <div className="Form">
      <form id={v4()} onSubmit={handleSubmit}>
        <input type="text" name="itemName" id="itemName" />
        <input type="text" name="description" id="description" />
        <input type="number" name="available" price="available" />
        <input type="number" name="price" price="price" />
        <button type="submit">Add Item</button>
      </form>
    </div>
  )
}

export default Form;