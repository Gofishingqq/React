import { connect } from 'react-redux';
import UI from './Ui';
const mapStateToProps = ( store ) => ({
  index: store.User.index
  // signtype: store.Sign.signtype
})
const mapDispatchToProps = (dispatch) => ({
  getindex (index) {
    dispatch({
      type: 'changeindex',
      data:index
    })
  }
})
const Con = connect(mapStateToProps,mapDispatchToProps)(UI)
export default Con;
