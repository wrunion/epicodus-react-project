import React, { Component } from 'react'
import Form from './Form';
// import AddItemForm from './AddItemForm';

class ItemControl extends Component {
  state = {
    itemList: []
  }

  handleFormSubmit = (item) => {
    console.log(item);
  }

  render() {
    return (
      <div className="ItemControl">
        {/* <Form handleSubmitCallback={this.handleFormSubmit} /> */}
        <Form />
        {/* <AddItemForm /> */}
      </div>
    )
  }
}

export default ItemControl;