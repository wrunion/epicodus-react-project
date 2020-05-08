import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectItem } from '../actions';

class ItemList extends Component {
  /* Return the styled list */
  renderList() {
    return this.props.items.map(item => {
      return (
        <div className="Item ui card grid-item" key={item.id}>
          <div className="content">
            <h5 key={item.id}>{item.itemName}</h5>
          </div>
          <div className="right floated content">
            <button 
              className="ui button basic"
              onClick={() => this.props.selectItem(item)}>
              Details
            </button>
          </div>
        </div>
      );
  });
}
  /* MAIN RENDER METHOD */  
  render() {
    console.log(this.props);
    return (
      <div>
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    items: state.items
  }
}

export default connect(mapStateToProps, {
  selectItem: selectItem
})(ItemList);