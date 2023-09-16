"use client"
import React from 'react'
import Image from 'next/image'
import {BiSolidLike,BiSolidDislike,BiLogoTwitter,BiLogoGmail} from 'react-icons/bi'
import {FaFacebookF} from 'react-icons/fa'

const ContentDetailsUi = () => {
  return (
    <div className='pb-40'>
        <div className='mt-10 text-white bg-[#1E262D] py-4'>
            <div className='w-[1000px] mx-auto flex justify-start items-center gap-5'>
                <p className='text-2xl font-semibold'>TEST</p>
                <p className='font-bold text-slate-400'>47 মিনিট &nbsp;&nbsp;|&nbsp;&nbsp; সাইকোলজিক্যাল থ্রিলার</p>
            </div>
        </div>
        <div className='w-[1000px] mx-auto'>
            <div className='mb-5'>
                <Image
                    src={"/images/jahan_horizontal.jpg"}
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full h-[500px]"
                    style={{objectFit:"cover"}}
                />
            </div>
            <div className='flex justify-between items-start'>
                <div className='w-[70%]'>
                    <div className='flex justify-start items-start gap-4'>
                        <div>
                            <Image
                                src="/images/jahan_horizontal.jpg"
                                alt=""
                                width={1000}
                                height={1000}
                                className="w-[500px] h-[120px]"
                                style={{objectFit:"cover"}}
                            />
                        </div>
                        <div className='text-white flex justify-start items-start gap-3'>
                            <div >
                                <p>পরিচালক:</p>
                                <p>অভিনয়ে:</p>
                            </div>
                            <div>
                                <p>আতিক জামান</p>
                                <p>নাজিয়া হক অর্ষা, মোস্তাফিজুর নূর ইমরান, শিল্পী সরকার অপু, নাঈমা তাসনীম, ইমেল হক, সাক্ষর কুন্ডু দ্বীপ</p>
                            </div>
                        </div>
                    </div>
                    <p className='text-white mt-6'>পোস্ট ট্রমাটিক ডিজঅর্ডার থেকে প্রায়ই কল্পনা আর বাস্তবতা গুলিয়ে ফেলে জাহান। তার হাজব্যান্ড শিহাব চেষ্টা করে যায় সেই ট্রমা লুকিয়ে জাহানকে স্বাভাবিক জীবনে ফেরাতে, কিন্তু পারে না। একদিন হুট করেই ঘটিয়ে ফেলে এক দুর্ঘটনা। জাহানের কল্পনা আর বাস্তবতার ফাঁক গলে সেই দায় গিয়ে পড়ে জাহানের ওপর। শিহাবের আর কিছুই করার থাকে না!</p>
                </div>
                <div className='flex justify-start items-center gap-4 text-white text-2xl'>
                    <button><BiSolidLike/></button>
                    <button><BiSolidDislike/></button>
                    <button><FaFacebookF/></button>
                    <button><BiLogoTwitter/></button>
                    <button><BiLogoGmail/></button>
                </div>
            </div>
            

        </div>

    </div>
  )
}

export default ContentDetailsUi