"use client"
import Modal from '@/components/modal/Modal';
import React,{useState} from 'react'

const TestUi = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  return (
    <div className='mt-40 h-screen w-screen'>
        <h1>I am test</h1>
        <div className='text-center'>
            <button className='bg-blue-500 text-white px-5 py-1 rounded-md'>Modal button</button>
        </div>
        <button onClick={openModal} className='bg-red-600 p-12'>Open Modal</button>
        <Modal isOpen={isModalOpen} onClose={closeModal}/>
    </div>
  )
}

export default TestUi