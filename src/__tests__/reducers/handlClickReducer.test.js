import handleClickReducer from '../../reducers/handleClickReducer';

describe('handleClickReducer', () => {

  test('Should return default state if no action is specified', () => {
    expect(handleClickReducer({}, {type: null})).toEqual({});
  });

  test('Should return an "editing" value of false if action specified is CANCEL_CLICK', () => {
    expect(handleClickReducer({}, { type: 'CANCEL_CLICK', data: {} })).toEqual({ editing: false});
  });

  test('Should return an "editing" value of true if action specified is EDIT_CLICK', ()=> {
    expect(handleClickReducer({}, {type: 'EDIT_CLICK', data: {}})).toEqual({editing: true});
  });

});