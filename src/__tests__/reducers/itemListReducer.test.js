import reducer from '../../reducers';

describe('reducer', () => {
  /* Default setup test */
  test('should return empty array if no action type is given', () => {
    expect(reducer([],{type: null})).toEqual([]);
  });

  /* Dummy data for tests */
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

  const editedItemData = [
    {
      itemName: "Green Matcha",
      description: "A healthy tea that gives you energy and focus",
      available: 100,
      price: 20, 
      id: 1
    },
    {
      itemName: "New Lavender Blend",
      description: "New Description",
      available: 100,
      price: 15,
      id: 2
    }
  ] 

  const deletedItemData = [
    {
      itemName: "Lavender Blend",
      description: "A soothing blend to wash away worries",
      available: 100,
      price: 15,
      id: 2
    }
  ] 

  /* ADD_ITEM test */
  test('Should add new item data to state array', () => {
    expect(reducer([], {type: 'ADD_ITEM', data: {...itemData[0]} })).toEqual([{...itemData[0]}]);
  });

  /* EDIT_ITEM test */
  test('Should replace an item in state array if an item with the same id already exists', () => [
    expect(reducer(itemData, {type: 'EDIT_ITEM', data: {      
      itemName: "New Lavender Blend",
      description: "New Description",
      available: 100,
      price: 15,
      id: 2}})).toEqual([{editedItemData}])
  ]);

  /* DELETE_ITEM test */




});