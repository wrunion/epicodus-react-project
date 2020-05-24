import React from 'react';
import PropTypes from 'prop-types';

const Item = (props) => {

  const { itemName, description, available, price, id } = props.item;

  return (
    <div className="Item ui segment" key={id}>
    <h3>{itemName}</h3>
      <p><em>{description}</em></p>
      <p>Available: {available} | Price: ${price}</p>
      <button id={id} onClick={() => props.purchaseClickCallback(props.item)} className="ui mini green button basic">Purchase</button>
      <button id={id} onClick={() => props.deleteClickCallback(props.item)} className="ui mini red button basic">Delete</button>
      <button onClick={() => props.detailsClickCallback(props.item)} className="ui mini grey button basic">View Details</button>
    </div>
  );
}

Item.propTypes = {
  itemName: PropTypes.string,
  description: PropTypes.string,
  available: PropTypes.number,
  price: PropTypes.number,
  id: PropTypes.string,
  purchaseClickCallback: PropTypes.func,
  deleteClickCallback: PropTypes.func,
  detailsClickCallback: PropTypes.func
} 

export default Item;