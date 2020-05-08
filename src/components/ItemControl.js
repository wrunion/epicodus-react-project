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
    itemSelected: null
  }

  displayForm = () => {
    this.setState({formShowing: true});
  }

  handleFormSubmit = (item) => {
    this.setState({itemList: [item, ...this.state.itemList], formShowing: false});
  }

  handleCancelClick = () => {
    this.setState({formShowing: false, itemSelected: null});
  }
  
  findItemById = (id) => {
    const item = this.state.itemList.filter(item => item.id === id)[0];
    return item;
  }

  deleteItem = (id) => {
    this.setState({itemList: this.state.itemList.filter(item => item.id !== id)});
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

  renderItemDetailView() {
    const selectedItemId = this.state.itemSelected;
    const item = this.findItemById(selectedItemId);
    return (
      <div className="ItemDetailView">
        <ItemDetailView 
          item={item}
          handleCancelClick={this.handleCancelClick}/>
      </div>
    );
  }

  render() {
    if (this.state.itemSelected !== null) {
      const selectedItemId = this.state.itemSelected;
      const item = this.findItemById(selectedItemId);
      return (
        <div className="ItemDetailView">
          <ItemDetailView 
            item={item}
            handleCancelClick={this.handleCancelClick}/>
        </div>
      );
    } else if (this.state.formShowing) {
      return (
        <React.Fragment>
          <Form handleSubmitCallback={this.handleFormSubmit} 
          handleCancelClick={this.handleCancelClick} />

          {this.state.itemList.map(item =>
          <ItemDisplayMode 
            key={item.id}
            id={item.id}  
            name={item.itemName}
            description={item.description}
            available={item.available}
            price={item.price}
            // deleteCallback={this.deleteItem}
            // purchaseItem={this.purchaseItem}
            // handleDetailCallback={this.showDetailView}
            handleClickCallback={this.handleClickAll}
            />)}
        </React.Fragment>
      );
    } else if ((this.state.formShowing === false) && (this.state.itemList.length > 0)) {
      return (
        <div className="ItemView">
        <button onClick={this.displayForm}>Add Item</button>
        {this.state.itemList.map(item =>
          <ItemDisplayMode 
            key={item.id}
            id={item.id}  
            name={item.itemName}
            description={item.description}
            available={item.available}
            price={item.price}
            // deleteCallback={this.deleteItem}
            // purchaseCallback={this.purchaseItem}
            // handleDetailCallback={this.showDetailView}
            handleClickCallback={this.handleClickAll}
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