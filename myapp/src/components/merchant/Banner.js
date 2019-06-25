import React from 'react';
import { Carousel, } from 'antd-mobile';

import './Banner.scss';

const Bann = ({ bannerlist }) => (
    <Carousel className="space-carousel"
      frameOverflow="visible"
      cellSpacing={27}
      slideWidth={0.7}
      autoplay
      infinite
      style={{ display: 'inline-block', width: '100%', height: 145 }}>

      {bannerlist.map((val, index) => (
        <div className="zi" key={index}>
          <p>轻奢侈专场</p>
          <a href="http://www.alipay.com" style={{ 
            display: 'block',
            position: 'relative',
            top: 0,
            boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
            borderRadius:12,
            }} >
            <img src={val.banner} alt="" style={{borderRadius:12, width: '100%', verticalAlign: 'top' }} 
            onLoad={() => {
              // fire window resize event to change height
              window.dispatchEvent(new Event('resize'));
            }}/></a>
          </div>
      ))}
    </Carousel>
)
export default Bann;
