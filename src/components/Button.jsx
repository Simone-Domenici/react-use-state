import React from "react";
import styles from './Button.module.css';
import languages from "../languages.js";



function Button({ language , onClick, isSelected }) { 
    const { title } = language;
  
    return (
      <button className={`${styles.button} ${isSelected ? styles.selected : ''}`} onClick={onClick}>
        <p>{title}</p>
      </button>
    );
  }
  
  function ButtonList({languages, onLanguageClick, selectedLanguage}) {
    return (
      <ul className={styles.list}>
        {languages.map((language) => (
          <li key={language.id}> 
            <Button 
            language={language} 
            onClick={() => onLanguageClick(language)}
            isSelected={language === selectedLanguage}
            />
          </li>
        ))}
      </ul>
    );
  }

  export default ButtonList