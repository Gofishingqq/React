import React from 'react';
import Search from '@/components/home/Search';
import Banner from '@/components/home/Banner';
import Option from '@/components/home/Option';
import '@/views/home/home.scss';

class home extends React.Component {
  componentDidMount () {
    this.props.getyHome();
  }
  render () {
    return (
      <div className="home-box">
        <Search />
        <div className="home-package">
          <Banner bannerlist= {this.props.homeBe}/>
          <Option />
        </div>
      </div>
    )
  }
}
export default home;