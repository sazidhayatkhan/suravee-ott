"use client"
import React from 'react'
import OriginalFilm from './originalFilm'
import OriginalSeries from './originalSeries'
import Hero from './hero'
import MyContext from '@/MyContext'
import Data from '../../../utils/allMoviesApi'
function HomeUi(){
  const apiData = Data
  return (
    <MyContext.Provider value={apiData}>
      <div className=''>
          <h1>SURAVEE</h1>
          <Hero/>
          <OriginalFilm/>
          <OriginalSeries/>
          <OriginalFilm/>
          <OriginalSeries/>
      </div>
    </MyContext.Provider>
  )
}

export default HomeUi