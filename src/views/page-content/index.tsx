import VerticalCard from '@/components/card/verticalCard'
import React from 'react'
import Data from '../../../utils/allMoviesApi'

const ContentUi = () => {
  return (
    <div className='_container'>
        <div className='mt-20 text-white border-b-2 border-red-600 mb-6'>
            <p className='text-4xl font-semibold pb-2'>সকল সিনেমা</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-6 mt-4 pb-10'>
                {
                  Data.map((item:any)=>(
                    <div key={item.title}>
                        <VerticalCard imgUrl={item.imgUrl} path={item.path} slug={item.slug}/>
                    </div>
                  ))  
                }
        </div>
    </div>
  )
}

export default ContentUi
