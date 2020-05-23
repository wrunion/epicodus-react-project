export default(state={formShowing: false}, action) => {
  const { type } = action;

  switch(type) {
    case 'TOGGLE_FORM':
      return { formShowing: !state.formShowing };  
    case 'SHOW_FORM':
      return { formShowing: true };
    case 'HIDE_FORM':
      return { formShowing: false};  
    default:
      return state;  
  }
}