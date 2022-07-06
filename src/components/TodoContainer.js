// Todo container is a wrapper that holds all the todos

import React, { Fragment, useState } from "react";
import Todo from './todo';
import Form from "./form";
import data from './data';
import '../App.css';




function TodoContainer() {

  const [todo, setTodo] = useState(data);
  

  function completeHandler(id) {
    // console.log("done");
    const todoCopy = todo.map((todo) => { // by this method we are changing the complete to true and 
      // creating a modified array
      if(todo.id === Number(id)) {
        return {...todo, "complete": !todo.complete};
      }
      else return {...todo};

    })

    // now lets change the state
    setTodo(todoCopy);
  }


  const dataMod = data.map((todo) => {
    return <Todo 
    todo={todo}
    completeHandler={completeHandler} />
  })



  return (
      <div className = 'Container'>
        <h1 className="Todo-heading">Todo App</h1>
        <Form />
        <section className='Todo-Container'>
          {dataMod}
        </section>
      </div>
  );
}

export default TodoContainer;
