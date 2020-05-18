import handleClickReducer from '../../reducers/handleClickReducer';

describe('handleClickReducer', () => {

  test('Should return default state if no action is specified', () => {
    expect(handleClickReducer({}, {type: null})).toEqual({});
  });

  test('Should return an "editing" value of null if action specified is CANCEL_CLICK', () => {
    expect(handleClickReducer({}, { type: 'CANCEL_CLICK', data: {} })).toEqual({ editing: false});
  });
});