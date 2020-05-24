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
    type: constants.EDIT_ITEM,
    data: item
  };
};
export const deleteItem = (item) => {
  return {
    type: constants.DELETE_ITEM,
    data: item
  };
};

/* Actions for handleClickReducer */
export const selectItem = (item) => {
  return {
    type: constants.SELECT_ITEM,
    data: item
  };
};

export const unselectItem = () => {
  return {
    type: constants.UNSELECT_ITEM
  }
}

/* Actions for formReducer */
export const showForm = () => {
  return {
    type: constants.SHOW_FORM
  };
};

export const hideForm = () => {
  return {
    type: constants.HIDE_FORM
  };
};