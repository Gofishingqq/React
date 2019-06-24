const reducer = (state = {
  carBe: []
},action) => {
  const { type,data } = action
  switch (type) {
  case 'BeCar':
    return Object.assign({}, state, { carBe:data });
  default:
    return state;
  }
}
export default reducer;