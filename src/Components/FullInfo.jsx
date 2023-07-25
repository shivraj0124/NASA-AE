import React from 'react'
import ObjHook from './ObjContext';
function FullInfo() {
    const { fullInfo } = ObjHook()
    if (!fullInfo || fullInfo.length === 0) {
        return <p>No data available.</p>;
    }
    const separateTheDate = (dateCreated) => {
        const [datePart, timePart] = dateCreated.split('T');
        return datePart
    }
    function urlIfy(text) {
        var urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.replace(urlRegex, function (url) {
            return ``
        })
    }
    return (
        <div >


            <div className='md:absolute md:left-[300px] top-0 w-[100%] md:w-[80%] min-h-screen h-max bg-gradient-to-r from-[#3b0764] to-slate-950 flex flex-col  items-center text-center text-white p-5'>
                <div className='flex max-md:flex-col md:flex-row justify-between w-[100%]'>
                    <div className='md:w-[100%]'>
                        <img className='md:w-[100%] md:pr-5' src={fullInfo.links[0].href} />
                    </div>
                    <div className='flex flex-col items-start bg-gradient-to-l from-[#2a0e40] to-slate-950 max-md:px-4 max-md:pt-5 text-start  pb-4 pr-2 w-[100%] md:text-xl max-md:text-sm min-w-[468px]:text-xl p-5'>
                        <h1 className='text-2xl font-bold'>{fullInfo.data[0].title}</h1>
                        <h1 className='text-gray-500'> {separateTheDate(fullInfo.data[0].date_created)}</h1>
                        <h1 className='text-xl text-gray-400 mt-4 '>Secondary Creator: <span className='text-white text-lg'>{fullInfo.data[0].secondary_creator}</span></h1>
                        <h1 className='text-xl text-gray-400 mt-4'> NASA ID: <span className='text-white text-lg'>{fullInfo.data[0].nasa_id}</span></h1>
                        <h1 className='text-xl text-gray-400 mt-4'>Center: <span className='text-white text-lg'>{fullInfo.data[0].center}</span></h1>
                        <p className='mt-5 text-lg'>
                        {urlIfy(fullInfo.data[0].description)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullInfo
