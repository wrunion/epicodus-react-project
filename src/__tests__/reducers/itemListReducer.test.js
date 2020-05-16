import itemListReducer from '../../reducers/itemListReducer';

describe('itemListReducer', () => {

  let action;
  const itemData = {
    name: "Green Matcha",
    description: "A healthy tea that gives you energy and focus",
    available: 100,
    price: 20, 
    id: 1
  };

  const currentState = {
    itemList: [
      {
      name: "Green Matcha",
      description: "A healthy tea that gives you energy and focus",
      available: 100,
      price: 20, 
      id: 1
      },
      {
      name: "Lavender Blend",
      description: "A soothing blend to wash away worries",
      available: 100,
      price: 15,
      id: 2
      }
    ]
  }

  test('Should sucessfully add new item data to masterItemList', () => {
    const { name, description, available, price, id } = itemData;
    action = {
      type: 'ADD_ITEM',
      name: "Green Matcha",
      description: "A healthy tea that gives you energy and focus",
      available: 100,
      price: 20, 
      id: 1
    };

    expect(itemListReducer({}, action)).toEqual({
      itemList: [
        {
          name: name,
          description: description,
          available: available,
          price: price,
          id: id
        }
      ]
    });
  });

  test('Should successfully delete an item', () => {
    action = {
      type: 'DELETE_TICKET',
      id: 1
    };
    expect(itemListReducer(currentState, action)).toEqual({
      itemList: [
      {
      name: "Lavender Blend",
      description: "A soothing blend to wash away worries",
      available: 100,
      price: 15,
      id: 2
      }]
    });



  })

  test('Should return default state if no action is passed in', () => {
    expect(itemListReducer({}, {type: null})).toEqual({});
  });
});

// name: "Green Matcha",
// description: "A healthy tea that gives you energy and focus",
// available: 100,
// price: 20, 
// id: 1
// },
// {
// name: "Lavender Blend",
// description: "A soothing blend to wash away worries",
// available: 100,
// price: 15,
// id: 2
// },