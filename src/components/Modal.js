import React from "react";


function Modal(props) {

    function CancelHandler() {
        props.onClick();
    }

    function ConfirmHandler() {
        props.onClick();
        props.deleteHandler();
    }

    return (
        <div className="Modal">

            <button className="Modal-close" onClick={props.onClick}>X</button>
            <p className="Modal-info">Are you sure?</p>
            <div>
                <button className="Modal-btn" onClick={CancelHandler} >Cancel</button>
                <button className="Modal-btn" onClick={ConfirmHandler} >Confirm</button>
            </div>

        </div>
    )
}


export default Modal;