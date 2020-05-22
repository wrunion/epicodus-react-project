/* Actions for itemListReducer */
export const addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    data: item
  };
};

export const updateItem = (item) => {
  return {
    type: 'UPDATE_ITEM',
    data: item
  };
};

export const deleteItem = (item) => {
  return {
    type: 'DELETE_ITEM',
    data: item
  };
};

/* Items for formReducer */
export const showForm = () => {
  return {
    type: 'SHOW_FORM'
  };
};

export const hideForm = () => {
  return {
    type: 'HIDE_FORM'
  };
};

/* Actions for selectedItemReducer */
export const selectItem = (item) => {
  return {
    type: 'SELECT_ITEM',
    data: item
  };
};

export const editItem = (item) => {
  return {
    type: 'SELECT_ITEM_TO_EDIT', 
    data: item
  }
}