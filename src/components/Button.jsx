import React from "react";
import styles from './Button.module.css';
import languages from "../languages.js";



function Button({ language }) { 
    const { title } = language;
  
    return (
      <button className={styles.button}>
        <p>{title}</p>
      </button>
    );
  }
  
  function ButtonList() {
    return (
      <ul className={styles.list}>
        {languages.map((language) => (
          <li key={language.id}> 
            <Button language={language} />
          </li>
        ))}
      </ul>
    );
  }

  export default ButtonList