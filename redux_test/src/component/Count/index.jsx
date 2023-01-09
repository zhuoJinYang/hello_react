import React, {Component} from 'react';
import store from "../../redux/store";
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from "../../redux/action/count";

class Count extends Component {
  state = {
    count: 0
  }

  /*componentDidMount() {
    store.subscribe(() => {
      this.setState({})
    })
  }*/

  increment = () => {
    const {value} = this.selectNumber
    const {count} = this.state
    this.setState({count: count + value * 1})
  }
  increment_redux = () => {
    const {value} = this.selectNumber
    store.dispatch(createIncrementAction(value*1))
  }
  decrement = () => {
    const {value} = this.selectNumber
    const {count} = this.state
    this.setState({count: count - value * 1})
  }
  decrement_redux = () => {
    const {value} = this.selectNumber
    store.dispatch(createDecrementAction(value * 1))
  }
  incrementIfOdd = () => {
    const {value} = this.selectNumber
    const {count} = this.state
    if (count % 2 !== 0){
      this.setState({count: count + value * 1})
    }
  }
  incrementIfOdd_redux = () => {
    const {value} = this.selectNumber
    const count = store.getState()
    if (count % 2 !== 0){
      store.dispatch(createIncrementAction(value * 1))
    }
  }
  incrementAsync = () => {
    const {value} = this.selectNumber
    const {count} = this.state
    setTimeout(() => {
      this.setState({count: count + value * 1})
    },500)
  }
  incrementAsync_redux = () => {
    const {value} = this.selectNumber
    store.dispatch(createIncrementAsyncAction(value * 1,500))
  }
  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
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
          <span>纯react版本</span>
        </div>

        <h1>当前求和为：{store.getState()}</h1>
        <div style={{marginTop:'20px'}}>
          <select ref={c => this.selectNumber = c}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>&nbsp;
          <button onClick={this.increment_redux}>+</button>&nbsp;
          <button onClick={this.decrement_redux}>-</button>&nbsp;
          <button onClick={this.incrementIfOdd_redux}>奇数+</button>&nbsp;
          <button onClick={this.incrementAsync_redux}>异步+</button>&nbsp;
          <span>redux版本</span>
        </div>
      </div>
    );
  }
}

export default Count;