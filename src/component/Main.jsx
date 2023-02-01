import React from 'react'
import { AiOutlineMessage, AiOutlineStar } from 'react-icons/ai'
import {BiSearchAlt} from 'react-icons/bi'
import { FiBell } from 'react-icons/fi'
import {CiLocationOn} from 'react-icons/ci'


const Main = () => {
  return (
    <div className='w-[79%] font-barlow h-screen'>
      <div className='top-bar p-2 flex justify-between' >
            <div className='search w-1/2 flex items-center spa border rounded-full px-3'>
                  <BiSearchAlt />
                  <input type="text" placeholder='Search place' className='bg-transparent outline-0 p-2'/>
            </div>
            <div className='profile flex items-center space-x-5'>
                  <FiBell size={'1.5rem'} className='text-gray-500'/>
                  <AiOutlineMessage />
                  <div className='flex items-center space-x-2'>
                        <img src="../../image/profile1.jpg" alt="" className='w-12 h-12 rounded-full object-cover border-4'/>
                        <div>
                              <h1 className='text-sm'>Sofi</h1>
                              <p className='text-xs text-gray-400'>Sofi@gmail.com</p>
                        </div>

                  </div>

            </div>

      </div>
      <div className='flex justify-between w-full h-[48%] p-4'>
            <div className='drop-shadow-xl relative'>
                  <img src="../../image/hcm.jpg" alt="" className='h-full w-full rounded-2xl object-cover'/>
                  <div className='absolute bottom-0 w-full h-1/2 bg-gradient-t--t from-stone-900 rounded-2xl'></div>
                  <div className='absolute bottom-5 p-2 w-full font-light space-x-1 text-white'>
                        <h1>consectetur lit.</h1>
                        <div className='flex space-x-2 '>
                              <p className='text-xs flex items-center font-light space-x-1'>
                                    <CiLocationOn />
                                    <span>Lorem, ipsum.</span>
                              </p>
                              <p className='flex items-center space-x-1 text-xs font-light'>
                                    <AiOutlineStar />
                                    <span>4.5</span>
                              </p>
                        </div>
                  </div>
            </div>
            <div className='drop-shadow-xl relative'>
                  <img src="../../image/hcm.jpg" alt="" className='h-full w-full rounded-2xl object-cover'/>
                  <div className='absolute bottom-0 w-full h-1/2 bg-gradient-t--t from-stone-900 rounded-2xl'></div>
                  <div className='absolute bottom-5 p-2 w-full font-light space-x-1 text-white'>
                        <h1>consectetur lit.</h1>
                        <div className='flex space-x-2'>
                              <p className='text-xs flex items-center font-light space-x-1'>
                                    <CiLocationOn />
                                    <span>Lorem, ipsum.</span>
                              </p>
                              <p className='flex items-center space-x-1 text-xs font-light'>
                                    <AiOutlineStar />
                                    <span>4.5</span>
                              </p>
                        </div>
                  </div>
            </div>
            <div className='drop-shadow-xl relative'>
                  <img src="../../image/hcm.jpg" alt="" className='h-full w-full rounded-2xl object-cover'/>
                  <div className='absolute bottom-0 w-full h-1/2 bg-gradient-t--t from-stone-900 rounded-2xl'></div>
                  <div className='absolute bottom-5 p-2 w-full font-light space-x-1 text-white'>
                        <h1>consectetur lit.</h1>
                        <div className='flex space-x-2'>
                              <p className='text-xs flex items-center font-light space-x-1'>
                                    <CiLocationOn />
                                    <span>Lorem, ipsum.</span>
                              </p>
                              <p className='flex items-center space-x-1 text-xs font-light'>
                                    <AiOutlineStar />
                                    <span>4.5</span>
                              </p>
                        </div>
                  </div>
            </div>
            <div className='drop-shadow-xl relative'>
                  <img src="../../image/hcm.jpg" alt="" className='h-full w-full rounded-2xl object-cover'/>
                  <div className='absolute bottom-0 w-full h-1/2 bg-gradient-t--t from-stone-900 rounded-2xl'></div>
                  <div className='absolute bottom-5 p-2 w-full font-light space-x-1 text-white'>
                        <h1>consectetur lit.</h1>
                        <div className='flex space-x-2'>
                              <p className='text-xs flex items-center font-light space-x-1'>
                                    <CiLocationOn />
                                    <span>Lorem, ipsum.</span>
                              </p>
                              <p className='flex items-center space-x-1 text-xs font-light'>
                                    <AiOutlineStar />
                                    <span>4.5</span>
                              </p>
                        </div>
                  </div>
            </div>
           
      </div>
      <section className='h-[50%] 2xl:[40%] flex justify-center items-center py-2 m-2 '>
            <div className='bg-gray-100 rounded-2xl w-[50%] h-full m-2 space-y-3 2xl:space-y-5 flex flex-col justify-center'>
                  <div className='flex justify-between px-2'>
                        <h1 className='text-xl 2xl:text-4xl'>Best Trips</h1>
                        <button className='bg-[#ffc700] px-5 py-2 rounded-md text-white drop-shadow-xl'>Filter</button>
                  </div>
                  <div className='flex justify-between items-center p-2'>
                        <img src="../../image/danang.jpg" alt="" className='h-14 w-14 object-cover rounded-lg' />
                        <div className='space-y-2'>
                              <h1>Lorem ipsum dolor sit.</h1>
                              <div className='flex space-x-5 items-center'>
                                    <p className='text-xs flex items-center font-light'>
                                          <CiLocationOn />
                                          <span>Lorem, ipsum.</span>
                                    </p>
                                    <p className='text-xs flex items-center font-light'>
                                          <AiOutlineStar />
                                          <span>4.5</span>
                                    </p>
                              </div>
                        </div>
                              <h1 className='font-semibold'>10%<span className='text-xs'>day</span></h1>
                  </div>
                  <div className='flex justify-between items-center p-2'>
                        <img src="../../image/danang.jpg" alt="" className='h-14 w-14 object-cover rounded-lg' />
                        <div className='space-y-2'>
                              <h1>Lorem ipsum dolor sit.</h1>
                              <div className='flex space-x-5 items-center'>
                                    <p className='text-xs flex items-center font-light'>
                                          <CiLocationOn />
                                          <span>Lorem, ipsum.</span>
                                    </p>
                                    <p className='text-xs flex items-center font-light'>
                                          <AiOutlineStar />
                                          <span>4.5</span>
                                    </p>
                              </div>
                        </div>
                              <h1 className='font-semibold'>10%<span className='text-xs'>day</span></h1>
                  </div>
                  <div className='flex justify-between items-center p-2'>
                        <img src="../../image/danang.jpg" alt="" className='h-14 w-14 object-cover rounded-lg' />
                        <div className='space-y-2'>
                              <h1>Lorem ipsum dolor sit.</h1>
                              <div className='flex space-x-5 items-center'>
                                    <p className='text-xs flex items-center font-light'>
                                          <CiLocationOn />
                                          <span>Lorem, ipsum.</span>
                                    </p>
                                    <p className='text-xs flex items-center font-light'>
                                          <AiOutlineStar />
                                          <span>4.5</span>
                                    </p>
                              </div>
                        </div>
                              <h1 className='font-semibold'>10%<span className='text-xs'>day</span></h1>
                  </div>
            </div>
            <div className='w-full h-full m-2 relative'>
                  <img src="../../image/road.jpg" alt="" className='w-full h-full object-cover rounded-2xl'/>
                  <div className='absolute p-2 bottom-0 h-4/5 bg-gradient-to-t from-stone-800 rounded-2xl'></div>
                  <div className='p-5 space-y-2 absolute w-full h-full bottom-0 flex flex-col justify-center items-center text-white'>
                        <h1 className='text-5xl font-bold font-branch'>Road from Island To Island</h1>
                        <p className='flex items-center text-light space-x-1'><span>from</span><CiLocationOn /><span>Seychelles</span></p>
                        <p className='flex items-center text-light space-x-1'><span>to</span><CiLocationOn /><span>Madives</span></p>
                        <button className='bg-[#ffc700] px-5 py-2 rounded-md'>Book Now</button>
                  </div>
            </div>
      </section>
      
    </div>
      
  )
}

export default Main