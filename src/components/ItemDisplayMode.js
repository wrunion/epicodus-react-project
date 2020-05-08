import React from 'react';
import PropTypes from 'prop-types';

const ItemDisplayMode = (props) => {

  function handleClick(args) {
    props.handleClickCallback(args);
  }

  const { name, description, available, price, id } = props;

  return (
    <div className="ItemDisplayMode" key={id}>
    <h3>{name}</h3>
      <p><em>{description}</em></p>
      <p>Available: {available} | Price: {price}</p>
      <button id={id} onClick={() => handleClick({id: id, action: "purchase"})}>Purchase</button>
      <button id={id} onClick={() => handleClick({id: id, action: "delete"})}>Delete</button>
      <button onClick={() => handleClick({id: id, action: "details"})}>View Details</button>
    </div>
  );
}

ItemDisplayMode.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  available: PropTypes.number,
  price: PropTypes.number,
  handleClickCallback: PropTypes.func,
} 

export default ItemDisplayMode;