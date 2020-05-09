/* Action creator */ 
export const selectItem = (item) => {
  /* Return an action */
  return {
    type: 'ITEM_SELECTED',
    payload: item
  };
};