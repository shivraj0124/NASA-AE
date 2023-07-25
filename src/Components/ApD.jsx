import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function ApD() {
    const [data, setData] = useState({})
    const [load, setLoad] = useState(true)
    const fetchData = async () => {
        await axios.get('https://api.nasa.gov/planetary/apod?api_key=ya75ab4N4fGgxBtL5T2rKTX398guaIXe9UnUvsdu').then((res) => {

            setData(res.data);
            setLoad(false)
            console.log(data);
        }).catch((err) => alert(err))
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>

            <div className='md:absolute md:left-[300px] top-0 w-[100%] md:w-[80%] min-h-screen h-max bg-gradient-to-r from-[#3b0764] to-slate-950 flex flex-col  items-center text-center text-white p-5'>
                <h1 className='text-3xl font-bold'>Astronomy Picture OF The Day</h1>

                <div className='flex max-md:flex-col md:flex-row justify-between w-[100%] mt-5'>
                    {load ?
                        <SkeletonTheme>
                            <div className='md:w-[100%]'>
                                <Skeleton baseColor='#020617' highlightColor='#2a0e40' width={347} height={200} borderRadius={0}/>
                            </div>
                            <div className='flex flex-col items-start bg-gradient-to-l from-[#2a0e40] to-slate-950 max-md:px-4 max-md:pt-5 text-start  pb-4 pr-2 w-[100%] md:text-xl max-md:text-sm min-w-[468px]:text-xl p-5 max-md:mt-5'>
                                <Skeleton baseColor='#020617' highlightColor='#2a0e40' width={300} height={40} />
                                <Skeleton baseColor='#020617' highlightColor='#2a0e40' width={140} height={30} />
                                <div className='mt-5'>
                                    <Skeleton baseColor='#020617' highlightColor='#2a0e40' width={250} height={200} />
                                </div>
                            </div>
                        </SkeletonTheme>
                        :
                        <>
                  <div className='md:w-[100%]'>
                      <img className='md:w-[100%] md:pr-5' src={data.hdurl} />
                  </div>
                  <div className='flex flex-col items-start bg-gradient-to-l from-[#2a0e40] to-slate-950 max-md:px-4 max-md:pt-5 text-start  pb-4 pr-2 w-[100%] md:text-xl max-md:text-sm min-w-[468px]:text-xl p-5'>
                      <h1 className='text-3xl font-bold'>{data.title}</h1>
                      <h1 className='text-cyan-500'> {data.date}</h1>                     
                      <p className='mt-5 text-lg'>
                          {data.explanation}
                      </p>
                  </div>
                        </>}
              </div>
            </div>
        </div>
    )
}

export default ApD
