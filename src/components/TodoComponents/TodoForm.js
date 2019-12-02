import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ''
        };
    }
    handleChanges = e => {
        this.setState({
            name: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.name);
        this.setState({
            name: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="todo" onChange={this.handleChanges} value={this.state.name}/>
                    <button>Submit Button</button>
                </form>
                <button>Clear Submitted</button>
            </div>
        )
    }
}

export default TodoForm