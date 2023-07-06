import React from 'react';

import Navbar from "./components/Navbar";
import InputTask from './components/InputTask';
import TaskList from './components/TaskList';


import { useState } from 'react';
import './styles/App.css';



const App= () => {
  const [trigger, setTrigger]=useState<boolean>(true);

  const onTriggerUpdate=(value:boolean)=>{
    setTrigger(trigger=>!trigger); 
  }

  console.log('a')

  return (
    <div className='app'>
      <div className="w-966 mx-auto my-0   max-md:w-full max-md:px-4 md:px-4">
        <Navbar/>
        <div className='mt-20 w-800 mx-auto  max-md:w-full  '>
          <InputTask onTriggerUpdate={onTriggerUpdate}/>
        </div>
        <hr className='w-full h-2 mt-10' />
        <TaskList onTriggerUpdate={onTriggerUpdate}/>
      </div>
    </div>
  )
}

export default App;


