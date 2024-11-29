import { useState } from 'react'
import styles from './App.module.css'
import ButtonList from './components/Button'
import languages from './languages'

function App() {
  return (
    <>
      <div className={styles.title}>
        <h1>Learn Web development</h1>
      </div>
      <div>
        <ButtonList/>
      </div>
    </>
  )
}

export default App
