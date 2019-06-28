import { connect } from 'react-redux';
import UI from './UI';

const mapStateToProps = (store) => ({
  index:store.User.index
})

const mapDispatchToProps = (dispatch) => ({
  getindex (data) {
    dispatch({
      type: 'changeindex',
      data
    })
  }
})

const Com = connect(mapStateToProps, mapDispatchToProps)(UI);
export default Com;