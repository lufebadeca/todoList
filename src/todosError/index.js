import React from "react";
import { useLanguage } from "../LanguageContext";

function TodosError() {

    const {t} = useLanguage();  //translations for current language

    return (
        <p>{t.error}</p>
    );
}

export {TodosError};

//notice this file is called index.js