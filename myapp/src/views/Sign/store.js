const reducer = (state = {
  signtype:3
},action) => {
  const { type,data } = action
  switch (type) {
  case 'changesigntype':
    // console.log(data)
    return Object.assign({}, state, { signtype:data });
  default:
    return state;
  }
}
export default reducer;