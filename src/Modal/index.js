import React from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

function Modal( {children} ){

    return createPortal(
        <div className="mymodal">
            {children ? children : <p>No content provided</p>}
        </div>,
        document.getElementById("modal")
    );
}

export {Modal};
