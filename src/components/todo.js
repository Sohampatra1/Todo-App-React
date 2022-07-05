// This is a single todo skeleton

import React, { Fragment } from "react";


function Todo(props) {
    return (
    <div className="Todo">
        <p className="Todo-info">{props.text}</p>
        <button className="Todo-button">Delete</button>
    </div>
    )
}


export default Todo;