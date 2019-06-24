import { connect } from 'react-redux';
import UI from './Ui';
import api from '@/api';
const mapState = ( state ) => ({
  homeBe: state.Home.homeBe
})
const mapDad = (dispatch) => ({
  //轮动图地址
  getyHome () {
     api.regGet('v6/config/channelhome?nav_id=1&ves=1&cl=mweb&uc=215').then(data =>{
      dispatch({
        type: 'BeHome',
        data: data.blocks[0].contents
      })
    })
  }
})
const Con = connect(mapState,mapDad)(UI)
export default Con;