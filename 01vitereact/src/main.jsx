// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

import React from 'react'
import ReactDOM from 'react-dom/client'


import App from './App.jsx'

function Myapp(){
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}


// const reactElement={
//     type: 'a',
//     props:{
//         href:'https://google.com',
//         target: '_blank'
//     },
//     Children: 'click me to visit google'

// }

const anotherElement =(
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser="chai aur code"
const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google',
  anotherUser
)
 ReactDOM.createRoot(document.getElementById('root')).render(
    
  reactElement
    // <Myapp />
    //Myapp()
    //anotherElement
  
  
)
