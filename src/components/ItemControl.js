import React, { Component } from 'react'
import Form from './Form';

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

    if (this.state.formShowing) {
      return (
        <Form handleSubmitCallback={this.handleFormSubmit} />
      );
    } else if ((this.state.formShowing === false) && (this.state.itemList.length > 0)) {
      return (
        <h3>List of items goes here</h3>
      );
    } else {
      return (
        // <h3>Default view goes here.</h3>
        <div className="DefaultView">
          <h2>There are no items to display.</h2>
          <button onClick={this.displayForm}>Add Item</button>
        </div>
      );
    }

    //  return (
    //   <div className="ItemControl">
        // eslint-disable-next-line no-lone-blocks
        /* {(this.state.formShowing === false) && (this.state.itemList.length === 0) ? 
          <DefaultView clickCallback={this.displayForm}/> 
          : <h1>Test display</h1>
        } */}

        // eslint-disable-next-line no-lone-blocks
        /* {this.state.formShowing === true ?
          <Form handleSubmitCallback={this.handleFormSubmit} />
          :  <React.Fragment>
              <button onClick={this.displayForm}>Add Item</button>
            </React.Fragment>}

            
      </div>
    ); */}

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


export default ItemControl;