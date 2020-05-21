import React from 'react'
import { connect } from 'react-redux';
import { showForm, hideForm } from './../actions';
import Form from './Form';
import PropTypes from 'prop-types';

class FormControl extends React.Component {
  /* Callback to pass to Form component. Allows FormControl to handle interfacing with Redux, instead of wiring up the Form component to do that as well */
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

FormControl.propTypes = {
  showForm: PropTypes.func,
  formShowing: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    formShowing: state.toggleFormReducer.formShowing
  }
}

export default connect(mapStateToProps, { showForm, hideForm }) (FormControl);