import React, { Component } from 'react'
import Form from './Form';
// import AddItemForm from './AddItemForm';

class ItemControl extends Component {
  state = {
    itemList: [],
    formShowing: false
  }

  displayForm = () => {
    this.setState({formShowing: true});
  }

  handleFormSubmit = (item) => {
    console.log(item);
    this.setState({itemList: [...this.state.itemList, item], formShowing: false});
  }
  
  render() {
    // let currentDisplay;
    //  const formShowing = `<Form handleSubmitCallback={this.handleFormSubmit} />`

     return (
      <div className="ItemControl">
        {this.state.formShowing === true ?
          <Form handleSubmitCallback={this.handleFormSubmit} />
          :  <React.Fragment>
              <h2>There are no items to display.</h2>
              <button onClick={this.displayForm}>Add Item</button>
            </React.Fragment>}
      </div>
    );

    // if (this.state.itemList.length > 0) {
    //   if (this.state.formShowing === true) { 
    //     return (
    //       <React.Fragment>
    //         <Form handleSubmitCallback={this.handleFormSubmit} />
    //       </React.Fragment> 
    //     );
    //   }


    // } else {
    //   return (
    //     <div className="DefaultView">
    //       <h2>There are no items to display.</h2>
    //       <button onClick={this.displayForm}>Add Item</button>
    //     </div>
    //   )
    // }
  }
}

export default ItemControl;