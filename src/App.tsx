import React from 'react';

import Navbar from "./components/Navbar";
import InputTask from './components/InputTask';
import TaskList from './components/TaskList';


import { useState } from 'react';
import './styles/App.css';



const App= () => {
  const [inputs, setInputs]=useState<string[]>([]);

  const onHandleInput=(value:string)=>{
    setInputs([...inputs,value]);

  }

  return (
    <div className='app'>
      <div className="w-966 mx-auto my-0 max-sm:w-full max-sm:px-4">
        <Navbar/>
        <div className='mt-20 w-800 mx-auto  max-sm:w-full '>
          <InputTask onHandleInput={onHandleInput}/>
        </div>
        <hr className='w-full h-2 mt-10' />
        <TaskList taskInputs={inputs}/>
      </div>
    </div>
  )
}

export default App;


