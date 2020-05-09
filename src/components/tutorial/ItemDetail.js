import React from 'react';
import { connect } from 'react-redux';

const ItemDetail = (props) => {
  if (props.item === null) {
    return (
      <h5>Choose an item for a detailed view</h5>
    );
  } else {
    const { itemName, description, price, available } = props.item;
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
  return { item: state.selectedItem };
}

export default connect(mapStateToProps)(ItemDetail);