import React from 'react';
class particulars extends React.Component {
  componentDidMount () {
    // console.log(this.props)
    this.props.getyParticulars();
  }
  render () {
    return (
      <div className="box">
        详情页
      </div>
    )
  }
}
export default particulars;