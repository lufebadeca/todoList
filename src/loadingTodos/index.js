import React from "react";
import './loadingTodo.css';

function LoadingTodos() {
    return (
        <div className="LoadingTodo-container">
            <span className="LoadingTodo-completeIcon">
            </span>
            <p className="LoadingTodo-text"></p>
            <span className="LoadingTodo-deleteIcon" >
            </span>
        </div>
    );
    
}

export {LoadingTodos};

//notice this file is called index.js