import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      
    </div>
  );
}

function Counter(){
  const [count, setCount]= useState(1);

  const increaseCount=()=>setCount(count+1);
  const decreaseCount=()=>setCount(count-1);
  const resetCount=()=>setCount(0);
  
return (

  <div>
    <h1>Count:{count} </h1> 
    <button className='increase-button' onClick={increaseCount}>Increase</button>
    <button className='decrease-button' onClick={decreaseCount}>Decrese</button>
    <button className='reset-button' onClick={resetCount}>Reset</button>

  </div>
)
}

export default App;
