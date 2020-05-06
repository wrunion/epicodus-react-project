import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

const AddItemForm = (props) => {

  function onNewFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: v4()});
  }

  return (
    <div className="ItemEditMode">
      <form onSubmit={props.handleSubmit}>
        <div className="editTitle">
          <label htmlFor="name">Name: <input id="name" defaultValue="Green Tea" /></label>
        </div>
        <div className="editDescription">
          <label htmlFor="description">Description: <input id="description" defaultValue={props.description}/></label>
        </div>
        <div className="editAvailable">
          <label htmlFor="available">Available: <input type="number" name="available" min={0} max={999} defaultValue={props.available} /></label>
        </div>
        <div className="editPrice">
          <label htmlFor="price">Price: <input id="price" defaultValue={props.price} type="number" min={0} max={500}/></label>
        </div>
        <button onClick={onNewFormSubmission} type="submit" className="submit-button">Add Item</button>
      </form>
    </div>
  );
}

AddItemForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default AddItemForm;