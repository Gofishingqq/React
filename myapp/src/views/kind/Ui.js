import React from 'react';
import Store from '@/components/Kind/search';
import Kind from '@/components/Kind/list';
import './Kind.scss'
class kind extends React.Component {
  componentDidMount () {
    // console.log(this.props)
    this.props.getyKind();
  }
  render () {
    return (
      <div className="Kind-box">
        <Store />
        <div className="Kind-package">
          <Kind />
        </div>
      </div>
    )
  }
}
export default kind;