import React from 'react'

const TodoForm = (props) => {
    const { handleChanges, handleSubmit, name } = props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todo" onChange={handleChanges} value={name}/>
                <button>Submit Button</button>
            </form>
            <button>Clear Submitted</button>
        </div>
    ) 
}

export default TodoForm