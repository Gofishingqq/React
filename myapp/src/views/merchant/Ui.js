import React from 'react';
import Search from '@/components/home/Search';
import Banner from '@/components/home/Banner';
import OPtion from '@/components/merchant/Option';
import '@/views/merchant/merchant.scss';
import axios from 'axios'

class merchant extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      number: [1,2]
    }
  }
  componentDidMount () {
    axios.get('http://po.funshion.com/v6/config/channelhome?nav_id=6&ves=1&cl=mweb&uc=215').then(src => {
      console.log(src.data.blocks[0].contents)
      this.setState({
        number:src.data.blocks[0].contents
      })
    })
  }
  render () {
    console.log(this)
    return (
      <div className="merchant-box">
        <header className="header">
          <span className="iconfanhui2"></span>
          <b>商品</b>
        </header>
      <div className="merchant-package">
        <Search />
        <Banner bannerlist= { this.state.number }/>
        <OPtion />
      </div>
      </div>
    )
  }
}
export default merchant;