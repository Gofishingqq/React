import React from 'react';
import './purchase.scss';
import { Tabs, Badge } from 'antd-mobile';


const tabs = [
  { title: <Badge >全部</Badge> },
  { title: <Badge >待付款</Badge> },
  { title: <Badge >待发货</Badge> },
  { title: <Badge >待收货</Badge> },
];

class purchase extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      index:this.props.index
    }
  }
  render () {
    console.log(this.state)
    return (
      <div className="p-box">
        <div className="p-top">
          <span onClick={() => ( this.props.history.go(-1))} className="left">
            <span className="iconfont icon-arrow-left"></span>
          </span>
          <span>我购买的</span>
        </div>
        <div className="p-content">
          <Tabs tabs={tabs}
            initialPage={this.props}
            initialPage={this.state.index}
            onChange={(tab, index) => { console.log('onChange', index, tab); }}
            onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
          >
            <div className="p-main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
              Content of first tab
            </div>
            <div className="p-main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
              Content of second tab
            </div>
            <div className="p-main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
              Content of third tab
            </div>
            <div className="p-main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
              Content of third tab
            </div>
          </Tabs>
        </div>
      </div>
    )
  }
}
  
export default purchase;