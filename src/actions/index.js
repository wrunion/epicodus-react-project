/* Action creator */ 
export const selectItem = (item) => {
  /* Return an action */
  return {
    type: 'SELECT_ITEM',
    item: item
  };
};