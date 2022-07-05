import React from "react";


function Modal() {
    return (
        <div className="Modal">

            <p className="Modal-info">Are you sure?</p>
            <div>
                <button className="Modal-btn">Cancel</button>
                <button className="Modal-btn">Confirm</button>
            </div>

        </div>
    )
}


export default Modal;