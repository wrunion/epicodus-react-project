import handleClickReducer from '../../reducers/handleClickReducer';

describe('handleClickReducer', () => {

  test('Should return default state if no action is specified', () => {
    expect(handleClickReducer({}, {type: null})).toEqual({});
  });

  test('Should return an "editing" value of false if action specified is CANCEL_CLICK', () => {
    expect(handleClickReducer({}, { type: 'CANCEL_CLICK', data: {} })).toEqual({ editing: false});
  });

  test('Should return an "editing" value of true if action specified is ENTER_EDIT_MODE', ()=> {
    expect(handleClickReducer({}, {type: 'ENTER_EDIT_MODE', data: {}})).toEqual({editing: true});
    expect(handleClickReducer({selectedItem: 1}, {type: 'ENTER_EDIT_MODE', data: {}})).toEqual({selectedItem: 1, editing: true});
    expect(handleClickReducer({editing: false, selectedItem: 2}, {type: 'ENTER_EDIT_MODE', data: {}})).toEqual({editing: true, selectedItem: 2});
  });

  test('Should return selected item object if action type is SELECT_ITEM_CLICK', () => {
    expect(handleClickReducer({}, {type: 'SELECT_ITEM_CLICK', data: {      
    itemName: "Lavender Blend",
    description: "A soothing blend to wash away worries",
    available: 100,
    price: 15,
    id: 2}})).toEqual({ selectedItem: {
      itemName: "Lavender Blend",
      description: "A soothing blend to wash away worries",
      available: 100,
      price: 15,
      id: 2
      }
    });
  });

});