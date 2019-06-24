const reducer = (state = {
  merchantBe: [1,2]
},action) => {
  const { type,data } = action
  switch (type) {
  case 'BeMerchant':
    return Object.assign({}, state, { merchantBe:data });
  default:
    return state;
  }
}
export default reducer;