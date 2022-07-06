import React, { useState } from "react";



function Form(props) {

    // props.addTodo
    // props.TodosPendingHandler

    const [inputVal, setInputVal] = useState('');


    const submitHandler = (e) => {
        e.preventDefault();

        if(!inputVal) return;


        // console.log(inputVal);
        props.onSubmit(inputVal);
        


        setInputVal('');

    }

    const changeHandler = (event) => {
        setInputVal(event.target.value);
    }

    return (
        <div className="Form-wrapper">
            <form className="Form" onSubmit={submitHandler}>
                <input type="text" value={inputVal} name="todoinput" placeholder="Add your new todo" onChange={changeHandler} autoComplete="off"/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
};


export default Form;