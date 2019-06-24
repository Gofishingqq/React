import axios from 'axios';
const surl = 'http://po.funshion.com/'
export default {
  regGet (url) {
    return new Promise((Success,fail)=> (
      axios.get(surl + url).then(res => {
        Success(res.data)
      })
    ))
  },
  regPost (url,params) {
    return new Promise((Success,fail)=> (
      axios.post(surl + url,params).then(res => {
        Success(res.data)
      })
    ))
  }
}