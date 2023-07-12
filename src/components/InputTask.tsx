import React from 'react'
import { useState ,useRef, KeyboardEvent} from 'react';


interface MyComponentProps {
  onTriggerUpdate: (value: boolean) => void;
}



const InputTask :React.FC<MyComponentProps> = ({ onTriggerUpdate }) => {
  const [task, setTask]=useState('');

  const inputRef=useRef<HTMLInputElement>(null);

  const onInputValidation=()=>{

    if(task.trim().length===0 ){ 
      if(inputRef.current){
        inputRef.current.focus();
      }
    }else{
      onAddToLocalStorage();
    }


  }


  const onAddToLocalStorage=()=>{

    let localData:string[]=[];
    try {
      const storedData = localStorage.getItem('tasks');
      if (storedData) {
        localData = JSON.parse(storedData);
      }
    }catch{
      console.log('a');
    }

    localData.push(task);

    localStorage.setItem('tasks',JSON.stringify(localData));
    onTriggerUpdate(true);
    setTask('');

  }

  const handleKeyDown=(e: KeyboardEvent<HTMLInputElement>)=>{
    if (e.key === 'Enter') {
     
      e.preventDefault(); 
      onInputValidation();
      
    }
  }


  return (
    <div className="mx-auto my-0 h-12 relative ">
      <input 
      type="text" 
      className="w-full h-full  border-0 rounded-20 focus:outline-none px-6 capitalize"
      onChange={e=>{
        setTask(e.target.value);
      }}
      value={task}
      onKeyDown={handleKeyDown}
      ref={inputRef}
      placeholder='Enter the task'
      />
      <button 
      className="bg-gray31 w-36 h-full absolute top-0 -right-2 border-0 rounded-20 text-white capitalize" 
      onClick={e=>{
        onInputValidation()
      }}
      
      > Add task</button>
    </div>
  )
}



export default InputTask