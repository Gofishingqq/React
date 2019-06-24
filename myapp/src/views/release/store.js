const reducer = (state = {
  releaseBe: []
},action) => {
  const { type,data } = action
  switch (type) {
  case 'BeRelease':
    return Object.assign({}, state, { releaseBe:data });
  default:
    return state;
  }
}
export default reducer;