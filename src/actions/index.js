/* Action creator */ 
export const selectItem = (item) => {
  /* Return an action */
  return {
    type: 'SELECT_ITEM',
    item: item
  };
};

export const purchaseItem = (item) => {
  return {
    type: 'PURCHASE_ITEM',
    item: item
  }
}