import { useState } from 'react'
import styles from './App.module.css'
import ButtonList from './components/Button.jsx'
import LanguageCard from './components/Card.jsx'
import languages from './languages.js'

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
  };
  return (
    <>
      <div className={styles.title}>
        <h1>Learn Web development</h1>
      </div>
      <div>
        <ButtonList
        languages={languages} 
        onLanguageClick={handleLanguageClick}
        selectedLanguage={selectedLanguage}
        />
      </div>
      <div>
        <LanguageCard
        language={selectedLanguage} />
      </div>
    </>
  )
}

export default App
