import React from 'react'

const SubscribeUi = () => {
  return (
    <>
    <div className='w-screen h-screen flex flex-col justify-center items-center text-white'>
        <div className='mb-12 text-center text-white'>
                <p className='text-lg'>CHOOSE A PLAN AND</p>
                <p className='text-lg'>ENJOY ALL <span className='font-semibold text-2xl'>SURAVEE</span> PREMIUM CONTENTS</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-[80%]'>
            {
                plans.map((item:any)=>(
                    <div key={item.duration} className='border-2 border-red-600 rounded-xl overflow-hidden'>
                        <p className='text-center bg-red-600 text-white font-semibold text-2xl py-3'>{item.duration}</p>
                        <ul className='text-white p-8 list-disc leading-9'>
                            <li>Ad Free Premium Access</li>
                            <li>Bangladesh Only</li>
                            <li>Offline Download for App</li>
                            <li>4-Device Login</li>
                            <li>1 Simultaneous Stream</li>
                        </ul>
                        <div className='text-center mb-4'>
                            <button className='border border-red-600 px-4 py-2 rounded-full '>Subscribe now</button>
                        </div>
                    </div> 
                ))
            }
        </div>
    </div>
    </>
  )
}

export default SubscribeUi

const plans = [
    {
        duration:'6 Months',
        path:'/'
    },
    {
        duration:'12 Months',
        path:'/'
    },
    {
        duration:'Yearly Plus',
        path:'/'
    },
]