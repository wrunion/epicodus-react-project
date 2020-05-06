import React from 'react'

function Item(props) {
  const { name, description, available, price, handleDetailClick, key } = props;

  return (
    <div className="Item">
        <h3>{name}</h3>
        <p><em>{description}</em></p>
        <p>Available: {available} | Price: {price}</p>
        <button onClick={handleDetailClick} id={key}>Details</button>
    </div>
  );
}

export default Item;