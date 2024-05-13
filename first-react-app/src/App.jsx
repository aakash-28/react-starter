import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import KgButton from './components/KgButton'
import Hello from './components/Hello'
import Random from './components/Random'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> This is crazy</h1>
      <KgButton></KgButton>
      <Hello></Hello>
      <Random></Random>
      <Random></Random>
    </>
  )
}

export default App
