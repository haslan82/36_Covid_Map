import React from 'react'
import { IoWarning } from 'react-icons/io5'

const Error = ({info, retry}) => {
  return (
    <div className='flex flex-col  gap-6 col-span-3 w-full md:min-w-[500px]'>
   <div className='bg-red-500 flex items-center gap-4 p-5 rounded-md'>
    <IoWarning className='text-4xl '/>
    <div>
      <h2>Üzgünüz bir hata oluştu</h2>
      <p>{info} </p>
    </div>
   </div>
   <button className='border text-gray-600 transtion hover:bg-gray-100 p-2 rounded-md' onClick={retry}>Tekrar Dene</button>
    </div>
  )
}

export default Error
