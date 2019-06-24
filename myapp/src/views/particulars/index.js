import { connect } from 'react-redux';
import UI from './Ui';
import api from '@/api';
const mapState = ( state ) => ({
  particularsBe: state.Particulars.particularsBe
})
const mapDad = (dispatch) => ({
  getyParticulars () {
    api.regGet('v6/config/channelhome?nav_id=1&ves=1&cl=mweb&uc=215').then(data =>{
      console.log(data)
      dispatch({
        type: 'BeParticulars',
        data: data.blocks[0].contents
      })
    })
  }
})
const Con = connect(mapState,mapDad)(UI)
export default Con;