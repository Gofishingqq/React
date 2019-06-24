import React from 'react';
class user extends React.Component {
  componentDidMount () {
    // console.log(this.props)
    this.props.getyUser();
  }
  render () {
    return (
      <div className="box">
        我的
      </div>
    )
  }
}
export default user;