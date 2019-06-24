import React from 'react';
class release extends React.Component {
  componentDidMount () {
    // console.log(this.props)
    this.props.getyRelease();
  }
  render () {
    return (
      <div className="box">
        发布
      </div>
    )
  }
}
export default release;