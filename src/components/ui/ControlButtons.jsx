import React, { useState } from 'react'
import cn from 'classnames'
import { useNavigate } from 'react-router-dom'

function ControlButtons({ className, currentNumber = 1, changeNumber }) {

  const navigate = useNavigate()
    
  return (
    <div className={cn('flex felx-row justify-between items-center w-[340px] h-[45px]', className)}>
      <div onClick={() => changeNumber(-1)} className='shadow-custom flex justify-center items-center w-[64px] rounded-[10px] h-full bg-white'><img className='w-6' src="/images/icons/leftBtn.png" alt="" /></div>
      <div className='flex flex-row justify-center items-center w-[192px] h-full rounded-[10px] bg-white shadow-custom'>
        <span className='font-sans text-primary'>{currentNumber}</span>
        <span className='font-sans text-black'>/</span>
        <span className='font-sans text-gray'>9</span>
      </div>
      <div onClick={currentNumber != 8  ? () => changeNumber(1) : () => navigate('/found')} className='shadow-custom flex justify-center items-center w-[64px] rounded-[10px] h-full bg-white'><img className='w-6 rotate-180' src="/images/icons/leftBtn.png" alt="" /></div>
    </div>
  )
}

export default ControlButtons
