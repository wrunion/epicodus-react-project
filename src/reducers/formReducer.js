export default(state={formShowing: false}, action) => {
  const { type } = action;

  switch(type) {
    case 'SHOW_FORM':
      return { formShowing: true };
    case 'HIDE_FORM':
      return { formShowing: false};  
    default:
      return state;  
  }
}