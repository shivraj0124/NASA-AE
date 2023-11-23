import React from 'react'
import img1 from '../assets/image_library.png'
import img2 from '../assets/aPod.png'
import { useNavigate } from 'react-router-dom'
function Home() {
    const navigate=useNavigate()
  return (
    <div>
          <div className='md:absolute md:left-[300px] top-0 w-[100%] md:w-[80%] min-h-screen h-max bg-gradient-to-r from-[#3b0764] to-slate-950 flex flex-col  items-center text-center text-white p-5'>
                  <>
                      <div className='flex flex-col justify-between px-5'>
                          <h1 className='text-4xl font-bold mt-5  text-shadow'>Explore the NASA images and get information</h1>
                      <p className='mt-4 text-2xl text-gray-500'>This website is built with REST APIs from <span className='text-purple-800'>api.nasa.gov</span></p>

                      </div>
                      <img className='max-md:w-[90%] md:w-[50%] lg:w-[30%] mt-5 rounded-md lg:top-6' src="https://images-assets.nasa.gov/video/NHQ_2019_0311%E2%80%A6on/NHQ_2019_0311_Go%20Forward%20to%20the%20Moon~thumb.jpg" alt="" />
                      <div className='mt-8'>
                          <h1 className='text-3xl font-bold'>About This App</h1>
                          <p className='mt-4 px-4 xl:px-32 text-2xl text-gray-500'>This website contains data fetch from NASA APIs.It contains Image Library by NASA and Astronomy Picture of the Day.</p>
                      </div>
                      <div className='mt-5 flex flex-col md:flex-row md:justify-between md:w-[100%] lg:w-[80%] xl:w-[60%]'>
                          <div className='w-[100%] md:w-[300px] md:h-[400px] text-white p-4 bg-gradient-to-b from-[#3b0764] to-slate-950 rounded-md '>
                              <img className='w-[100%] h-[40%] rounded-md' src={img1} alt="" />
                              <div className='text-start mt-5 px-2 pb-1'>
                                  <h1 className='text-xl font-semibold '>NASA APIs Image Library</h1>
                                  <p className='mt-4' >You can get the various images of outer space,astronaut.You can read the description about it can also the details through link.</p>
                              <button className='mt-4 text-center p-2 bg-gradient-to-t from-[#3b0764] to-slate-800 px-5 rounded-md ' onClick={() => {
                                  navigate('/img')
                              }}>Check it Out</button>
                              </div>
                          </div>
                          <div className='w-[100%] md:w-[300px] md:h-[400px] text-white p-4 bg-gradient-to-b from-[#3b0764] to-slate-950 rounded-md max-md:mt-5'>
                              <img className='w-[100%] h-[40%] rounded-md' src={img2} alt="" />
                              <div className='text-start mt-5 px-2 pb-1'>
                                  <h1 className='text-xl font-semibold '>Astronomy Picture of the Day</h1>
                                  <p className='mt-4' >Each day new Image will appear along with the brief explanation written by professionals</p>
                              <button className='mt-4 text-center p-2 bg-gradient-to-t from-[#3b0764] to-slate-800 px-5 rounded-md' onClick={() => {
                                  navigate('/aPod')
                              }} >Check it Out</button>
                              </div>
                          </div>
                      </div>
                  </>
          </div>
    </div>
  )
}

export default Home
