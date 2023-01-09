import React, {Component} from 'react';
// import qs from 'qs'

const detailData = [
  {id:'01',content:'你好，中国'},
  {id:'02',content:'你好，zjy'},
  {id:'03',content:'你好，React'}
]
class Detail extends Component {
  render() {
    console.log(this.props)
    const {id,title} = this.props.location.state || {}
    // const {search} = this.props.location
    // const result = qs.parse(search.slice(1))
    // console.log(result);

    // const {id,title} = this.props.match.params
    // const findResult = detailData.find(detailObj => {
    //   return detailObj.id === id
    // })

    const findResult = detailData.find(detailObj => {
      return detailObj.id === id
    }) || ""
    return (
      <ul>
        <li>ID：{id}</li>
        <li>TITLE：{title}</li>
        <li>CONTENT：{findResult.content}</li>
      </ul>
    );
  }
}

export default Detail;