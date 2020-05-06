import React, { Component } from 'react'
import Form from './Form';

class ItemControl extends Component {
  state = {
    itemList: []
  }

  render() {
    return (
      <div className="ItemControl">
        <Form handleSubmitCallback={this.handleFormSubmit} />
        
      </div>
    )
  }
}

export default ItemControl;