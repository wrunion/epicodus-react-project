import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const ItemDetail = (props) => {
  /* If no item is selected */
  if (props.item === null) {
    return (
      <div className="NoItemDisplay ui segment">
        <p>Choose an item for a detailed view</p>
      </div>
    );
  } else {
    /* Grab item properties */
    const { itemName, description } = props.item;
    
    return (
      <div className="ItemDetail ui segment">
        <h1>{itemName}</h1>
        <p><em>{description}</em></p>
        &#x2713; Gluten Free <br/>
        &#x2713; Vegan <br />
        &#x2713; Organic <br />
        &#x2713; Fair Trade <br />
        <h5>Made in Oregon</h5>
        <button className="ui button mini grey basic" onClick={() => {props.handleClick()}}>Cancel</button>
      </div>
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