import reducer from '../../reducers';

describe('reducer', () => {
  test('should return empty array if no action type is given', () => {
    expect(reducer([],{type: null})).toEqual([]);
  });



  
});