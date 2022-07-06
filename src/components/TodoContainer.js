// Todo container is a wrapper that holds all the todos

import React, { Fragment, useEffect, useState } from "react";
import Todo from './todo';
import Form from "./form";
// import data from './data';
import '../App.css';
import data from "./data";
import leftBlob from '../images/leftBlob.svg'




function TodoContainer() {

  const [TodosPending, setTodosPending] = useState(0);

  const [todo, setTodo] = useState(data);
  

  useEffect(() => {
    setTodosPending(todo.filter(eachTodo => !eachTodo.complete).length);
  });

  function completeHandler(id) {
    // console.log("done");
    const todoCopy = todo.map((todo) => { // by this method we are changing the complete to true and 
      // creating a modified array
        if(todo.id === id) {
            todo.complete = !todo.complete;
        };

        return {...todo};

    })
    console.log(todoCopy);
    // now lets change the state
    setTodo(todoCopy);
  }


  


  const addTodo = (text) => {
    const newTodoList = [{"id": Math.floor(Math.random() * 10000) + 1, "task": text, "complete": false}, ...todo];

    // now lets update using setTodo
    // console.log(newTodoList);
    setTodo(newTodoList);

    console.log(newTodoList);

  }


  const removeTodo = (id) => {

    const newTodoList = todo.filter(eachTodo => eachTodo.id !== id);

    setTodo(newTodoList);

  }


  
  
  const randomNumber = () => {
    return Math.floor(Math.random() * 10000) + 1;
  }

  const dataMod = todo.map((eachTodo) => {
    return <Todo 
    todo={
      eachTodo
    }
    completeHandler={completeHandler}
    removeTodo={removeTodo}
    />
  })


  



  return (
      <div className="img-Container">
        <div className = 'Container'>
          <h1 className="Todo-heading">Todo App</h1>
          <Form onSubmit = {addTodo}/>
          <section className='Todo-Container'>
            {dataMod}
          </section>
          <p className="Todo-Pending-Counter">Todos pending: {TodosPending}</p>
        </div>
        <img src={leftBlob} className="img-style"/>
      </div>
  );
}

export default TodoContainer;
