import React, { Component } from 'react'
import { connect } from 'react-redux';
import Item from './Item';
import initialItemList from '../itemlist.json';
import { addItem, deleteItem, selectItem, editItem } from './../actions';

class ItemControl extends Component {

  /* Load the initial data on startup */
  componentDidMount = () => {
    initialItemList.itemList.forEach((item) => {
      this.props.addItem(item)
    });
  }

  /* Callback functions for the Item components */
  purchaseClick = (item) => {
    const updatedItem = { ...item};
    updatedItem.available > 1 ? 
      updatedItem.available = updatedItem.available -1
      : updatedItem.available = 0;   
    this.props.editItem(updatedItem);
  }

  deleteClick = (item) => {
    this.props.deleteItem(item);
    this.props.selectItem(null);
  }

  detailsClick = (item) => {
    this.props.selectItem(item);
  }

  render() {

  const { itemList } = this.props;
  
    if (itemList.length > 0) {
      return (
        this.props.itemList.map(item =>
          <Item item={item}
            key={item.id}
            purchaseClickCallback={this.purchaseClick}
            deleteClickCallback={this.deleteClick}
            detailsClickCallback={this.detailsClick}
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
    itemList: state.itemList
  }
}

export default connect(mapStateToProps, { addItem, deleteItem, selectItem, editItem })(ItemControl);