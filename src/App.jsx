import { LandingPage } from './LandingPage'
import './App.css'
import { useState } from 'react'
import { GamePage } from './GamePage'


function App() {
  const [start, setStart] = useState(false)
  function handleStart() {
    setStart(true)
    console.log("a7a")
  }
  return (
    <>
      <div className='main-container'>
        { !start ? (<LandingPage handler={handleStart} />) : (<GamePage />)}
      </div>
    </>
  )
}

export default App
