import constants from './constants';

/* Actions for itemListReducer */
export const addItem = (item) => {
  return {
    type: constants.ADD_ITEM,
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
    type: 'SELECT_ITEM',
    data: item
  };
};

export const hideDetails = () => {
  return {
    type: 'HIDE_DETAILS'
  }
}

export const unselectItem = () => {
  return {
    type: 'UNSELECT_ITEM'
  }
}

/* Actions for formReducer */
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

/* formReducer actions: hideForm, showForm */

/* itemListReducer actions:
addItem, editItem, deleteItem */

/* handleClick reducer actions: 
selectItemToEdit, selectItem */