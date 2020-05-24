import React from 'react';
// import { connect } from 'react-redux';

const ItemDetail = (props) => {
  /* If no item is selected */
  if (props.item === null) {
    return (
      <p>Choose an item for a detailed view</p>
    );
  } else {
    /* Grab item properties */
    const { itemName, description, price, available } = props.item;
    
    return (
      <React.Fragment>
        <h1>{itemName}</h1>
        <p><em>{description}</em></p>
        <p>Price: ${price} | Available: {available}</p>
        {/* <button className="ui button mini green basic">Add To Cart</button> */}
        <button className="ui button mini grey basic" onClick={() => {props.handleClick()}}>Cancel</button>
      </React.Fragment>
    );
  }
}

export default ItemDetail;

// const mapStateToProps = (state) => {
//   return { selectedItem: state.handleClick.selectedItem };
// }

// export default connect(mapStateToProps)(ItemDetail);