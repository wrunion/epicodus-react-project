import reducer from '../../reducers';

describe('reducer', () => {
  test('should return empty array if no action type is given', () => {
    expect(reducer([],{type: null})).toEqual([]);
  });

  let action;
  const itemData = [
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
    }
  ]  
  test('Should add new item data to state array', () => {
    expect(reducer([], {type: 'ADD_ITEM', data: {...itemData[0]} })).toEqual([{...itemData[0]}]);
  });


});