export const createItem = item => {
  return (dispatch, getState) => {
    //make async call to database
    dispatch({type: 'CREATE_ITEM', item});
  }
}