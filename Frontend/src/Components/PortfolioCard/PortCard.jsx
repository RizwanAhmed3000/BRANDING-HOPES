import React from 'react'

const PortCard = ({ data }) => {
  // console.log(data, "======>>>> data for port")
  return (
    <div className='w-[300px] h-[300px] rounded flex flex-col items-center justify-center gap-[10px] cursor-pointer my-[10px]'>
      <div className='w-[100%] h-[100%] rounded'>
        <img src={data?.imgUrl} alt="" className='w-[100%] h-[100%] object-cover rounded' />
      </div>
      <p className='text-[#14213d] font-bold'>{data?.title}</p>
    </div>
  )
}

export default PortCard