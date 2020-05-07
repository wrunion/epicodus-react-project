import React, { Component } from 'react'
import Form from './Form';
import ItemDisplayMode from './ItemDisplayMode';

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
    formShowing: false
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
    const item = this.state.itemList.filter(item => item.id ===id)[0];
    return item;
  }

  showDetailView = (id) => {
    const item = this.findItemById(id);
    console.log(item);
    return (  
    <div className="ShowDetails">
      <h3>{item.itemName}</h3>
      <p><em>{item.description}</em></p>
      <p>Available: {item.available} | Price: {item.price}</p>
    </div>);
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
            deleteCallback={this.deleteItem}
            purchaseCallback={this.purchaseItem}
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