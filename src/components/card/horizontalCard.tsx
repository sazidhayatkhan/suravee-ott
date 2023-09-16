"use client"
import React,{useState} from 'react'
import Image from 'next/image'



type Props = {
    imgUrl?: string,
}

const HorizontalCard = (p:Props) => {
  return (
    <>
        <Image
                src={p.imgUrl || '/images/guti.jpg'}
                alt=""
                width={1000}
                height={1000}
                className="w-full h-[220px] rounded-xl scale-100 hover:scale-105 transition duration-700"
                style={{objectFit:"cover"}}
            />
    </>
  )
}

export default HorizontalCard