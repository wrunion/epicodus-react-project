export default (state = {}, action) => {
  /* Destructure properties from action object */
  const { name, description, available, price, id} = action;
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        itemList: [
          {
            name: name,
            description: description,
            available: available,
            price: price,
            id: id
          }
        ]
      }
      
      
      
      // Object.assign({}, state, {
      //   itemList:
      //     {
      //     name: name,
      //     description: description,
      //     available: available,
      //     price: price,
      //     id: id
      //   }
      // });
    default: 
      return state;  
    }
  };