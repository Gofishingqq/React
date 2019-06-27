const reducer = (state = {
  index:0
},action) => {
  const { type,data } = action
  switch (type) {
  case 'changeindex':
    // console.log(state.index)
    return Object.assign({}, state, { index:data });
  default:
    return state;
  }
}
export default reducer;