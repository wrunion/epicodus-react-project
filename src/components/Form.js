import React from 'react'
import {v4 } from 'uuid';
import PropTypes from 'prop-types';

function Form(props) {

  function handleSubmit(e) {
    e.preventDefault();
    props.handleSubmitCallback({
      itemName: e.target.itemName.value, 
      description: e.target.description.value, 
      available: parseInt(e.target.available.value), 
      price: parseInt(e.target.price.value), 
      id: e.target.id});
    props.handleCancelClick();  
  } 

  return (
    <div className="Form">
      <form id={v4()} onSubmit={handleSubmit} className="ui small form segment">
        <h3>Add Item</h3>
        <div className="inputField inline field">
          <label>Item Name:</label>
          <input type="text" name="itemName" id="itemName" defaultValue="Green Tea" />
        </div>
        <div className="inputField inline field">
          <label>Description:</label>
          <input type="text" name="description" id="description" defaultValue="Healthy and Delicious" />
        </div>
        <div className="inputField inline field">
          <label>Price:</label>
          <input type="number" name="price" price="price" defaultValue={15} min={0}/>
        </div>
        <div className="inputField inline field">
          <label>Available: </label>
          <input type="number" name="available" price="available" min={0} defaultValue={25} />
        </div>
        <button type="submit" className="ui button mini green basic">Add Item</button>
        <button type="button" className="ui button mini grey basic" onClick={props.handleCancelClick}>Cancel</button>
      </form>
    </div>
  );
}

Form.propTypes = {
  handleSubmitCallback: PropTypes.func,
  handleCancelClick: PropTypes.func
};

export default Form;