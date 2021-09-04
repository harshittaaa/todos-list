//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import React, {useState} from 'react';

function App() {

  const onDone=(todo)=>{
    console.log("I am done",todo);
    /* let index = todos.indexOf(todo);
    todos.splice(index,1); */
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  };
const [todos, setTodos] = useState([
  {
    sno: 1,
    todo: "Go to market",
    desc: "cjnjenejeeje"
  },
  {
    sno: 2,
    todo: "Go to mall",
    desc: "cjnjenejeeje"
  },
  {
    sno: 3,
    todo: "Go to post office",
    desc: "cjnjenejeeje"
  }
]);

  return (
    <>
      <Header title="My Todo List" searchBar={false}/>
      <Todos todos={todos} onDone={onDone}/>
      <Footer/>
    </>    
      
  );
}

export default App;
