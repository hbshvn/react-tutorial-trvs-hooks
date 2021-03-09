import React, { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import './App.css';

export class App extends Component {
  state = {
    todos: []
  };

  // fetch todos
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((res) => this.setState({ todos: res.data }));
  }

  // togle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // delete todo
  delTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) =>
        this.setState({ todos: [...this.state.todos.filter((todo) => todo.id !== id)] })
      );
  };

  // add todo
  addTodo = (title) => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', { title, completed: false })
      .then((res) => this.setState({ todos: [...this.state.todos, res.data] }));
    // .catch => handle error when response not come back
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
