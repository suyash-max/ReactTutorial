import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [count , setcount] = useState(15);
  const addvalue = () =>{
    console.log("clicked" , count);
    count = count+1;
    if(count >20){
      count =  20 ;
      setcount(count);
    }
    else{
      setcount(count);
    }
   
  
  }
  const removeValue = () =>{
    console.log("clicked" , count);
    count = count - 1;
    if(count<0){
      count = 0;
      setcount(0);
    }
    else setcount(count);
    
  }
  return (
    <>
     <h1>Chai Aur react</h1>
     <h2>Counter Value : {count}</h2>
      <button onClick={addvalue}>
        Add Value
      </button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>

    </>
  )
}

export default App
