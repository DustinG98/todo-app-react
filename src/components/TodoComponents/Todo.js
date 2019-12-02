import React from 'react'

const Todo = (props) => {
    return (
        <div>
            <h2>{props.todo.name}</h2>
        </div>
    )
}

export default Todo