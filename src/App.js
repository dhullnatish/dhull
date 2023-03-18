import logo from './logo.svg';
import { useState } from 'react';
import './App.css';


function App() {
 
  const[count,setcount]=useState(0);
  function decreaseHandler()
  {  
    setcount(count-1);
  }
  function increaseHandler()
  {
    setcount(count+1);
  }
  function resetHandler()
  {
    setcount(0);
  }
  return (
  
    <div className=" flex flex-col justify-center text-center items-center bg-slate-700 shadow-lg rounded-md  h-[100vh] w-[100vw]">
      <div className=' font-serif  justify-center items-center text-white my-6'>Increment and decriment</div>
      <div className=' my-6 flex bg-white text-black w-32 h-8'>
      <button onClick={decreaseHandler} className=' cursor-pointer border-r-2 w-10 items-center justify-center text-center'>-</button>
      <div className=' w-10'>{count}</div>
      <button onClick={increaseHandler} className=' border-l-2 w-10 cursor-pointer'>+</button>
      </div>
      <div><button onClick={resetHandler} className=' flex justify-center items-center bg-white cursor-pointer text-black my-6 w-20 shadow-md rounded-md font-serif hover:bg-slate-600 hover:text-white '>reset</button></div>
    </div>
  );
}

 