import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function LoadSkeleton() {
    return (
        <div className='z-10' >
            <SkeletonTheme style={{ backgroundColor: 'gray' }} >
                <div className='bg-gradient-to-b from-[#3b0764] to-slate-950 p-5 h-[450px] rounded-md '>
                    <div className='w-[100%]'>
                    <Skeleton baseColor='#020617' highlightColor='#3b0764' width={[250]} height={200} />
                    <Skeleton width={150} height={30} baseColor='#020617' highlightColor='#3b0764' />
                    </div>
                    <div className='h-[40%] flex flex-col justify-between mt-4'>
                        <Skeleton baseColor='#020617' highlightColor='#3b0764' width={220} height={30} />
                        <Skeleton baseColor='#020617' highlightColor='#3b0764' width={100} height={30} />
                    </div>
                </div>
            </SkeletonTheme>
        </div>
    )
}

export default LoadSkeleton