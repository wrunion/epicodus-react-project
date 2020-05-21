export default(state={formShowing: false}, action) => {
  const { type } = action;

  switch(type) {
    case 'TOGGLE_FORM':
      return { formShowing: !state.formShowing };  
    default:
      return state;  
  }
}