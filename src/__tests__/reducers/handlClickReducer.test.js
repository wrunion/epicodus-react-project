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


// import handleClickReducer from '../../reducers/handleClickReducer';

// describe('handleClickReducer', () => {
//   /* Default test */
//   test('Should return default state if no action is specified', () => {
//     expect(handleClickReducer({}, {type: null})).toEqual({});
//   });

//   /* Cancel click should exit edit mode */
//   test('Should return an "editing" value of false if action specified is CANCEL_CLICK', () => {
//     expect(handleClickReducer({}, { type: 'CANCEL_CLICK', data: {} })).toEqual({ editing: false});
//   });

//   /* Edit button should enter edit mode */
//   test('Should return an "editing" value of true if action specified is ENTER_EDIT_MODE', ()=> {
//     expect(handleClickReducer({}, {type: 'ENTER_EDIT_MODE', data: {}})).toEqual({editing: true});
//     expect(handleClickReducer({selectedItem: 1}, {type: 'ENTER_EDIT_MODE', data: {}})).toEqual({selectedItem: 1, editing: true});
//     expect(handleClickReducer({editing: false, selectedItem: 2}, {type: 'ENTER_EDIT_MODE', data: {}})).toEqual({editing: true, selectedItem: 2});
//   });

//   /* Selecting an item should pass that item to selectedItem state slice */
//   test('Should return selected item object if action type is SELECT_ITEM_CLICK', () => {
//     expect(handleClickReducer({}, {type: 'SELECT_ITEM_CLICK', data: {      
//     itemName: "Lavender Blend",
//     description: "A soothing blend to wash away worries",
//     available: 100,
//     price: 15,
//     id: 2}})).toEqual({ selectedItem: {
//       itemName: "Lavender Blend",
//       description: "A soothing blend to wash away worries",
//       available: 100,
//       price: 15,
//       id: 2
//       }
//     });
//   });

//   /* Toggle form visibility */
//   test('Should hide or show form on page if action type equals TOGGLE_FORM', () => {
//     expect(handleClickReducer({formShowing: false}, { type: 'TOGGLE_FORM', data: {}})).toEqual({formShowing: true});
//     expect(handleClickReducer({}, { type: 'TOGGLE_FORM', data: {}})).toEqual({formShowing: true});
//     expect(handleClickReducer({formShowing: true}, { type: 'TOGGLE_FORM', data: {}})).toEqual({formShowing: false});
//   });

// });