import React from 'react';
import PropTypes from 'prop-types';

const ItemDisplayMode = (props) => {

  function handleClick(args) {
    props.handleClickCallback(args);
  }

  const { name, description, available, price, id } = props;

  return (
    <div className="ItemDisplayMode" key={id}>
    <hr />
    <h3>{name}</h3>
      <button onClick={() => handleClick({id: id, action: "details"})} className="ui mini grey button basic">View Details</button>
    </div>
  );
}

ItemDisplayMode.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  available: PropTypes.number,
  price: PropTypes.number,
  handleClickCallback: PropTypes.func,
} 

export default ItemDisplayMode;