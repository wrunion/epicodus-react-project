import React from 'react';
import PropTypes from 'prop-types';

const ItemDetailView = (props) => {
  const { item } = props;
  
  return (
    <div className="ItemDetailView" key={item.id}>
      <h3>{item.itemName}</h3>
      <p><em>{item.description}</em></p>
      <p>Available: {item.available} | Price: {item.price}</p>
      <p><em>Made in Oregon</em></p>
      <button onClick={props.handleCancelClick}>Return to Tea List</button>
    </div>
  );
}

ItemDetailView.propTypes = {
  item: PropTypes.object,
  handleCancelClick: PropTypes.func
} 

export default ItemDetailView;