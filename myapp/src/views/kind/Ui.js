import React from 'react';
class kind extends React.Component {
  componentDidMount () {
    // console.log(this.props)
    this.props.getyKind();
  }
  render () {
    return (
      <div className="box">
        分类
      </div>
    )
  }
}
export default kind;