import React from 'react'
import { connect } from 'react-redux';import PropTypes from 'prop-types';
import { showForm, hideForm, addItem } from './../actions';
import Form from './Form';

class FormControl extends React.Component {

  handleCancelClick = () => {
    this.props.hideForm(); 
  }
  
  handleSubmit = (item) => {
    this.props.addItem(item);
  }

  render() {
    return ( 
      <div className="FormControl">
        {this.props.formShowing
        ? <Form 
            handleCancelClick={this.handleCancelClick}
            handleSubmitCallback={this.handleSubmit}/> 
        : <button 
            onClick={() => this.props.showForm()}
            className="ui button small basic green fluid">
            Add Item</button>}
      </div>
    );
  }
}

FormControl.propTypes = {
  showForm: PropTypes.func,
  hideForm: PropTypes.func,
  addItem: PropTypes.func,
  formShowing: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    formShowing: state.formReducer.formShowing
  }
}

export default connect(mapStateToProps, { showForm, hideForm, addItem }) (FormControl);