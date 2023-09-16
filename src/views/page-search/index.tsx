"use client"
import React,{useState} from 'react'
import Link from 'next/link'
import {AiOutlineClose,AiOutlineSearch} from 'react-icons/ai'
import Data from '../../../utils/allMoviesApi'
import VerticalCard from '@/components/card/verticalCard'
const SearchPageUi = () => {

  const [items, setItems] = useState(Data)

  const filterItem = (categItem:any) =>{
      const updatedItems = Data.filter((curElem)=>{
        return curElem.category === categItem
      })
      setItems(updatedItems)
  }

 
  return (
    <div className='bg-black'>
        <div className='flex justify-start items-center gap-6 mx-6 pt-8 mb-8'>
            <div>
              <Link href={"/"}>
                <p className="text-4xl font-bold text-white cursor-pointer">
                  সুর<span className="text-red-600">ভী</span>
                </p> 
              </Link>
            </div>
            <div className='bg-gray-700 grow flex justify-between items-center rounded-lg'>
                <input type='text' className='w-full outline-none bg-transparent px-2 py-1 text-white'/>
                <button className='text-gray-700 text-3xl bg-white py-2 px-5 rounded-r-lg'><AiOutlineSearch/></button>
            </div>
            <div className='mt-2'>
                <Link href={'/'}>
                    <button className='text-white text-4xl hover:text-red-600 transition duration-700'><AiOutlineClose/></button>
                </Link>
            </div>
        </div>
        <div className='_container pb-12'>
            <p className='text-white text-2xl font-semibold mb-4'>Trending Search</p>
            <div className='flex justify-start items-center gap-2'>
                <button onClick={() => filterItem('drama')} className={` text-white bg-slate-600 px-5 py-2 rounded-md font-semibold`}>Drama</button>
                <button onClick={() => filterItem('action')} className='text-white bg-slate-500 px-5 py-2 rounded-md font-semibold'>Action</button>
                <button onClick={() => filterItem('thriller')} className='text-white bg-slate-500 px-5 py-2 rounded-md font-semibold'>Thriller</button>
                <button onClick={() => filterItem('romantic')} className='text-white bg-slate-500 px-5 py-2 rounded-md font-semibold'>Romantic</button>
                <button onClick={() => setItems(Data)} className='text-white bg-slate-500 px-5 py-2 rounded-md font-semibold'>All</button>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-4 _container mx-5 mt-4 pb-40'>
                {
                  items.map((item:any)=>(
                      <div key={item.title}>
                          <VerticalCard imgUrl={item.imgUrl} title={item.title} actor={item.actor} director={item.director} desc={item.description}/>
                      </div>
                  ))  
                }
        </div>

    </div>
  )
}

export default SearchPageUi