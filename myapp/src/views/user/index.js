import { connect } from 'react-redux';
import UI from './Ui';
const mapStateToProps = ( store ) => ({
  index: store.User.index
})
const mapDispatchToProps = (dispatch) => ({
  getindex (index) {
    dispatch({
      type: 'changeindex',
      data:index
    })
    // console.log(index)
  }
})
const Con = connect(mapStateToProps,mapDispatchToProps)(UI)
export default Con;