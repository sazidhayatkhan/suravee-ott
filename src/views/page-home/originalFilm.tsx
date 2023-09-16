import VerticalCard from '@/components/card/verticalCard'
import React,{useContext} from 'react'
import MyContext from '@/MyContext'


function OriginalFilm(){
    const apiData:any = useContext(MyContext);
    const slicedData = apiData.slice(0, 5);
  return (
    <div className='py-6 mx-4'>
        <p className='text-2xl font-semibold text-white'>সুরভী অরিজিনাল ফিল্ম</p>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-4 mr-4 mt-4'>
                {
                  slicedData.map((item:any)=>(
                    <div key={item.title}>
                        <VerticalCard imgUrl={item.imgUrl} title={item.title} actor={item.actor} director={item.director} desc={item.description} slug={item.slug}/>
                    </div>
                  ))  
                }
            </div>
    </div>
  )
}

export default OriginalFilm





