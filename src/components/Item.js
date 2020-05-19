import React from 'react';
import PropTypes from 'prop-types';

const Item = (props) => {
  function handleClick(args) {
    props.handleClickCallback(args);
  }

  const { itemName, description, available, price, id } = props.item;

  return (
    <div className="Item" key={id}>
    <hr />
    <h3>{itemName}</h3>
      <p><em>{description}</em></p>
      <p>Available: {available} | Price: {price}</p>
      <button id={id} onClick={() => handleClick({id: id, action: "purchase"})} className="ui mini green button basic">Purchase</button>
      <button id={id} onClick={() => handleClick({id: id, action: "delete"})} className="ui mini red button basic">Delete</button>
      <button onClick={() => handleClick({id: id, action: "details"})} className="ui mini grey button basic">View Details</button>
    </div>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  available: PropTypes.number,
  price: PropTypes.number,
  handleClickCallback: PropTypes.func,
} 

export default Item;