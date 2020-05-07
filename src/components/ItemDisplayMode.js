import React from 'react';
import PropTypes from 'prop-types';

const ItemDisplayMode = (props) => {

  function purchaseItem(id) {
    props.purchaseCallback(id);
  }
  
  function handleDeleteClick(id) {
    props.deleteCallback(id);
  }

  function showDetailView(id) {
    props.handleDetailCallback(id);
  }

  return (
    <div className="ItemDisplayMode" key={props.id}>
    <h3>{props.name}</h3>
      <p><em>{props.description}</em></p>
      <p>Available: {props.available} | Price: {props.price}</p>
      <button id={props.id} onClick={() => purchaseItem(props.id)}>Purchase</button>
      <button id={props.id} onClick={() => handleDeleteClick(props.id)}>Delete</button>
      <button onClick={() => showDetailView(props.id)}>View Details</button>
    </div>
  );
}

ItemDisplayMode.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  available: PropTypes.number,
  price: PropTypes.number,
  purchaseCallback: PropTypes.func,
  deleteCallback: PropTypes.func,
  handleDetailCallback: PropTypes.func
} 

export default ItemDisplayMode;