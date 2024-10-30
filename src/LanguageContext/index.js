// LanguageContext.js
import React, { createContext, useState, useContext } from 'react';
import { translations } from './translations';
import { useLocalStorage } from '../TodoContext/useLocalStorage';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

    const loadedLang = localStorage.getItem("lang");
    const defaultLang = (loadedLang === "en" || loadedLang === "sp") ? loadedLang : "en";
    const [language, setLanguage] = useState(defaultLang);

    const toggleLanguage = () => {
        const newLanguage = language === "en"? "sp" : "en";
        setLanguage(newLanguage);
        localStorage.setItem("lang", newLanguage);
        console.log(newLanguage);
    };

    const t = translations[language]; // Obten las traducciones del idioma actual

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
