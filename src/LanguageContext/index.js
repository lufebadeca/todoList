// LanguageContext.js
import React, { createContext, useState, useContext } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === 'en' ? 'sp' : 'en'));
        //console.log(language);
    };

    const t = translations[language]; // Obten las traducciones del idioma actual

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
