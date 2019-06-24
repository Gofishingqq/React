const reducer = (state = {
  homeBe: [1,2]
},action) => {
  const { type,data } = action
  switch (type) {
  case 'BeHome':
    return Object.assign({}, state, { homeBe:data });
  default:
    return state;
  }
}
export default reducer;