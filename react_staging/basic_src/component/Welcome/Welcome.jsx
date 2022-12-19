import React,{Component} from "react";
import axios from "axios";
import './Welcome.css'

export default class Welcome extends Component{
  render(){
    return(
      <div className='welcome_context'>
        <h2>Welcome</h2>
        <button onClick={this.getStudentData}>点我获取数据</button>
      </div>
    )
  }
  getStudentData = () => {
    axios.get('xxxxxx').then(res => {
      console.log('成功了',res.data)
    },err => {
      console.log('失败了',err)
    })
  }
}