import itemListReducer from '../../reducers/itemListReducer';

describe('itemListReducer', () => {

  let action;
  const ticketData = {
    itemName: "Green Matcha",
    description: "A healthy tea that gives you energy and focus",
    available: 100,
    price: 20, 
    id: 1
  };

  test('Should sucessfully add new item data to masterItemList', () => {
    const { itemName, description, available, price, id } = ticketData;
    action = {
      type: 'ADD-TICKET',
      itemName: itemName,
      description: description,
      available: available,
      price: price,
      id: id
    };

    expect(itemListReducer({}, action)).toEqual({
      [id]: {
      itemName: itemName,
      description: description,
      available: available,
      price: price,
      id: id
      }
    });
  });


  test('Should return default state if no action is passed in', () => {
    expect(itemListReducer({}, {type: null})).toEqual({});
  });
});

// itemName: "Green Matcha",
// description: "A healthy tea that gives you energy and focus",
// available: 100,
// price: 20, 
// id: 1
// },
// {
// itemName: "Lavender Blend",
// description: "A soothing blend to wash away worries",
// available: 100,
// price: 15,
// id: 2
// },