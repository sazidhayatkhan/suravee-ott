import React from 'react';
import styles from './modal.module.css'
import {AiFillCloseCircle,AiOutlineHeart} from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'
// interface ModalProps {
// 	open: boolean;
// 	handleClose: () => void;
// 	children: React.ReactNode;
// 	clses?: string;
// }

const Modal = ({ isOpen, onClose, actor,desc,director,imgUrl,title,slug }:any) => {
  return (
    <div className={`${styles.modal} ${isOpen ? `${styles.modal_open}` : ''}`}>
      <div className={`${styles.modal_content} text-white bg-gradient-to-b from-gray-700 via-gray-900 to-black w-[800px] rounded-xl p-6`}>
		<div className='text-end'>
			<button onClick={onClose} className='relative top-[0px] right-[0px] text-2xl text-white'><AiFillCloseCircle/></button>
		</div>
		<div className='flex justify-normal items-center gap-6 pb-6'>
			<div className='w-[35%]'>
				<Image 
				src={imgUrl || "/images/jahan.jpg"}
				alt=""
				width={1000}
				height={1000}
				className="w-[300px] h-[400px] rounded-lg"
				style={{objectFit:"cover"}}
				/>
			</div>
			<div className='w-[65%]'>
				<p className='text-4xl mb-5 font-bold'>{title}</p>
				<div className='flex justify-start items-start gap-3'>
					<div className='font-bold text-red-600'>
						<p>Director:</p>
						<p>Cast:</p>
					</div>
					<div>
						<p>{director}</p>
						<p>{actor}</p>
					</div>
				</div>
				<p className='mt-5 line-clamp-3'>{desc}</p>
				<div className='mt-5 flex justify-start items-center gap-4'>
					<Link href={`/content/${slug}`}>
						<button className='bg-red-600 px-12 py-1 rounded-full font-semiboldv text-lg text-white hover:bg-white hover:text-red-600 transition duration-500'>View</button>
					</Link>
					<button className='text-white text-4xl'><AiOutlineHeart/></button>
				</div>
			</div>
		</div>
      </div>
    </div>
  );
};

export default Modal;