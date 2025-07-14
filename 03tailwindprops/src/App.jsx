import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
let myobj = {
  username : "hitesh",
  age:21
}

  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Tailwind css</h1>
      <Card channel="chaiaurcode"  btntext = "click me"/>
      <Card channel="gokul"/>
    </>
  )
}

export default App
