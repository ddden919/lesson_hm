import React from 'react';
// 天线宝宝
import { connect } from'react-redux'
const App = (props) => {
  const { count } = props
  
  // 中央状态请到本地
  return (
    <>
      {/* 计数:{count} */}
      <button></button>
    </>
  )
}
// redux state 映射到 props
const mapStateToProps = (state) => {
  return {
    count: state.counter.value
  }
}

const mapActionsToProps = (dispatch) => {
  return {
    
  }
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);