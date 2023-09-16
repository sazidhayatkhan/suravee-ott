import HorizontalCard from '@/components/card/horizontalCard'
import React from 'react'

const OriginalSeries = () => {
  return (
    <div className='py-6 mx-4'>
        <p className='text-2xl font-semibold text-white'>সুরভী অরিজিনাল সিরিজ</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mr-4 mt-4'>
                {
                  originalSeriesList.map((item:any)=>(
                    <div key={item.title}>
                        <HorizontalCard imgUrl={item.imgUrl}/>
                    </div>
                  ))  
                }
            </div>
    </div>
  )
}

export default OriginalSeries

const originalSeriesList = [
    // {
    //     title:"রেডরুম",
    //     path:'/',
    //     imgUrl:'/images/redrum.jpg'
    // },
    // {
    //     title:"গুটি",
    //     path:'/',
    //     imgUrl:'/images/guti.jpg'
    // },
    {
        title:"জাহান",
        path:'/',
        imgUrl:'/images/jahan_horizontal.jpg'
    },
    {
        title:"দুই দিনের দুনিয়া ",
        path:'/',
        imgUrl:'/images/dui_diner_duniya_horizontal.jpg'
    },
    {
        title:"অ্যালেন স্বপন ",
        path:'/',
        imgUrl:'/images/allen.jpg'
    }
]