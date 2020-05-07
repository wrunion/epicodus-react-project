import React from 'react';

const ItemDetailView = (props) => {
  return (
    <div className="ItemDisplayMode" key={props.id}>
      <h3>{props.name}</h3>
      <p><em>{props.description}</em></p>
      <p>Available: {props.available} | Price: {props.price}</p>
    </div>
  );
}

export default ItemDetailView;