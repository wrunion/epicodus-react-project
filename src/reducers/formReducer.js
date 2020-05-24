import constants from './../actions/constants';

export default(state={formShowing: false}, action) => {
  const { type } = action;

  switch(type) {
    case constants.SHOW_FORM:
      return { formShowing: true };
    case constants.HIDE_FORM:
      return { formShowing: false};  
    default:
      return state;  
  }
}