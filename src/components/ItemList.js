import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemList extends Component {
  renderList() {
    return this.props.items.map((item) => {
      return (
        <div className="Item ui card grid-item" key={item.id}>
          <div className="content">
            <h5 key={item.id}>{item.itemName}</h5>
          </div>
          <div className="right floated content">
            <button className="ui button basic">
              Details
            </button>
          </div>
        </div>
      );
  });
}

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(ItemList);
