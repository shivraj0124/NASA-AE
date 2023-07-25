import React from 'react';
import ObjHook from './ObjContext';
const HorizontalScrollbarExample = () => {
    const {changeSearch,fetchData,search} = ObjHook()
    let items = ['Sun', 'Earth', 'Supernova', 'Galaxy', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupitor', 'Saturn','Neptune', 'BlackHole', 'Comet', 'Nebulae', 'Satellites','Planets','Asteroid']
 
    return (
        <div className="overflow-x-auto bg-gradient-to-l from-[#3b0764] to-slate-950 w-[100%] border-t-2 border-gray-500">
            <ul className='flex gap-2 px-2 md:px-1'>
                {items.map((item, key) => {
                    return <li onClick={(e) =>{ changeSearch(e.target.textContent)}} className='w-[100%] py-2 text-center  hover:underline hover:underline-offset-2 cursor-pointer' key={key}>{item}</li>
                })
                }
            </ul>

        </div>
    );
};

export default HorizontalScrollbarExample;