import React from 'react';
import PropTypes from 'prop-types';

const ItemDetail = (props) => {
  /* If no item is selected */
  if (props.item === null) {
    return (
      <p>Choose an item for a detailed view</p>
    );
  } else {
    /* Grab item properties */
    const { itemName, description } = props.item;
    
    return (
      <React.Fragment>
        <h1>{itemName}</h1>
        <p><em>{description}</em></p>
        &#x2713; Gluten Free <br/>
        &#x2713; Vegan <br />
        &#x2713; Organic <br />
        &#x2713; Fair Trade <br />
        <h5>Made in Oregon</h5>
        <button className="ui button mini grey basic" onClick={() => {props.handleClick()}}>Cancel</button>
      </React.Fragment>
    );
  }
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  itemName: PropTypes.string,
  description: PropTypes.string,
  handleClick: PropTypes.func
} 

export default ItemDetail;