import React from 'react'

const Todo = (props) => {

    return (
        <div className={`todo${props.todo.completed ? " completed" : ""}`} onClick={() => props.toggleCompleted(props.todo.id)}>
            <h2>{props.todo.name}</h2>
        </div>
    )
}

export default Todo