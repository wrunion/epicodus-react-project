import React from 'react'
import { connect } from 'react-redux';
import { showForm } from './../actions';
import Form from './Form';
// import PropTypes from 'prop-types';

class FormControl extends React.Component {

  handleClick = () => {
    this.props.showForm();
  }

  render() {
    return ( 
      <div className="FormControl">
        {this.props.formShowing
        ? <Form /> 
        : <button onClick={this.handleClick}>Add Item</button>}
      </div>
    );
  }
}

// Add PropTypes here

const mapStateToProps = state => {
  return {
    formShowing: state.formShowing
  }
}

export default connect(mapStateToProps, { showForm }) (FormControl);