import React, { Component } from 'react';
import Form from './Form';

class AddItem extends Component {
  state ={
    formShowing: false
  }

  // renderButton() {
  //   return (
  //     <div id="AddItem">
  //       <button className="ui button small basic green fluid" onClick={this.displayForm}>Add Item</button>
  //     </div>
  //   );
  // }

  toggleForm = () => {
    this.setState({formShowing: !this.state.formShowing});
  }

  render() {
    if (this.state.formShowing === false) {
      return (
        <div id="AddItem">
          <button className="ui button small basic green fluid" onClick={this.toggleForm}>Add Item</button>
        </div>
      );
    } else {
    return(
      <div className="AddItem">
        <Form />
      </div>
    );
    }
  }
}

export default AddItem;