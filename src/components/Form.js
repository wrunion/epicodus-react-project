import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from './../actions';

class Form extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem({
      itemName: e.target.itemName.value,
      price: e.target.price.value
     });
     /* THIS CONSOLE LOG WORKS */
     console.log(e.target.itemName.value,
      e.target.price.value)
  }

  render() {
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            id="itemName"
            placeholder="Item Name" />
          <input type="number"
            id="price"
            placeholder="Item Price" />
          <button type="submit">Add Item</button>  
        </form>
      </div>
    )
  }
}

export default connect(null, { addItem } )(Form);