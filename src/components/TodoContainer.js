// Todo container is a wrapper that holds all the todos

import React, { Fragment, useState } from "react";
import Todo from './todo';
import Form from "./form";
import '../App.css';



function TodoContainer() {


  return (
      <div className = 'Container'>
        <h1 className="Todo-heading">Todo App</h1>
        <section className='Todo-Container'>
          <Form />
          <Todo text="Buy Coffee"/>
          <Todo text="Play games"/>
        </section>
      </div>
  );
}

export default TodoContainer;
