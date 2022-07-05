import React from "react";



function Form() {
    return (
        <div className="Form-wrapper">
            <form className="Form" method="Post">
                <input type="text" name="todo-input" placeholder="Add your new todo"/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
};


export default Form;