import React, { Component } from 'react'
import ItemDetailView from './ItemDetailView';
import Item from './Item';
import { connect } from 'react-redux';
import initialItemList from '../itemlist.json';
import { addItem, editItem, deleteItem, selectItemToEdit, selectItem } from './../actions';

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
  // renderForm() {
  //   return (
  //     <Form handleSubmitCallback={this.handleFormSubmit} 
  //     handleCancelClick={() => {
  //       const action = {
  //         type: 'TOGGLE_FORM',
  //         data: null
  //       }
  //       this.props.dispatch(action);
  //     }} />
  //   );
  // }
  
  handleClickCallback = (item) => {
    console.log(`item click callback`);
    console.log(item);
    this.props.selectItem(item);
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
        handleClickCallback={this.handleClickCallback}
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
  const { itemList } = this.props;
   if (itemList.length > 0) {
      return (
        this.props.itemList.map(item =>
          <Item item={item}
            key={item.id}
            handleClickCallback={this.handleClickCallback}
            />)
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
    selectedItem: state.handleClick.selectedItem,
    itemToEdit: state.handleClick.itemToEdit,
    formShowing: state.formReducer.formShowing
  }
}

export default connect(mapStateToProps, { addItem, editItem, deleteItem, selectItemToEdit, selectItem })(ItemControl);