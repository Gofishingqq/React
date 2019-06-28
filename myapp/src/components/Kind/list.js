import React from 'react';
import { Tabs, WhiteSpace} from 'antd-mobile';

class Kind extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      tabs:[
        { title: '品牌', key: 't1' },
        { title: '热门大牌', key: 't2' },
        { title: '名包', key: 't3' },
        { title: '腕表', key: 't4' },
        { title: '珠宝首饰', key: 't5' },
        { title: '名鞋', key: 't6' },
        { title: '二手中古', key: 't7' },
      ]
    }
  }
  render () {
    return (
      <div>
    <Tabs tabs={this.state.tabs}
      initialPage={1}
      tabBarPosition="bottom"
      renderTab={tab => <span>{tab.title}</span>}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        Content of first tab
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        Content of second tab
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        Content of third tab
      </div>
    </Tabs>
    <WhiteSpace />
  </div>
    )
  }
}
export default Kind;