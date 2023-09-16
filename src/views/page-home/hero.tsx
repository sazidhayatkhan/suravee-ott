import React from 'react'
import Image from 'next/image'

type Props = {
    imgUrl?: string,
}

const Hero = (p:Props) => {
  return (
    <div className='reltaive'>
        <Image
                src={p.imgUrl || '/images/dui_diner_duniya_horizontal.jpg'}
                alt=""
                width={4000}
                height={4000}
                className="w-full h-[700px]"
                style={{objectFit:"cover"}}
            />
        <div className='absolute top-[400px] left-12'>
          <div>
            <p className='text-6xl text-white font-bold'>দুই দিনের দুনিয়া</p>
            <div className='flex justify-start items-center gap-4 text-white font-semibold my-6'>
              <p className='text-lg'>রোমান্টিক থ্রিলার</p>
              <p>|</p>
              <button className='border border-red-600 px-3 py-1 rounded-full text-red-600 font-semibold'>18+</button>
              <p>|</p>
              <p className='text-lg'>128 মিনিট</p>
            </div>
            <div className='flex justify-start items-center gap-4'>
              <button className='bg-red-600 text-white text-lg font-semibold px-16 py-3 rounded-full'>দেখুন</button>
              <button className='text-red-600 border border-red-600 hover:bg-red-600 hover:text-white px-16 py-3 rounded-full font-semibold transition duration-700 text-lg'>Trailer</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero