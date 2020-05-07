import React, { Component } from 'react'
import Form from './Form';
import ItemDisplayMode from './ItemDisplayMode';
import ItemDetailView from './ItemDetailView';

class ItemControl extends Component {
  state = {
    itemList: [{
      itemName: "Green Matcha",
      description: "A healthy tea that gives you energy and focus",
      available: 100,
      price: 20, 
      id: 1
    },
    {
      itemName: "Lavender Blend",
      description: "A soothing blend to wash away worries",
      available: 100,
      price: 15,
      id: 2
    },
    {
      itemName: "Chamomile",
      description: "A relaxing tea to help you sleep", 
      available: 100,
      price: 10,
      id: 3
    }, 
    {
      itemName: "White Jasmine",
      description: "A sweet blend for focus and health",
      available: 100,
      price: 25,
      id: 4
    },
    {
      itemName: "Earl Grey",
      description: "Classic bergamont flavoring",
      available: 100,
      price: 10,
      id: 5
    }
  ],
    formShowing: false,
    detailView: true,
    selectedItem: null
  }

  displayForm = () => {
    this.setState({formShowing: true});
  }

  handleFormSubmit = (item) => {
    console.log(item);
    this.setState({itemList: [item, ...this.state.itemList], formShowing: false});
  }
  
  deleteItem = (id) => {
    this.setState({itemList: this.state.itemList.filter(item => item.id !== id)});
  }

  findItemById = (id) => {
    const item = this.state.itemList.filter(item => item.id === id)[0].id;
    return item;
  }

  showDetailView = (id) => {
    const item = this.findItemById(id);
    this.setState({selectedItem: item, detailView: true});
    return item;
  }

  handleCancelClick = () => {
    this.setState({detailView: false});
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

  render() {
    if (this.state.formShowing) {
      return (
        <React.Fragment>
          <Form handleSubmitCallback={this.handleFormSubmit} />
          {this.state.itemList.map(item =>
          <ItemDisplayMode 
            key={item.id}
            id={item.id}  
            name={item.itemName}
            description={item.description}
            available={item.available}
            price={item.price}
            detailView={this.state.detailView}
            selectedItem={this.state.selectedItem}
            deleteCallback={this.deleteItem}
            purchaseCallback={this.purchaseItem}
            handleDetailCallback={this.showDetailView}
            />)}
        </React.Fragment>
      );
    } else if ((this.state.formShowing === false) && (this.state.itemList.length > 0)) {
      return (
        <div className="ItemView">
          {this.state.showDetails === true ? 

          this.state.itemList.map(item =>
            item.id === this.state.itemSelected ?
            <ItemDetailView item = {item}
              onCancelClick={this.handleCancelClick} />
            :
            <ItemDisplayMode 
              key={item.id}
              id={item.id}  
              name={item.itemName}
              description={item.description}
              available={item.available}
              price={item.price}
              deleteCallback={this.deleteItem}
              purchaseCallback={this.purchaseItem}
              handleAddItemClick={this.displayForm}
              handleDetailClick={this.showDetailView}
              />)
          : null} 
        <button onClick={this.displayForm}>Add Item</button>
        {this.state.itemList.map(item =>
          <ItemDisplayMode 
            key={item.id}
            id={item.id}  
            name={item.itemName}
            description={item.description}
            available={item.available}
            price={item.price}
            deleteCallback={this.deleteItem}
            purchaseCallback={this.purchaseItem}
            handleAddItemClick={this.displayForm}
            handleDetailClick={this.showDetailView}
            />)}
        </div>
      );
    } else {
      return (
        <div className="DefaultView">
          <h2>There are no items to display.</h2>
          <button onClick={this.displayForm}>Add Item</button>
        </div>
      );
    }
  }
}

export default ItemControl;