import React,{useState} from "react";
import PrimaryDropDown from "@/components/dropdown/primaryDropDown";
import Link from "next/link";
import {AiOutlineSearch} from 'react-icons/ai'
const Navbar = () => {
  return (
    <div>
      <div className="bg-gray-900 py-4 text-xl text-white">
        <nav className="bg-gray-900 fixed w-full z-20 top-0 left-0">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div>
              <Link href={"/"}>
                <p className="text-4xl font-bold text-white cursor-pointer">
                  সুর<span className="text-red-600">ভী</span>
                </p>
              </Link>
            </div>
            <div className="flex justify-end items-center gap-6">
                <>
                {
                    navItems.map((item:any)=>(
                        <div key={item.title}>
                            <PrimaryDropDown title={`${item.title}`}>
                              {
                                item?.subcategorys?.map((category:any)=>(
                                  <li key={category.title}>
                                    <Link href={`${category.path}`}>
                                      {category.title}
                                    </Link>
                                  </li>
                                ))
                              }
                            </PrimaryDropDown>
                        </div>
                    ))
                }
                <Link href={"/search"}>
                  <button className="border border-red-600 rounded-lg text-red-600 w-[200px] flex justify-end p-1">
                      <AiOutlineSearch/>
                  </button>
                </Link>
                <div className='flex justify-start items-center gap-4'>
                  <Link href={"/subscribe"}>
                    <button className='bg-red-600 hover:bg-white hover:text-red-600 transition duration-500 text-white px-8 py-2 rounded-full text-sm'>Subscribe</button>
                  </Link>
                    <button className='text-red-600 border border-red-600 hover:bg-red-600 hover:text-white text-sm px-8 py-2 rounded-full transition duration-500'>Login</button>
                </div>
                </>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

const navItems = [
  {
    title: "Movies",
    path: "/",
    subcategorys:[
    {
      title:'All Movies',
      path:'/movies'
    },
    {
      title:'Romantic',
      path:'/'
    },
    {
      title:'Actino',
      path:'/'
    },
    {
      title:'Thriller',
      path:'/'
    },
    {
      title:'Dramatic',
      path:'/'
    },
  ]
  },
  {
    title: "Series",
    path: "/",
    subcategorys:[
      {
        title:'All Series',
        path:'/'
      },
      {
        title:'Romantic',
        path:'/'
      },
      {
        title:'Action',
        path:'/'
      },
      {
        title:'Thriller',
        path:'/'
      },
      {
        title:'Dramatic',
        path:'/'
      },
    ]
  },
  {
    title: "Show",
    path: "/",
    subcategorys:[
      {
        title:'Non Fiction',
        path:'/'
      },
      {
        title:'Song',
        path:'/'
      },
      {
        title:'Documentry',
        path:'/'
      },
      {
        title:'More Show',
        path:'/'
      },
    ]
  },
];
