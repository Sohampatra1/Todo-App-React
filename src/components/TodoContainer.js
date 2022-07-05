// Todo container is a wrapper that holds all the todos

import React, { Fragment } from "react";
import Todo from './todo';
import Form from "./form";
import '../App.css';



function TodoContainer() {
  return (
    <Fragment>
      <h1>Todo App</h1>
      <section className='Todo-Container'>
      <Form />
          <Todo text="Buy Coffee"/>
          <Todo text="Play games"/>
      </section>
    </Fragment>
  );
}

export default TodoContainer;
