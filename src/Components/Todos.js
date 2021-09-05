import React from 'react';
import TodoItem from './TodoItem';

const Todos = (props) => {
    return (
        <div className="container" style={{marginBottom: '6rem'}}>
            <h3 className="text-center my-4"> Todo List</h3>
            {props.todos.length===0? "No todos added" :
            props.todos.map((todo)=>{
                return <TodoItem todo={todo} key={todo.sno} onDone={props.onDone}></TodoItem>
            })
            }
        </div>
    )
}

export default Todos;