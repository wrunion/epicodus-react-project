import formReducer from './../../reducers/formReducer.js';

describe('formReducer', () => {
  test('Should return true for action type SHOW_FORM', () => {
    expect(formReducer({}, {type: 'SHOW_FORM'})).toEqual({formShowing: true});
  });
  test('Should return false for action type HIDE_FORM', () => {
    expect(formReducer({}, {type: 'HIDE_FORM'})).toEqual({formShowing: false});
  });
});