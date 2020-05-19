import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Form';
// import { addItem, toggleForm } from './../actions';

class AddItem extends Component {
  toggleForm = () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    this.props.dispatch(action);
  }
  
  render() {
    const { formShowing } = this.props.handleClick;

    if (formShowing === false) {
      return (
        <div id="AddItem">
          <button className="ui button small basic green fluid" onClick={this.toggleForm}>Add Item</button>
        </div>
      );
    } else {
    return(
      <div className="AddItem">
        <Form />
      </div>
    );
    }
  }
}

const mapStateToProps = state => {
  return {
    itemList: state.itemList,
    handleClick: state.handleClick
  }
}

export default connect(mapStateToProps)(AddItem);