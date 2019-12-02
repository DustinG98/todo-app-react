import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

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
      todos: todos
    }
  }

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
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos}/>
        <TodoForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
