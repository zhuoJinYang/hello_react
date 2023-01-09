import React, {Component} from 'react';
import {createDecrementAction,
  createIncrementAction,
  createIncrementAsyncAction} from '../../redux/action/count'
// 引入store
// import store from "../../redux/store";
// 引入connect用于连接UI组件
import {connect} from 'react-redux'

// 定义UI组件
class CountNew extends Component {
  increment = () => {
    const {value} = this.selectNumber
    this.props.jia(value*1)
  }
  decrement = () => {
    const {value} = this.selectNumber
    this.props.jian(value*1)
  }
  incrementIfOdd = () => {
    const {value} = this.selectNumber
    if (this.props.count % 2 !== 0){
      this.props.jia(value*1)
    }
  }
  incrementAsync = () => {
    const {value} = this.selectNumber
    this.props.jiaAsync(value*1,500)
  }
  render() {
    return (
      <div>
        <h1>当前求和为：{this.props.count}</h1>
        <div>
          <select ref={c => this.selectNumber = c}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>&nbsp;
          <button onClick={this.increment}>+</button>&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;
          <button onClick={this.incrementIfOdd}>奇数+</button>&nbsp;
          <button onClick={this.incrementAsync}>异步+</button>&nbsp;
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({count:state}),   // 映射状态
  // mapDispatchToProps一般写法
  /*dispatch => ({
    jia:number => dispatch(createIncrementAction(number)),
    jian:number => dispatch(createDecrementAction(number)),
    jiaAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time))
  })*/

  // mapDispatchToProps简写
  {   // 映射操作状态的方法
    jia:createIncrementAction,
    jian:createDecrementAction,
    jiaAsync:createIncrementAsyncAction
  }
)(CountNew)