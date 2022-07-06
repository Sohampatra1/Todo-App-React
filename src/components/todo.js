// This is a single todo skeleton

import React, { Fragment, useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";


function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false); // this means modalPop which is a state variable 
  // has the initial value of false
    

    function deleteHandler() {
        // our aim is whenever the user clicks on the Delete Button on any Todo .. The modalIsOpen 
        // state variable gets to true and the modal will pop up
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    function toggleHandler(e) {
        const id = props.todo.id;
        console.log(id);
        props.completeHandler(id);
    }

    return (
     <Fragment>   
        <div className="Todo">
            <input type="checkbox" onClick={toggleHandler} className="Todo-complete" checked = {props.todo.complete ? "checked" : null}/>
            <p className = {props.todo.complete ? "Todo-info line-through" : "Todo-info"} >{props.todo.task}</p> 
            <button className="Todo-button" onClick={deleteHandler}>Delete</button>
        </div>
        {modalIsOpen && <Modal onClick={closeModalHandler} />}
        {modalIsOpen && <Backdrop />}
    </Fragment>
    )
}


export default Todo;