import React from 'react'
import { useState } from 'react';


interface MyComponentProps {
  onHandleInput: (value: string) => void;
}



const InputTask :React.FC<MyComponentProps> = ({ onHandleInput }) => {
  const [task, setTask]=useState('');

  

  return (
    <div className="mx-auto my-0 h-12 relative ">
      <input 
      type="text" 
      className="w-full h-full  border-0 rounded-20 focus:outline-none px-6 capitalize"
      onChange={e=>{
        setTask(e.target.value);
      }}
      value={task}
      />
      <button 
      className="bg-gray31 w-36 h-full absolute top-0 right-0 border-0 rounded-20 text-white capitalize" 
      onClick={e=>{
        onHandleInput(task);
        setTask('');
      }}
      > Add task</button>
    </div>
  )
}



export default InputTask