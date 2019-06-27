import { connect } from 'react-redux';
import UI from './UI';
const mapStateToProps = ( store ) => ({
  signtype: store.Sign.signtype
})
const mapDispatchToProps = (dispatch) => ({
  getsigntype (data) {
    dispatch({
      type: 'changesigntype',
      data
    })
  }
})
const Con = connect(mapStateToProps,mapDispatchToProps)(UI)
export default Con;
