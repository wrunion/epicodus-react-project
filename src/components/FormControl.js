import React from 'react'
import { connect } from 'react-redux';
import { showForm, hideForm } from './../actions';
import Form from './Form';
// import PropTypes from 'prop-types';

class FormControl extends React.Component {

  // handleClick = () => {
  //   this.props.showForm();
  // }

  handleCancelClick = () => {
    this.props.hideForm();
  }

  render() {
    return ( 
      <div className="FormControl">
        {this.props.formShowing
        ? <Form handleCancelClick={this.handleCancelClick}/> 
        : <button 
            onClick={() => this.props.showForm()}>Add Item</button>}
      </div>
    );
  }
}

// Add PropTypes here

const mapStateToProps = state => {
  return {
    formShowing: state.toggleFormReducer.formShowing
  }
}

export default connect(mapStateToProps, { showForm, hideForm }) (FormControl);