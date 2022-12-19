import React, {Component} from 'react';
import './index.css'

class Footer extends Component {
  render() {
    const {todos} = this.props
    const doneCount = todos.reduce((pre,todo)=> pre + (todo.done?1:0),0)
    const allCount = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneCount === allCount && allCount !== 0} onChange={this.handleAllCheck}/>
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{allCount}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearAllDone}>清除已完成任务</button>
      </div>
    );
  }
  handleAllCheck = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }
  handleClearAllDone = () => {
    this.props.handleClearAllDone()
  }
}

export default Footer;