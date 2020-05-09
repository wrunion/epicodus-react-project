import React from 'react';
import { connect } from 'react-redux';

const ItemDetail = (props) => {
  if (props.item === null) {
    return (
      <h5>Choose an item for a detailed view</h5>
    );
  } else {
    const { itemName } = props.item;
    return (
      <React.Fragment>
        <h1>{itemName}</h1>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { item: state.selectedItem };
}

export default connect(mapStateToProps)(ItemDetail);