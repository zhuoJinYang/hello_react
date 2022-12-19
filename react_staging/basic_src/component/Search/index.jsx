import React, {Component} from 'react';
import PubSub from 'pubsub-js'
// import axios from "axios";

class Search extends Component {
  search = async () => {
    //获取用户输入
    const {keyWordElement: {value: keyWord}} = this
    PubSub.publish('zjy', {isFirst: false, isLoading: true})
    // this.props.updateAppState({isFirst: false,isLoading: true})
    // 发送网络请求
    // fetch(`/api/search/users2?q=${keyWord}`).then(res => {
    //   return res.json()
    // }).then(
    //   res => {console.log('成功',res.items)},
    // ).catch(err => {
    //   console.log('请求失败：',err)
    // })
    try{
      const response = await fetch(`/api/search/users2?q=${keyWord}`)
      const data = await response.json()
      console.log(data)
    }catch (e) {
      console.log('请求出错',e)
    }
    // axios.get(`/api/search/users2?q=${keyWord}`).then(res=>{
    //   console.log('成功',res.data)
    //   PubSub.publish('zjy',{users: res.data.items,isLoading: false})
    //   // this.props.updateAppState({users: res.data.items,isLoading: false})
    // },err=>{
    //   PubSub.publish('zjy',{err: err.message,isLoading: false})
    //   // this.props.updateAppState({err: err.message,isLoading: false})
    // })
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索GitHub用户</h3>
        <div>
          <input ref={c=>this.keyWordElement = c} type="text" placeholder="输入关键字点击搜索"/>&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}

export default Search;