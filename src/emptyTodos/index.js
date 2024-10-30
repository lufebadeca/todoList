import React from "react";
import "./empty.css";
import {useLanguage } from "../LanguageContext"

function EmptyTodos() {

    const { t } = useLanguage(); //translations for current language

    return (
        <p>{ t.notAdded }</p>
    );
    
}

export {EmptyTodos};

//notice this file is called index.js