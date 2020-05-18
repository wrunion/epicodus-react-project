import handleClickReducer from '../../reducers/handleClickReducer';

describe('handleClickReducer', () => {

  test('Should return default state if no action is specified', () => {
    expect(handleClickReducer([])).toEqual([]);
  });

  test('Should return an "editing" value of null if action specified is CANCEL_CLICK', () => {
    expect(handleClickReducer({}, 'CANCEL_CLICK')).toEqual({ editing: false});
  });
});