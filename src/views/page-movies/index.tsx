'use client'
import VerticalCard from '@/components/card/verticalCard'
import React from 'react'
import Data from '../../../utils/allMoviesApi'
import {useQuery} from 'react-query'


const MoviesUi = () => {
  const{data,status} = useQuery('popular',fetchPopular)
  console.log("DATA PAKHI",data);
  
  return (
    <div className=''>
        {
        status === 'error' && (
          <div>
            <h1 className='text-xl text-white'>Error Occured</h1>
          </div>
        )
       }
       {
        status === 'loading' && (
          <div className='w-screen h-screen flex justify-center items-center'>
            <p className='text-5xl'><span className="loading loading-bars text-error loading-lg"></span></p>
          </div>
        )
       }
       
       {
        status === 'success' && (
          <div className='_container'>
          <div className='mt-20 text-white border-b-2 border-red-600 mb-6'>
            <p className='text-4xl font-semibold pb-2'>All Movies</p>
        </div>
          <div className='grid grid-cols-1 md:grid-cols-5 gap-6 mt-4 pb-10'>
                {
                  data.results?.map((item:any)=>(
                    <div key={item.id}>
                        <VerticalCard imgUrl={`https://image.tmdb.org/t/p/original/${item && item.poster_path}`} title={item.original_title} actor={item.original_language} director={item.original_language} desc={item.overview} slug={item.title}/>
                    </div>
                  ))  
                }
        </div>
        </div>
        )
       }
    </div>
  )
}

export default MoviesUi
