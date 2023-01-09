import React, {Component} from 'react';
import {connect} from "react-redux";
import {createIncrementAction} from '../../redux/action/count'

class ABC extends Component {
  add = () => {
    this.props.jiafa(1)
  }
  render() {
    return (
      <div>
        <h2>当前求和为:{this.props.he}</h2>
        <button onClick={this.add}>点我+1</button>
      </div>
    );
  }
}

export default connect(
  state => ({he:state}),
  {jiafa:createIncrementAction}
)(ABC);