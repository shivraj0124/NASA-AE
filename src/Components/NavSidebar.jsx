import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineHome } from 'react-icons/hi'
import { BiImage, BiMenuAltRight } from 'react-icons/bi'
import { BsCamera, BsGithub } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import ObjHook from './ObjContext'
function NavSidebar() {
    const [nav, setNave] = useState(false)
    const handleNav = () => {
        setNave(!nav)
    }
    const {fetchData}=ObjHook()
  
    const navigate=useNavigate()
    return (
        <div className='z-0'>
            <div className='z-20 md:hidden w-[100%] h-[70px] flex flex-row justify-between px-2 py-4 text-2xl text-[#8e00fba6] bg-black'>
                <div className='flex flex-row cursor-pointer' onClick={()=> navigate('/')}>
                    <img className='w-[50px] rounded-[50%] bg-white' src={logo} alt="" />
                <h1 className='font-bold ml-2'>
                    NASA AE
                </h1>
                </div>
                <div onClick={handleNav}>
                    {!nav ?
                        <BiMenuAltRight size={28} />
                        :
                        <AiOutlineClose size={26} />
                    }
                </div>
            </div>
            <div className=''>
                <div className={nav ? 'w-[90%] md:w-[300px]  fixed top-0 left-0 h-[100vh] min-h-[700px] bg-slate-950 flex flex-col text-[#952be7a6] ease-in-out duration-700  p-4 z-30' : 'ease-in-out duration-800 left-[-100%]  md:bg-slate-950 md:flex md:flex-col md:text-[#952be7a6] min-h-[700px] h-[100vh] md:p-4 md:w-[300px] fixed top-0 md:left-0 z-30'} onClick={handleNav}>
                    <div className='flex flex-row cursor-pointer' onClick={() => navigate('/')} >
                        <img className='w-[50px] rounded-[50%] bg-white' src={logo} alt="logo" />
                    <h1 className='ml-2 font-semibold text-3xl text-[#8e00fba6]'>NASA AE</h1>
                    </div>
                    <div className='flex flex-col w-[100%] p-4 '>
                        <li className='flex flex-row pt-4 font-semibold hover:text-white cursor-pointer' onClick={() => navigate('/')} >
                            <HiOutlineHome size={27} />
                            <h3 className='pl-4 '>Home</h3>
                        </li >
                        <li className='flex flex-row pt-4 font-semibold hover:text-white cursor-pointer' onClick={() => {
                            navigate('/img')
                            fetchData()
                        }}  >
                            <BiImage size={27} />
                            <h3 className='pl-4 ' >Image Library</h3>
                        </li>
                        <li className='flex flex-row pt-4 font-semibold hover:text-white cursor-pointer' onClick={() => navigate('/aPod')}  >
                            <BsCamera size={27} />
                            <h3 className='pl-4 ' >Astronomy Picture OF the day</h3>
                        </li>

                        <hr className=' h-[2px] mt-8 w-[100%] bg-[#7b14c9a6] border-none' />
                    </div>
                    <div className='p-4'>
                        
                        <Link to='https://github.com/shivraj0124' className='flex flex-row pt-4 font-semibold hover:text-white cursor-pointer'>
                            <BsGithub size={25} />
                            <h3 className='pl-4 '>Github</h3>
                        </Link>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default NavSidebar
