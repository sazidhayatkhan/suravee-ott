import React, { Children } from 'react'


type Props = {
 title:string;
 children?: React.ReactNode;
}
const PrimaryDropDown = (p:Props) => {
  return (
    <div className="dropdown dropdown-hover">
        <label tabIndex={0} className="text-white hover:text-red-600">{p.title}</label>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-lg w-52 text-red-600">
            {p.children}
        </ul>
    </div>
  )
}

export default PrimaryDropDown