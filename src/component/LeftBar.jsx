import React from 'react'
import {MdExplore} from 'react-icons/md'
import {AiOutlineHeart, AiOutlineCalendar, AiOutlineSetting} from 'react-icons/ai'
import {FiUser, FiUsers} from 'react-icons/fi'
import {CiLogin} from "react-icons/ci"

const LeftBar = () => {
  return (
    <div className='h-screen w-[15%] rounded-r-3xl font-body relative'>
      <div className='w-full h-full flex flex-col items-center p-5'>
            <section className='p-8 w-full space-y-5'>
                  <h1 className='text-2xl font-display'>Traveler</h1>
                  <div className='space-y-4'>
                        <p className='text-xs'>Menu</p>
                        <ul className='space-y-4'>
                              <li className='flex items-center space-x-4 text-gray-600 text-sm text-white bg-[#ffc700] p-2 rounded-md'>
                                    <MdExplore size={'1.2rem'}/>
                                    <span>Browse</span>
                              </li>
                              <li className='flex items-center space-x-4 text-gray-600 text-sm'>
                                    <AiOutlineHeart size={'1.2rem'}/>
                                    <span>Favorite</span>
                              </li>
                              <li className='flex items-center space-x-4 text-gray-600 text-sm'>
                                    <AiOutlineCalendar size={'1.2rem'}/>
                                    <span>Schedule</span>
                              </li>
                        </ul>
                  </div>
                  <div className='space-y-4'>
                        <p className='text-xs'>Social</p>
                        <ul className='space-y-4'>
                              <li className='flex items-center space-x-4 text-gray-600 text-sm'>
                                    <FiUser size={'1.2rem'}/>
                                    <span>
                                          Friends
                                    </span>
                              </li>
                              <li className='flex items-center space-x-4 text-gray-600 text-sm'>
                                    <FiUsers size={'1.2rem'}/>
                                    <span>
                                          Parties
                                    </span>
                              </li>
                        </ul>
                  </div>
                  <div className='space-y-4'>
                        <p className='text-xs'>General</p>
                        <ul className='space-y-4'>
                              <li className='flex items-center space-x-4 text-gray-600 text-sm'>
                                    <AiOutlineSetting size={'1.2rem'}/>
                                    <span>Setting</span>
                              </li>
                              <li className='flex items-center space-x-4 text-gray-600 text-sm'>
                                    <CiLogin size={'1.2rem'}/>
                                    <span>Logout</span>
                              </li>
                        </ul>
                  </div>
            </section>
            <div className='absolute bottom-0 w-full p-5 rounded-md bg-gray-100'>
                  <h1 className='text-2xl'>50% DISCOUNT</h1>
                  <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, beatae.</p>
            </div>
      </div>
    </div>
  )
}

export default LeftBar