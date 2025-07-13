import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
let [counter,setcounter] = useState(15)

// let counter = 5
const addvalue = () => {
  counter = counter + 1;
  console.log(counter);
  if(counter >= 0 && counter <=20){
    setcounter(counter)
  }
}

const removevalue= () => {
  counter = counter - 1;
  if(counter >= 0 && counter <=20){
    setcounter(counter)
  } 
}
  return (
    
    <>
      <h1>Chai aur code</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
