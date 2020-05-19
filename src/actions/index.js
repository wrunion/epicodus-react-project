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
export const cancelClick = (event) => {
  return {
    type: 'CANCEL_CLICK',
    data: event
  };
};
export const selectItem = (item) => {
  return {
    type: 'ITEM_SELECTED',
    data: item
  };
};
export const enterEditMode = () => {
  return {
    type: 'ENTER_EDIT_MODE'
  };
};
export const toggleForm = () => {
  return {
    type: 'TOGGLE_FORM'
  };
};

