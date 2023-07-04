import React from 'react'

// import  notePencil from '../assets/icons/NotePencil.svg'


const Navbar = () => {
  return (
    <div className='main w-full h-48 flex flex-col items-center pt-8 text-white '>
        <div  className='flex flex-row justify-between items-center '>
          <hr className='w-12 h-2 max-sm:w-4'/>
            <div className='text-6xl mx-6 max-sm:text-3xl'>TO-DO NOW</div>
          <hr className='w-12 h-2 max-sm:w-4'/>
        </div>
      
        <div className='flex flex-row mt-8 items-center '>
          <hr className='w-60 h-2 max-sm:w-28'/>
          {/* <div className='w-8 h-8 mx-6'><button><img src={notePencil} alt="" className='w-full h-full'/></button></div> */}
          <hr className='w-60 h-2 max-sm:w-28'/>
        </div>
    </div>
  )
}

export default Navbar