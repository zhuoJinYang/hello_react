import React, {Component} from 'react';

class About extends Component {
  render() {
    console.log('路由组件收到的prop：',this.props)
    return (
      <div>
        About
      </div>
    );
  }
}

export default About;