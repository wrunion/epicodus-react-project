import React from 'react'

function Item(props) {
  const { itemName, description, available, price, handleDetailClick, key } = props;

  return (
    <div className="Item">
        <h3>{itemName}</h3>
        <p><em>{description}</em></p>
        <p>Available: {available} | Price: {price}</p>
        <button onClick={handleDetailClick} id={key}>Details</button>
    </div>
  );
}

export default Item;