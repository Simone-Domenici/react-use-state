import React from 'react';
import styles from './Card.module.css'

function LanguageCard({ language }) {
  return (
    <div className={styles.card_wrapper}>
        <div className={styles.card}>
            <h2>{language?.title || 'Nessun linguaggio selezionato'}</h2>
            <p>{language?.description || 'Seleziona un linguaggio per vedere i dettagli.'}</p>
        </div>
    </div>
  );
}

export default LanguageCard