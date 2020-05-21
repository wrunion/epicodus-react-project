import React from 'react'
import { connect } from 'react-redux';
import { deleteItem } from './../actions';

function ItemList(props) {
  if (props.items == false) {
    return (
      <h3>There are no items to display</h3>
    );
  }
  return (
    <div className="ItemList flex-container">
      <h3>The Inventory Is:</h3>
      {/* MAYBE HAVE THIS PASS DOWN THIS ITEM AS A WHOLE, INSTEAD OF DETAILS. THEN DECONSTRUCT IT FROM THE OTHER END?  */}
      {props.items.map(item => 
        <div className="item" key={item.id}>
          {item.itemName}:  ${item.price}
          <button onClick={() => props.deleteItem(item)}>Delete</button>
          {/* <button>Show Details</button> */}
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => { 
  return {
    items: state.itemReducer
  }
}

export default connect(mapStateToProps, { deleteItem })(ItemList);


// class ItemList extends Component {

//   displayList = () => {
//     if (this.props.items) {
//       return (
//         this.props.items.map(item => <div className="item">{item.name}: {item.price}</div>)
//       );
//     }
//   }
  
//   render() {
//   //   if (this.props.items) {
//   //     return (
//   //       {this.props.items.map{}}
//   //     );
//   //   }
//   // }
//     return (
//       <div className="ItemList">
//         Item List Placeholder
//       </div>  
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     items: state.itemReducer,
//     selectedItem: state.selectedItemReducer
//   }
// }

// /* Do I need to include PropTypes here? */

// export default connect(mapStateToProps, { selectItem }) (ItemList);