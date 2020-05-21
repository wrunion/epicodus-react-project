import React from 'react'
import { connect } from 'react-redux';

// import { selectItem } from './../actions';

// import itemReducer from '../reducers/itemReducer';
// import selectedItemReducer from '../reducers/selectedItemReducer';

function ItemList(props) {
  if (!props.items) {
    return (
      <h3>There are no items to display</h3>
    );
  }
  return (
    <div className="ItemList flex-container">
      <h3>The Inventory Is:</h3>
      {props.items.map(item => 
        <div className="item">
          {item.itemName}:  ${item.price}
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

export default connect(mapStateToProps)(ItemList);


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