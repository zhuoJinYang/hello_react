import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import News from "./News";
import Message from "./Message";
import MyNavLink from "../MyNavLink";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>我是Home的内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to='/home/news'>News</MyNavLink>
              {/*<a className="list-group-item" href="./home-news.html"></a>*/}
            </li>
            <li>
              <MyNavLink to='/home/message'>Message</MyNavLink>
              {/*<a className="list-group-item" href="./home-message.html">Message</a>*/}
            </li>
          </ul>
          <Switch>
            <Route path='/home/news' component={News}/>
            <Route path='/home/message' component={Message}/>
            <Redirect to='/home/news'/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Home;