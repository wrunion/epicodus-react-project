import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from './../actions';

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <Form onSubmit={this.handleSubmit}>
          <input type="text"
            id="itemName"
            placeholder="Item Name" />
          <input type="number"
            id="price"
            placeholder="Item Price" />
          <button type="submit">Add Item</button>  
        </Form>
      </div>
    )
  }
}

export default Form;