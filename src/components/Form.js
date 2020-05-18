import React from 'react'
import {v4 } from 'uuid';
import { connect } from 'react-redux';
import { createItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class Form extends React.Component {
  // state={
  //   itemName: '',
  //   description: '',
  //   available: '',
  //   price: '', 
  //   id: v4()
  // }

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.id]: e.target.value
  //   })
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createItem({
      itemName: e.target.itemName.value,
      description: e.target.description.value,
      available: e.target.available.value,
      price: e.target.price.value, 
      id: v4()
    });
  }

  render() {
    return (      
    <div className="Form">
      <form id={v4()} onSubmit={this.handleSubmit}>
        <div className="inputField">
          <label>Item Name: <input type="text" name="itemName" id="itemName" defaultValue="Green Tea" onChange={this.handleChange} /></label>
        </div>
        <div className="inputField">
          <label>Description: <input type="text" name="description" id="description" defaultValue="Healthy and Delicious" onChange={this.handleChange}/></label>
        </div>
        <div className="inputField">
          <label>Price: <input type="number" name="price" id="price" defaultValue="23" min={0} onChange={this.handleChange} /></label>
        </div>
        <div className="inputField">
          <label>Available: <input type="number" name="available" id="available" min={0} defaultValue="100" onChange={this.handleChange} /></label>
        </div>
        <button type="submit" className="ui button mini green basic">Add Item</button>
        {/* //Find a "Redux way" to handle the cancel button */}
        <button type="button" onClick={this.props.handleCancelClick}className="ui button mini grey basic">Cancel</button>
      </form>
    </div>
    )
  }
}

/* COME BACK TO THESE */
Form.propTypes = {
  handleSubmit: PropTypes.func,
  handleCancelClick: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
  return {
    createItem: item => {
      dispatch(createItem(item))
    }
  }
}

export default connect(null, mapDispatchToProps)(Form);