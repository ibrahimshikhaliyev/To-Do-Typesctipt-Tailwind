import React from 'react'
import Task from './Task';


interface MyComponentProps {
  onTriggerUpdate: (value: boolean) => void;
}

const TaskList:React.FC<MyComponentProps> = ({ onTriggerUpdate }) => {

  let tasksLocal: string[] =JSON.parse(localStorage.getItem('tasks')|| 'null') || [];
  
  console.log('a')

  let taskL=tasksLocal.map((task,id)=>{
    return <Task key={id} taskName={task} itemKey={id} onTriggerUpdate={onTriggerUpdate}/>
  })
  return (
    <div className="flex flex-col gap-8 mt-20 pb-24">
        {taskL}
  </div>
  )
}

export default TaskList;






