import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import './app.css'

const todos = [
  {id: 0, name: 'First Todo', completed: false},
  {id: 1, name: 'Second Todo', completed: false},
  {id: 2, name: 'Third Todo', completed: false}
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: todos,
      name: ''
    }
  }

  //ADD TODO
  addTodo = name => {
    const todo = {
      name: name,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  //TOGGLE COMPLETED
  toggleCompleted = id => {
    const newTodos = this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo
      }
    })
    this.setState({
      todos: newTodos
    })
  }

  //Clear Completed 
  clearCompleted = e => {
    e.preventDefault()
    const newTodos = this.state.todos.filter(todo => !todo.completed)
    this.setState({
      todos: newTodos
    })
  }

  //HANDLE CHANGES
  handleChanges = e => {
    this.setState({
        name: e.target.value
    })
  }

  //HANDLE SUBMIT
  handleSubmit = e => {
    e.preventDefault();
    this.addTodo(this.state.name);
    this.setState({
        name: ''
    })
  }
  render() {
    return (
      <div>
        <div className="header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleChanges={this.handleChanges} handleSubmit={this.handleSubmit} name={this.state.name} clearCompleted={this.clearCompleted}/>
        </div>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
        
      </div>
    );
  }
}

export default App;
