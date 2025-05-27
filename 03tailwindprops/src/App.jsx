import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'
function App(props) {
  console.log(props);
  
  const [count, setCount] = useState(0)
  // let myobj={
  //   username:"hiteshsir",
  //   age:21
  // }
  let newArr =[1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>TAILWIND CSS TEST</h1>
         
         <Card username="chaiaurcode" someobj={newArr}/>
         <Card username="shaktiman" />
    </>
  )
}

export default App
