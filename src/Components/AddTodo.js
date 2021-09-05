import React, {useState} from 'react';
//import {style} from 'react';

const AddTodo = (props) => {
    /* const todo={
        title: document.getElementById("todoTitle"),
        desc: document.getElementById('todoDesc')
    }; */
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit =(e)=>{
        e.preventDefault();
        if(!title || !desc)
        alert("Title or description can't be empty :(");
        else
        props.onAdd(title,desc);
    };
    //console.log(todo);
    return (
        <div className="container my-3">
            <h3 className="text-center">Add a Todo</h3>
        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="todoTitle" className="form-label">Title</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="todoTitle" aria-describedby="title"/>
            </div>
            <div className="mb-3">
                <label htmlFor="todoDesc" className="form-label">Description</label>
                <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="todoDesc"/>
            </div>
            
            <button type="submit" className="btn btn-sm btn-success">Add</button>
        </form>
        </div>
    )
};

export default AddTodo;