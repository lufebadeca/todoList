import React from "react";
import { useLanguage } from "../LanguageContext";
import "./selector.css";
import enFlag from './en_flag.png';
import spFlag from './sp_flag.png';


function LanguageSelector(){
    const { language, toggleLanguage, t } = useLanguage();

    return(
       <>
        <div className="lang-selector" onClick={toggleLanguage}>
            <div id="en-flag" className={language==="en" ? "selected" : "" }>
                <img src={enFlag} alt="en_flag"></img>
            </div>
            <div id="sp-flag" className={language==="sp" ? "selected" : "" }>
                <img src={spFlag} alt="sp_flag"></img>
            </div>
        </div>
       </> 
    )
}

export {LanguageSelector};