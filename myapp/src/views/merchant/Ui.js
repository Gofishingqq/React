import React from 'react';
import Search from '@/components/home/Search';
import Banner from '@/components/home/Banner';
import OPtion from '@/components/merchant/Option';
import '@/views/merchant/merchant.scss';

class merchant extends React.Component {
  componentDidMount () {
    // console.log(this.props)
    this.props.getyMerchant();
  }
  render () {
    return (
      <div className="merchant-box">
        <header className="header">
          <span className="iconfanhui2"></span>
          <b>商品</b>
        </header>
      <div className="merchant-package">
        <Search />
        <Banner bannerlist= {this.props.merchantBe}/>
        <OPtion />
      </div>
      </div>
    )
  }
}
export default merchant;