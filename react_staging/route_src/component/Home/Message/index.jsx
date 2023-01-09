import React, {Component} from 'react';
import Detail from './Detail'
import {Link,Route} from "react-router-dom";

class Message extends Component {
  state = {
    messageArr:[
      {id:'01',title:'消息1'},
      {id:'02',title:'消息2'},
      {id:'03',title:'消息3'}
    ]
  }
  pushShow = (id,title) => {
    this.props.history.push('/home/message/detail',{id,title})
  }
  replaceShow = (id,title) => {
    this.props.history.replace('/home/message/detail',{id,title})
  }

  render() {
    const {messageArr} = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map(message => {
              return(
                <li key={message.id}>
                  {/*向路由组件携带params参数*/}
                  {/*<Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>&nbsp;&nbsp;*/}

                  {/*向路由组件携带search参数*/}
                  {/*<Link to={`/home/message/detail/?id=${message.id}&title=${message.title}`}>{message.title}</Link>&nbsp;&nbsp;*/}

                  {/*向路由组件携带state参数*/}
                  <Link to={{pathname:'/home/message/detail',state:{id:message.id,title:message.title}}}>{message.title}</Link>&nbsp;&nbsp;
                  &nbsp;<button onClick={() => {this.pushShow(message.id,message.title)}}>push查看</button>
                  &nbsp;<button onClick={() => {this.replaceShow(message.id,message.title)}}>replace查看</button>


                  {/*&nbsp;<button onClick={() => {this.forward(message.id,message.title)}}>前进</button>*/}
                  {/*&nbsp;<button onClick={() => {this.back(message.id,message.title)}}>后退</button>*/}
                </li>
              )
            })
          }
        </ul>
        <hr/>
        {/*申明接收params参数*/}
        {/*<Route path='/home/message/detail/:id/:title' component={Detail}/>*/}

        {/*search参数无需申明接收*/}
        {/*<Route path='/home/message/detail' component={Detail}/>*/}

        {/*state参数无需申明接收*/}
        <Route path='/home/message/detail' component={Detail}/>
      </div>
    );
  }
}

export default Message;