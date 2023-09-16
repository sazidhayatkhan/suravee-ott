"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Modal from '../modal/Modal'



type Props = {
    imgUrl?: string,
    path?:string,
    slug?:string,
    title?:string,
    actor?:string,
    director?:string,
    desc?:string,
}

const VerticalCard = (p:Props) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  return (
    <>
        <button onClick={openModal}>
          <Image
                  src={p.imgUrl || '/images/guti.jpg'}
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-[500px] h-[360px] rounded-xl scale-100 hover:scale-110 transition duration-700"
                  style={{objectFit:"cover"}}
              />
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal} actor={p.actor} director={p.director} desc={p.desc} imgUrl={p.imgUrl} title={p.title} slug={p.slug}/>
    </>
  )
}

export default VerticalCard