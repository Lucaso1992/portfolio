import React, { useState, useEffect } from 'react';
import styles from './TraductorButton.module.css';
import useAppContext from '../../store/AppContext';
import { useTranslation } from 'react-i18next';

const TraductorButton = () => {
    const [t] = useTranslation('global');
    const [secondT, i18n] = useTranslation('global');
    const { actions } = useAppContext();
    const [isEnglishSelected, setEnglishSelected] = useState(true);

    // useEffect(() => {
    //     const initialLanguage = i18n.language || window.navigator.language;
    //     setEnglishSelected(initialLanguage === 'en');
    // }, [i18n.language]);
    
    const handleButtonClick = (language) => {
        setEnglishSelected((prev) => !prev);
        i18n.changeLanguage(language);
        actions.setEnglish(language === 'en');
    };

    return (
        <div className={styles.buttons_container}>
            <button
                onClick={() => handleButtonClick('es')}
                className={`${styles.button_one} ${!isEnglishSelected ? styles.button_selected : ''}`}
            >
               <strong>ES</strong>
            </button>
            <div className={styles.fake_div}></div>
            <button
                onClick={() => handleButtonClick('en')}
                className={`${styles.button_two} ${isEnglishSelected ? styles.button_selected : ''}`}
            >
                <strong>EN</strong>
            </button>
        </div>
    );
};

export default TraductorButton;
