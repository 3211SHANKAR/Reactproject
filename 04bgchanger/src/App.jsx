import {useState} from "react"

function App() {
  const [color,setcolor]=useState("olive")


  return (
    <>
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button 
          onClick={()=>setcolor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"red"}}
          >RED</button>
          <button 
          onClick={()=>setcolor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"green"}}
          >GREEN</button>
          <button
          onClick={()=>setcolor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"orange"}}
          >ORANGE</button>
          <button 
          onClick={()=>setcolor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"blue"}}
          >BLUE</button>
          <button 
          onClick={()=>setcolor("pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"pink"}}
          >PINK</button>
          <button 
          onClick={()=>setcolor("grey")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"grey"}}
          >GREY</button>
          <button 
          onClick={()=>setcolor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"black"}}
          >BLACK</button>

        </div>
      </div>
    </div>
    </>
  )
}

export default App
