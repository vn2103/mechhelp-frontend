import React from 'react'
import { Icon } from "@iconify/react";
import head from './/head.png'
export const Header = () => {
  return (
    <header className="bg-white flex flex-row justify-between items-center px-6 py-4">
    <div>
      <h5 className="text-xl font-semibold">Hi, S. V. Garage</h5>
      <p className="text-[rgba(116,118,129,1)] text-[0.737rem]">Let’s check your Garage today</p>
    </div>
    <div className="w-full sm:w-[40%] bg-[rgba(245, 245, 245, 1)]  h-12 rounded-lg justify-between p-4 flex items-center border border-gray-300">
      <Icon icon="fa:search" width={20} height={20} color="#000" className="mr-2" />
      <input type="text" placeholder="Search..." className="flex-1 bg-transparent outline-none text-gray-700"/>
    </div>
    <div>
      <div className="flex items-center">
        <div className='mr-2'>
          <Icon
              icon="material-symbols:mail-outline-rounded"
              width={20}
              height={20}
              color="#000"
              className="mr-2"
          />
         </div>
         <div className='mr-2'>
          <Icon
              icon="mdi:bell-outline"
              width={20}
              height={20}
              color="#000"
              className="mr-2"
          />
         </div>
         <div className='flex  items-center'>
            <img src={head} alt="Owner" width={35}
              height={30} className='rounded-full mr-2' />
            <div >
              <p className="text-sm text-gray-700">Manisha Kaur</p>
              <p className="flex items-center text-xs">Owner<Icon
                  icon="mdi:chevron-down"
                  width={20}
                  height={20}
                  className="pt-1 text-[rgba(255,130,14,1)]"
               />
            </p>
            </div>
         </div>
      </div>
    </div>      
    </header>

  )
}
