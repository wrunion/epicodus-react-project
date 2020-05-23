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
      <form id={v4()} onSubmit={handleSubmit} className="ui segment">
        <div className="inputField">
          <label>Item Name: <input type="text" name="itemName" id="itemName" defaultValue="Green Tea" /></label>
        </div>
        <div className="inputField">
          <label>Description: <input type="text" name="description" id="description" defaultValue="Healthy and Delicious" /></label>
        </div>
        <div className="inputField">
          <label>Price: <input type="number" name="price" price="price" defaultValue="23" min={0}/></label>
        </div>
        <div className="inputField">
          <label>Available: <input type="number" name="available" price="available" min={0} defaultValue="100" /></label>
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