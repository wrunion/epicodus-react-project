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

  const { name, description, available, price, id } = props;

  return (
    <div className="ItemDisplayMode" key={id}>
    <h3>{name}</h3>
      <p><em>{description}</em></p>
      <p>Available: {available} | Price: {price}</p>
      <button id={id} onClick={() => purchaseItem(id)}>Purchase</button>
      <button id={id} onClick={() => handleDeleteClick(id)}>Delete</button>
      <button onClick={() => showDetailView(id)}>View Details</button>
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