import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setCounter]=useState(15)

  // let counter=15

  const incval =()=>{
    console.log("clicked",counter);
    
    // counter=counter+1;
    setCounter(prevcounter => prevcounter+1 )
    setCounter(prevcounter=>prevcounter+1)
    setCounter(prevcounter=>prevcounter+1)
    setCounter(prevcounter=>prevcounter+1)
  }

   const decval =()=>{
    console.log("clicked",counter);
    
    counter=counter-1;
    setCounter(counter)
  }
 
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>counter value: {counter} </h2>

    <button
    onClick={incval}
    >INCREASE:  {counter} </button>
    <br />
    <button
    onClick={decval}
    >DECREASE:    {counter}</button>
    </>
  )
}

export default App
