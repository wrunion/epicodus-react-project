import React, { Component } from 'react'
import Form from './Form';
import ItemDisplayMode from './ItemDisplayMode';
import ItemDetailView from './ItemDetailView';
import { connect } from 'react-redux';

class ItemControl extends Component {
  state = {
    itemSelected: null
  }

  displayForm = () => {
    const action = {
      type: 'TOGGLE_FORM',
      data: null
    }
    this.props.dispatch(action);
  }

  handleFormSubmit = (item) => {
    const action = {
      type: 'ADD_ITEM',
      data: item
    }
    this.props.dispatch(action);
    this.setState({formShowing: false});
  }

  handleCancelClick = () => {
    this.setState({formShowing: false});
    const action = {
      type: 'CANCEL_CLICK',
      data: null
    }
    this.props.dispatch(action);
  }
  
  findItemById = (id) => {
    const item = this.state.itemList.filter(item => item.id === id)[0];
    return item;
  }

  /* THIS DOESN'T WORK YET */
  deleteItem = (id) => {
    const action = {
      type: 'DELETE_ITEM',
      data: id
    }
    this.props.dispatch(action);
    // this.setState({itemList: this.state.itemList.filter(item => item.id !== id)});
  }

  showDetailView = (id) => {
    const item = this.findItemById(id);
    this.setState({itemSelected: item.id});
    return item;
  }
   
  purchaseItem = (id) => {
    this.setState({itemList: this.state.itemList.map(item => {
      if (item.id === id) {
        return {
          itemName: item.itemName,
          description: item.description,
          available: item.available >= 1 ?  item.available - 1 : 0,
          price: item.price, 
          id: item.id
        } 
      } else {
        return item;
      }
    })});
  }

  handleClickAll = (args) => {
    const { action, id } = args;
    if (action === "details") {
      this.showDetailView(id)
    } else if (action === "purchase") {
      this.purchaseItem(id);
    } else if (action === "delete") {
      this.deleteItem(id);
    } else {
      console.log('There was an error with handleClickAll');
    }
  }

  /* RENDER METHODS */

  /* To display the form */ 
  renderForm() {
    return (
      <Form handleSubmitCallback={this.handleFormSubmit} 
      handleCancelClick={this.handleCancelClick} />
    );
  }
  
  /* To show a single item detail */ 
  renderItemDetailView() {
    const id = this.state.itemSelected;
    const item = this.findItemById(id);
    return (
      <div className="ItemDetailView">
        <ItemDetailView 
          item={item}
          handleCancelClick={this.handleCancelClick}/>
      </div>
    );
  }

  /* To show the item list */
  renderItemList() {
    return (
    this.props.itemList.map(item =>
      <ItemDisplayMode 
        key={item.id}
        id={item.id}  
        name={item.itemName}
        description={item.description}
        available={item.available}
        price={item.price}
        handleClickCallback={this.handleClickAll}
        />)
    );
  }

  renderButton() {
    return (
      <div id="AddItem">
        <button className="ui button small basic green fluid" onClick={this.displayForm}>Add Item</button>
      </div>
    );
  }

  /* Actual render method */
  render() {
    console.log(this.props);
    console.log(this.props.itemList);
    const { itemSelected } = this.state;
    const { formShowing } = this.props.handleClick;
    const { itemList } = this.props;
    /* If an item has been selected for detail view */
    if (itemSelected !== null) {
      return (
        this.renderItemDetailView()
      );
    /* If user has clicked "Add Item" */
    } else if (formShowing) {
      return (
        <React.Fragment>
          {this.renderForm()}
          {this.renderItemList()}
        </React.Fragment>
      );
    /* If the first two are false, but there are items to show */  
    } else if ((formShowing === false) && (itemList.length > 0)) {
      return (
        <div className="ItemView">
          {this.renderButton()}  
          {this.renderItemList()}
        </div>
      );
    /* If itemList is empty */  
    } else {
      return (
        <div className="DefaultView">
          <h2>There are no items to display.</h2>
          {this.renderButton()}
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

export default connect(mapStateToProps)(ItemControl);