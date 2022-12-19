import logo from './logo.svg';
import React,{Component} from "react";
import Hello from './component/Hello/Hello'
import Header from "./component/Header";
import List from "./component/List";
import Footer from "./component/Footer";
import Welcome from "./component/Welcome/Welcome";
import './App.css';
import Search from "./component/Search";
import SearchList from "./component/SearchList";

export default class App extends Component{
  state = {
    todos:[
      {id:'001',name:"吃饭",done:true},
      {id:'002',name:"睡觉",done:true},
      {id:'003',name:"敲代码",done:false}
    ],
  }
  addTodo = (todoObj) => {
    const {todos} = this.state
    this.setState({
      todos: [todoObj,...todos]
    })
  }
  updateTodo = (id,done) => {
    const {todos} = this.state
    this.setState({
      todos:todos.map(todoObj => {
        if (todoObj.id === id){
          return {...todoObj,done}
        }
        return todoObj
      })
    })
  }
  deleteTodo = (id) => {
    const {todos} = this.state
    this.setState({
      todos: todos.filter(todoObj => {
        return todoObj.id !== id
      })
    })
  }
  checkAllTodo = (flag) => {
    const {todos} = this.state
    this.setState({
      todos:todos.map(todoObj => {
        return {...todoObj,done: flag}
      })
    })
  }
  handleClearAllDone = () => {
    const {todos} = this.state
    this.setState({todos:todos.filter(todoObj=> !todoObj.done)})
  }
  render() {
    const {todos} = this.state
    return (
      <div className="App">
        <Hello/>
        <Welcome/>
        <div className='todo-container'>
          <div className='todo-wrap'>
            <Header addTodo={this.addTodo}/>
            <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
            <Footer todos={todos} checkAllTodo={this.checkAllTodo} handleClearAllDone={this.handleClearAllDone}/>
          </div>
        </div>
        <div className="container">
          <Search/>
          <SearchList/>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
