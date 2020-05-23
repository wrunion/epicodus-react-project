import React, { Component } from 'react'
// import ItemDetailView from './ItemDetailView';
import Item from './Item';
import OldItemDisplayMode from './OldItemDisplayMode';
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

  handleClickCallback = (item) => {
    this.props.selectItem(item);
  }

  /* To show a single item detail */ 
  // renderItemDetailView() {
  //   const id = this.state.itemSelected;
  //   const item = this.findItemById(id);
  //   return (
  //     <div className="ItemDetailView">
  //       <ItemDetailView 
  //         item={item}
  //         handleCancelClick={this.handleCancelClick}/>
  //     </div>
  //   );
  // }
  

  render() {

  const { itemList } = this.props;
  
   if (itemList.length > 0) {
      return (
        this.props.itemList.map(item =>
          <OldItemDisplayMode item={item}
            key={item.id}
            handleClickCallback={this.handleClickCallback}
            />)
        );
    /* If itemList is empty */  
    } else {
      return (
        <div className="DefaultView">
          <h2>There are no items to display.</h2>
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