import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addItem } from './../actions';

class UpdateItem extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem({
      itemName: e.target.itemName.value,
      price: e.target.price.value,
      id: this.props.id
     });
  }

  render() {
    const { item } = this.props;

    return (
      <div className="UpdateItem">
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            id="itemName"
            placeholder="Item Name"
            defaultValue={item.itemName}
            required />
          <input type="number"
            id="price"
            placeholder="Item Price"
            defaultValue={item.price}
            required />
          <button type="submit">Update Item</button>  
          <button type="button" onClick={this.props.handleCancelClick}>Cancel</button>
        </form>
      </div>
    );
  }
}

UpdateItem.propTypes = {
  addItem: PropTypes.func,
};

export default connect(null, { addItem } )(UpdateItem);