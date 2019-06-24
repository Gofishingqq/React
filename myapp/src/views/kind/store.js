const reducer = (state = {
  kindBe: []
},action) => {
  const { type,data } = action
  switch (type) {
  case 'BeKind':
    return Object.assign({}, state, { kindBe:data });
  default:
    return state;
  }
}
export default reducer;