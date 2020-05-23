const initState = [
  {
    itemName: "Red Shoes",
    price: 10, 
    available: 10,
    id: 1
  },
  {
    itemName: "Blue Shoes",
    price: 10, 
    available: 10,
    id: 2,
  },
  {
    itemName: "Green Shoes",
    price: 10, 
    available: 10,
    id: 3
  }  
]


export default (state = initState, action) => {
  const { type, data } = action;

  switch(type) {
    case "ADD_ITEM":
      return [...state, data];
    case 'UPDATE_ITEM':
      return state.map(e => e.id === data.id ? data : e);
    case 'DELETE_ITEM':
      return state.filter(e => e.id !== data.id); 
    case 'PURCHASE_ITEM':
      return (state.map(e => e.id === data.id ? data.available -- : data));   
    default:
      return state;
  }
}