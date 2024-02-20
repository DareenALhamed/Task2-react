import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){

  let [count,setCount] = useState(0);
  
  const counters =  ()=>{
    setCount(count+1);
    
  }

  return(

    <>
    <button onClick={counters}>Dareen AL-Hamed    {count}</button>
    </>
  )
}

export default App
