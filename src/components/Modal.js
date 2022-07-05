import React from "react";


function Modal(props) {
    return (
        <div className="Modal">

            <button className="Modal-close" onClick={props.onClick}>X</button>
            <p className="Modal-info">Are you sure?</p>
            <div>
                <button className="Modal-btn">Cancel</button>
                <button className="Modal-btn">Confirm</button>
            </div>

        </div>
    )
}


export default Modal;