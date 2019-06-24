const reducer = (state = {
  userBe: []
},action) => {
  const { type,data } = action
  switch (type) {
  case 'BeUser':
    return Object.assign({}, state, { userBe:data });
  default:
    return state;
  }
}
export default reducer;