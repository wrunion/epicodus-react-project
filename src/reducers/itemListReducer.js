const initState = [
  {
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
] 

export default (state = initState, action) => {
  const { type, data } = action;

  switch(type) {
    case "ADD_ITEM":
      return [...state, data];
    case 'EDIT_ITEM':
      return state.map(e => e.id === data.id ? data : e);
    case 'DELETE_ITEM':
      return state.filter(e => e.id !== data.id);  
    default:
      return state;
  }
}