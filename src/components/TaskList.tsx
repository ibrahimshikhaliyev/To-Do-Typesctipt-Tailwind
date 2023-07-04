import React from 'react'
import Task from './Task';

interface  MyComponentProps {
  taskInputs:string[];
}

const TaskList : React.FC<MyComponentProps> = ({ taskInputs }) => {

  let tasks=taskInputs.map((task,id)=>{
    return <Task key={id} taskName={task}/>
  })
  return (
    <div className="flex flex-col gap-8 mt-20">
        {tasks}
  </div>
  )
}

export default TaskList;






