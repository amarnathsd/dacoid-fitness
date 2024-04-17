// import React from 'react'
import { FaSignal } from 'react-icons/fa6'
import { IoBatteryFull, IoWifi } from 'react-icons/io5'

const MobileTab = () => {
  return (
    <div>
         <div className="status bar flex justify-between">
          <span className='px-2'>9:41</span>
          <div className="flex justify-evenly w-[20%] pr-2">
            <FaSignal />
            <IoWifi />
            <IoBatteryFull />
          </div>
        </div>
    </div>
  )
}

export default MobileTab