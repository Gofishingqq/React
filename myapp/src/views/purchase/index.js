import { connect } from 'react-redux';
import UI from './UI';
const mapStateToProps = (state) => {
  return {
    index: state.User.index
  }
}
const Com = connect(mapStateToProps)(UI);
export default Com;
