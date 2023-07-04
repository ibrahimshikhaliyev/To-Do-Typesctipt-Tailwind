
import React from 'react'
import { AiFillDelete } from 'react-icons/ai';


interface MyComponentProps {
  taskName:string
}

const Task : React.FC<MyComponentProps> = ({ taskName }) => {
  return (
    <div className="w-full h-10 relative">
    <div className="w-full h-full rounded-xl bg-very-dark-gray border-0 px-6 capitalize flex items-center text-white ">{taskName}</div>
    <div className="h-full w-10 bg-white rounded-xl absolute top-0 right-0 flex items-center justify-center cursor-pointer"> <AiFillDelete/> </div>
</div>
  )
}

export default Task;
