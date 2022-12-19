import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {nanoid} from "nanoid";
import './index.css'

class Header extends Component {
  // 对接收的props进行：类型、必要性的限制
  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }
  render() {
    return (
      <div className='todo-header'>
        <input type='text' onKeyUp={this.handleKeyUp} placeholder='请输入你的任务名称，按回车键确认'/>
      </div>
    );
  }
  handleKeyUp = (event) => {
    const {keyCode,target} = event
    if (keyCode !== 13){
      return
    }
    if (target.value.trim() === ''){
      alert('输入不能为空')
      return;
    }
    this.props.addTodo({id:nanoid(),name:target.value,done:false})
    console.log(target.value)
    target.value = ''
  }
}

export default Header;