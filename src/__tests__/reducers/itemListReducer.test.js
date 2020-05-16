import reducer from '../reducers';

describe('reducer', () => {
  ('Should return an empty array if action type is null', () => {
    expect(reducer([], {type: null})).toEqual([]);
  });
  
});