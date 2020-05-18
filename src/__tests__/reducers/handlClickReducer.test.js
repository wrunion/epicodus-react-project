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
  });

});