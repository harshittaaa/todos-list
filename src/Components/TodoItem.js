import React from 'react';

const TodoItem = ({todo, onDone}) => {
    return (
        <div>
            <h4>{todo.todo}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-primary" onClick={()=>onDone(todo)}>Done</button>
        </div>
    )
};

export default TodoItem;