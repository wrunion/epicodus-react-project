/* Actions for itemListReducer */
export const addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    data: item
  };
};
export const editItem = (item) => {
  return {
    type: 'EDIT_ITEM',
    data: item
  };
};
export const deleteItem = (item) => {
  return {
    type: 'DELETE_ITEM',
    data: item
  };
};

/* Actions for handleClickReducer */
export const selectItemToEdit = (item) => {
  return {
    type: 'SELECT_ITEM_TO_EDIT',
    data: item
  };
};
export const selectItem = (item) => {
  return {
    type: 'ITEM_SELECTED',
    data: item
  };
};

/* itemListReducer actions:
addItem, editItem, deleteItem */

/* handleClick reducer actions: 
selectItemToEdit, selectItem */

