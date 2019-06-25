import React from 'react';
import { Carousel } from 'antd-mobile';

const Bann = ({ bannerlist }) => (
    <Carousel
      autoplay
      infinite
      style={{ display: 'inline-block', width: '100%', height: 146 }}>
      {bannerlist.map((val, index) => (
        <a key={index} href="http://www.alipay.com" style={{ display: 'inline-block', width: '100%', height: 146 }} >
          <img src={val.banner} alt="" style={{ width: '100%',height: 146, verticalAlign: 'top' }} /></a>
      ))}
    </Carousel>
)
export default Bann;
