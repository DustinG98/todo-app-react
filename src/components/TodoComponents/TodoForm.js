import React from 'react'

const TodoForm = (props) => {
    const { handleChanges, handleSubmit, name, clearCompleted } = props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleChanges} value={name}/>
                <button>Submit Button</button>
            </form>
            <button onClick={e => clearCompleted(e)}>Clear Completed</button>
        </div>
    ) 
}

export default TodoForm