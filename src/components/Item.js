import React from 'react';
import PropTypes from 'prop-types';

const Item = (props) => {

  const { itemName, description, id } = props.item;

  return (
    <div className="Item ui card grid-item" key={id}>
      <div className="content">
        <h5 key={id}>{itemName}</h5>
        <p><em>{description}</em></p>
      </div>
      <div className="right floated content">
            <button 
              className="ui button basic"
              onClick={() => props.handleClickCallback(props.item)}>
              Details
            </button>
          </div>
      {/* <button onClick={() => handleClick({id: id, action: "details"})} className="ui mini grey button basic">View Details</button> */}
    </div>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  available: PropTypes.number,
  price: PropTypes.number,
  handleClickCallback: PropTypes.func,
} 

export default Item;