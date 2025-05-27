import { useState,useCallback } from 'react'

// import './App.css'

function App() {
  const [length,setlength]=useState(8)
  const [numberAlllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setpassword]=useState("")

  const passwordGenerator= useCallback(()=>{
    let pass=""
    let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAlllowed)str+="0123456789"
    if(charAllowed)str+="!@#$%^&*()_-+={[}]~`"

    for (let i = 1; i <= array.length; i++) {
      let char= Math.floor(Math.random()*str.length +1)

      pass=str.charAt(char)
      
    }
    setpassword(pass)

  },[length,numberAlllowed,charAllowed,setpassword])


  return (
    <>

     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-gray-500 bg-gray-700'>
          <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
          <input
           type="text" 
           value={password}
           className='outline-none w-full py-1 px-3 bg-white'
           placeholder='Password'
           readOnly
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0
          '>copy
          </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
           type="range"
           min={6}
           max={100}
           value={length}
           className='cursor-pointer'
            />
            <label htmlFor=""></label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
