import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addItem } from './../actions';
import { v4 } from 'uuid';


class Form extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem({
      itemName: e.target.itemName.value,
      price: e.target.price.value,
      available: e.target.available.value,
      id: v4()
     });
  }

  render() {
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            id="itemName"
            placeholder="Item Name"
            defaultValue="shoes"
            required />
          <input type="number"
            id="price"
            placeholder="Item Price"
            defaultValue={20}
            required />
          <input type="number"
            id="available"
            placeholder="Available"
            defaultValue={10}
            required />
          <button type="submit">Add Item</button>  
          <button type="button" onClick={this.props.handleCancelClick}>Cancel</button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  handleCancelClick: PropTypes.func,
};

export default connect(null, { addItem } )(Form);