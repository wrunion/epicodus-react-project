import React, { Component } from 'react'
import Form from './Form';
import Item from './Item';
import ItemDetailView from './ItemDetailView';
import { connect } from 'react-redux';
import initialItemList from '../itemlist.json';
import { hideForm, showForm, addItem, editItem, deleteItem, selectItemToEdit, selectItem } from './../actions';

/* formReducer actions: hideForm, showForm */

/* itemListReducer actions:
addItem, editItem, deleteItem */

/* handleClick reducer actions: 
selectItemToEdit, selectItem */

class ItemControl extends Component {

  componentDidMount = () => {
    initialItemList.itemList.forEach((item) => {
      this.props.addItem(item)
    });
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

  // handleCancelClick = () => {
  //   this.setState({formShowing: false});
  //   const action = {
  //     type: 'CANCEL_CLICK',
  //     data: null
  //   }
  //   this.props.dispatch(action);
  // }
  
  // findItemById = (id) => {
  //   const item = this.state.itemList.filter(item => item.id === id)[0];
  //   return item;
  // }

  // /* THIS DOESN'T WORK YET */
  // deleteItem = (id) => {
  //   const action = {
  //     type: 'DELETE_ITEM',
  //     data: id
  //   }
  //   this.props.dispatch(action);
  //   // this.setState({itemList: this.state.itemList.filter(item => item.id !== id)});
  // }

  // showDetailView = (id) => {
  //   const item = this.findItemById(id);
  //   this.setState({itemSelected: item.id});
  //   return item;
  // }
   
  // purchaseItem = (id) => {
  //   this.setState({itemList: this.state.itemList.map(item => {
  //     if (item.id === id) {
  //       return {
  //         itemName: item.itemName,
  //         description: item.description,
  //         available: item.available >= 1 ?  item.available - 1 : 0,
  //         price: item.price, 
  //         id: item.id
  //       } 
  //     } else {
  //       return item;
  //     }
  //   })});
  // }

  // handleClickAll = (args) => {
  //   const { action, id } = args;
  //   if (action === "details") {
  //     this.showDetailView(id)
  //   } else if (action === "purchase") {
  //     this.purchaseItem(id);
  //   } else if (action === "delete") {
  //     this.deleteItem(id);
  //   } else {
  //     console.log('There was an error with handleClickAll');
  //   }
  // }

  /* RENDER METHODS */

  /* To display the form */ 
  renderForm() {
    return (
      <Form handleSubmitCallback={this.handleFormSubmit} 
      handleCancelClick={() => {
        const action = {
          type: 'TOGGLE_FORM',
          data: null
        }
        this.props.dispatch(action);
      }} />
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
      // <TutorialItemList />
    this.props.itemList.map(item =>
      <Item item={item}
        key={item.id}
        handleClickCallback={this.handleClickAll}
        />)
    );
  }
  /* To show the add item button */

  renderButton() {
    return (
      <div id="AddItem">
        <button className="ui button small basic green fluid" onClick={this.displayForm}>Add Item</button>
      </div>
    );
  }
  
  /* Actual render method */
  render() {

    const items = this.props.itemList;
    const { itemSelected, itemList } = this.props;
    const { formShowing } = this.props.handleClick;
    // const { itemList } = this.props;

    // toggleForm, enterEditMode, selectItem, cancelClick, deleteItem, addItem, editItem

    /* If an item has been selected for detail view */
    if (items && itemSelected === null) {
      return (
        this.renderItemDetailView()
      );
    } else if (itemList.length > 0) {
      return (
        <div className="ItemView">
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
    handleClick: state.handleClick,
    formShowing: state.formShowing
  }
}

export default connect(mapStateToProps, { hideForm, showForm, addItem, editItem, deleteItem, selectItemToEdit, selectItem })(ItemControl);