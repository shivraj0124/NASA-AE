import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import ObjHook from './ObjContext'
import HorizontalScrollbarExample from './HorizontalScrollbarExample'
import LoadSkeleton from './LoadSkeleton'
import { BiSearch } from 'react-icons/bi'
import axios from 'axios'
function Image_Library() {
    const { changeInfo, search, changeSearch, myData,fetchData,load,setLoad } = ObjHook()
    const navigate = useNavigate()
    const [current,setCurrent]=useState()
    const separateTheDate = (dateCreated) => {
        const [datePart, timePart] = dateCreated.split('T');
        return datePart
    }
    useEffect(()=>{
        fetchData(search)
    },[search])

    const handleClick = (value) => {
        changeInfo(value)
    }

    const handleSearchClick=(e)=>{
        e.preventDefault()
        changeSearch(current)
    }
    
    return (
        <div>
            <div className='md:absolute md:left-[300px] top-0 w-[100%] md:w-[80%] min-h-screen h-max bg-gradient-to-r from-[#3b0764] to-slate-950 flex flex-col  items-center  text-white '>
                <form className='w-[100%] flex flex-row border-1 border-[#3b0764] justify-between text-white bg-black max-md:h-10 h-16 pr-2 sticky top-[-1px] z-20' onSubmit={handleSearchClick}>
                    <div className='flex flex-row pl-10 w-[100%]'>
                        <li className='left-24 list-none flex items-center'>
                            <BiSearch size={23} />
                        </li>
                        <input className='py-2 pr-4 pl-2 w-[100%] bg-black border-3 focus:outline-none placeholder:text-white' type="text" value={current} onChange={(e) => setCurrent(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))} placeholder='Search here' required />
                    </div>
                    <div className=' flex flex-col  w-max items-center justify-center' >
                        <button className='px-3 md:px-5 py-1 md:py-2 bg-[#3b0764] rounded-md ' type='submit' >Search</button>
                    </div>

                </form>
                <HorizontalScrollbarExample />

                <div className='w-[100%] grid max-md:grid-rows-1 md:grid-cols-2 lg:grid-cols-3  gap-8 p-5'>
                    {load ? <><LoadSkeleton /><LoadSkeleton /><LoadSkeleton /><LoadSkeleton /><LoadSkeleton /><LoadSkeleton /></> :
                        myData?.map((result, key) => {
                            return (
                                <div className='bg-gradient-to-b from-[#3b0764] to-slate-950 p-5 h-[450px] rounded-md text-gray-300 cursor-pointer' key={key} onClick={() => {
                                    handleClick(result)
                                    navigate('/img/details')
                                }}>

                                    <img className='h-[60%] w-[100%] rounded-md' src={result.links[0].href} alt="" />
                                    <h1 className='text-gray-500 mt-2'>{
                                        separateTheDate(result.data[0].date_created)}</h1>
                                    <div className='h-[32%] flex flex-col justify-between mt-2'>
                                        <h1 className='text-bold mt-[-3] hover:text-purple-800 '>{result.data[0].title}</h1>
                                        <h3 className='bottom-0 hover:text-purple-200 hover:underline hover:underline-offset-2 bg-gradient-to-b from-slate-800 to-purple-950 w-max px-5 py-2 rounded-md '>Details</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>

    )
}

export default Image_Library
