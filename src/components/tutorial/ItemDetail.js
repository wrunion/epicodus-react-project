import React from 'react';
import { connect } from 'react-redux';
import { purchaseItem } from './../../actions';

const ItemDetail = ({selectedItem}) => {
  /* If no item is selected */
  if (!selectedItem) {
    return (
      <p>Choose an item for a detailed view</p>
    );
  } else {
    /* Grab item properties */
    const { itemName, description, price, available } = selectedItem;
    
    return (
      <React.Fragment>
        <h1>{itemName}</h1>
        <p><em>{description}</em></p>
        <p>Price: ${price} | Available: {available}</p>
        <button className="ui button mini green basic">Add To Cart</button>
        <button className="ui button mini grey basic">Cancel</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    selectedItem: state.selectedItem, 
    purchaseItem: state.purchaseItem, 
    items: state.items
  };
}

export default connect(mapStateToProps, {
  purchaseItem: purchaseItem
})(ItemDetail);