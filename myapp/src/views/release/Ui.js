import React from 'react';
import Content from '@/components/release/content';
import './release.scss'
class release extends React.Component {
  componentDidMount () {
    // console.log(this.props)
    this.props.getyRelease();
  }
  render () {
    return (
      <div className="release-box">
        <Content />
      </div>
    )
  }
}
export default release;