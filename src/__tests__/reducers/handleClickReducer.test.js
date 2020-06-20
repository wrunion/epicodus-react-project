import handleClickReducer from './../../reducers/handleClickReducer';

describe ('handleClickReducer', () => {
  test('Should return default state if no action type is specified', () => {
    expect(handleClickReducer({}, {type: null})).toEqual({});
  });
});

describe('handleClickReducer', () => {
  test('Should return a property called "itemToEdit" whose value is an object, if action type is selectItemToEdit', () => {
    expect(handleClickReducer({}, { type: 'SELECT_ITEM_TO_EDIT', data: {itemName: 'Blue Shirt', price: 10}})).toEqual({itemToEdit: {itemName: 'Blue Shirt', price: 10}})
  });

  test('Should return property "selectedItem" whose value is an object, if action type is selectItem', () => {
    expect(handleClickReducer({}, { type: 'SELECT_ITEM', data: {itemName: 'The Hobbit', price: 15}})).toEqual({selectedItem: {itemName: 'The Hobbit', price: 15}});
  });
});