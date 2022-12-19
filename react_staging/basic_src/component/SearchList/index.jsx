import React, {Component} from 'react';
import './index.css'
import PubSub from "pubsub-js";

class SearchList extends Component {
  state = {
    users:[],
    isFirst:true,
    isLoading:false,//标识是否处于加载中
    err:'',//存储请求相关的错误信息
  }
  componentDidMount() {
    this.token = PubSub.subscribe('zjy',(_,data) => {
      this.setState(data)
    })
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  render() {
    const {users,isFirst,isLoading,err} = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
          isLoading? <h2>Loading...</h2> :
          err ? <h2>{err}</h2> :
          users.map((userObj) => {
            return(
              <div className="card" key={userObj.id}>
                <a href={userObj.html_url} rel='noreferrer' target="_blank">
                  <img alt='head_portrait' src={userObj.avatar_url} style={{width: '100px'}}/>
                </a>
                <p className="card-text">{userObj.login}</p>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default SearchList;