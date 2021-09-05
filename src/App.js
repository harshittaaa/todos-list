//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import AddTodo from './Components/AddTodo';
import Todos from './Components/Todos';
import About from "./Components/About";
import Footer from './Components/Footer';
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null)
  {
    initTodo=[];
  }
  else{
    initTodo= JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  const onDone=(todo)=>{
    console.log("I am done",todo);
    /* let index = todos.indexOf(todo);
    todos.splice(index,1); */
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));

    //localStorage.setItem("todos", JSON.stringify(todos));
  };
  
  const onAdd=(title, desc)=>{
    let todo={
      sno: todos.length===0? 1: todos[todos.length-1].sno + 1,
      todo: title,
      desc: desc
    };
    console.log(todo);
    setTodos([...todos, todo]);
    
      //localStorage.setItem("todos", todos);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    
  }, [todos]);

  return (
    <Router>
      <Header title="My Todo List" searchBar={false}/>
      <Switch>
        <Route exact path="/" render={()=>{
          return (
            <>
            <AddTodo onAdd={onAdd}/>
            <Todos todos={todos} onDone={onDone}/>
            </>
          )
        }}>   
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      
      <Footer/>
    </Router>    
      
  );
}

export default App;
