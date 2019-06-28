import { connect } from 'react-redux';
import UI from './UI';
const mapStateToProps = ( store ) => ({
  index:store.User.index
})
const mapDispatchToProps = (dispatch) => ({
    changeindex (data) {
      dispatch({
        type: 'changeindex',
        data
      })
    }
})
const Con = connect(mapStateToProps,mapDispatchToProps)(UI)
export default Con;
