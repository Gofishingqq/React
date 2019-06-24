const reducer = (state = {
  particularsBe: []
},action) => {
  const { type,data } = action
  switch (type) {
  case 'BeParticulars':
    return Object.assign({}, state, { particularsBe:data });
  default:
    return state;
  }
}
export default reducer;