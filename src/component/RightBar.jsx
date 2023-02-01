import React from 'react'
import {BsCaretDown} from 'react-icons/bs'

const RightBar = () => {
  return (
    <div className='w-[6%] h-screen border-l'>
      <div className='w-full h-full flex flex-col justify-center items-center space-y-5'>
            <div className='w-12 h-12 rounded-full drop-shadow-xl '>
                  <img src="../../image/profile1.jpg" alt="" className='w-full h-full object-cover border-4 rounded-full border-stone-300' />
            </div>
            <div className='w-12 h-12 rounded-full drop-shadow-xl '>
                  <img src="../../image/profile2.jpg" alt="" className='w-full h-full object-cover border-4 rounded-full border-stone-300' />
            </div>
            <div className='w-12 h-12 rounded-full drop-shadow-xl '>
                  <img src="../../image/profile3.jpg" alt="" className='w-full h-full object-cover border-4 rounded-full border-stone-300' />
            </div>
            <div className='w-12 h-12 rounded-full drop-shadow-xl '>
                  <img src="../../image/profile4.jpg" alt="" className='w-full h-full object-cover border-4 rounded-full border-stone-300' />
            </div>
            <div className='w-12 h-12 rounded-full drop-shadow-xl '>
                  <img src="../../image/profile5.jpg" alt="" className='w-full h-full object-cover border-4 rounded-full border-stone-300' />
            </div>
            <div className='text-center space-x-1 bg-[#ffc700] p-2 rounded-md text-white'>
                  <BsCaretDown />
            </div>
      </div>
    </div>

  )
}

export default RightBar