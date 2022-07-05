// Todo container is a wrapper that holds all the todos

import React, { Fragment } from "react";
import Todo from './todo';
import Form from "./form";
import '../App.css';
import Modal from "./Modal";
import Backdrop from "./Backdrop";



function TodoContainer() {
  return (
      <div className = 'Container'>
        <h1 className="Todo-heading">Todo App</h1>
        <section className='Todo-Container'>
        <Form />
            <Todo text="Buy Coffee"/>
            <Todo text="Play games"/>
        </section>
        <Modal />
        <Backdrop />
      </div>
  );
}

export default TodoContainer;
