
import React from 'react'
import { useState ,useRef} from 'react';
import { AiFillDelete , AiFillEdit,AiFillCheckCircle} from 'react-icons/ai';


interface MyComponentProps {
  onTriggerUpdate: (value: boolean) => void;
  taskName:string,
  itemKey:number
}

const Task : React.FC<MyComponentProps> = ({ taskName,itemKey,onTriggerUpdate}) => {

  const [editedTask,setEditedTask]=useState<string>(taskName);
  const [editing,setEditing]=useState<boolean>(false);
  const[done,setDone]=useState<boolean>(true);
  const taskRef=useRef<HTMLInputElement>(null);

  const onDeleteFromLocalStorage=(index:number)=>{
    const tasksLocal: string[] =JSON.parse(localStorage.getItem('tasks')|| 'null');
   
    let filteredLocalData=tasksLocal.filter((task,id)=>id!==index);
    localStorage.setItem('tasks',JSON.stringify(filteredLocalData));
    onTriggerUpdate(true)
  }

  const onEditFromLocalStorage=(index:number)=>{
    const tasksLocal: string[] =JSON.parse(localStorage.getItem('tasks')|| 'null');
   
    let filteredLocalData=tasksLocal.map((task,id)=>{
      if(id===index){
        return editedTask;
      }else {
        return task;
      }
    });

    localStorage.setItem('tasks',JSON.stringify(filteredLocalData));
    if(taskRef.current){
      taskRef.current.readOnly=true;
    }

    setDone(true);
    setEditing(false);
    onTriggerUpdate(true)
  }



  const allowEdit=()=>{
    setEditing(true)
    setDone(false)
    if(taskRef.current){
      taskRef.current.readOnly=false;
      taskRef.current.focus();

    }
  }



  return (
    <div className="w-full h-10 relative">
      <input 
        className="w-full h-full rounded-xl bg-very-dark-gray border-0 px-6 capitalize flex items-center text-white focus:outline-none" value={editedTask} 
        readOnly={true}
        ref={taskRef}
        onChange={e=>{
          setEditedTask(e.target.value);
        }}
        />
      <div 
        className="h-full w-10 bg-white rounded-xl absolute top-0 right-0 flex items-center justify-center cursor-pointer" 
        onClick={e=>{
          onDeleteFromLocalStorage(itemKey)
        }}
      > <AiFillDelete/> </div>



        {
          done?<div 
          className="h-full w-10 bg-white rounded-xl absolute top-0 right-12 flex items-center justify-center cursor-pointer" 
          onClick={e=>{
            allowEdit();
          }}
          > <AiFillEdit/> </div>:null
        }
        

        {
          editing? <div 
          className="h-full w-10 bg-white rounded-xl absolute top-0 right-12 flex items-center justify-center cursor-pointer" 
          onClick={e=>{
            onEditFromLocalStorage(itemKey);
          }}
          > <AiFillCheckCircle/> </div>:null
        }
     



</div>
  )
}

export default Task;
