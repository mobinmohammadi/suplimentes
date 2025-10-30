import React from 'react'

export default function TasteProducts({title}) {
  return (
    <div className='pt-2 pb-2 pr-3 active:border-6 active:border-red-500 active:border-solid trsnsitions-all active:bg-red-900 hover:bg-teal-800 transition-all cursor-pointer hover:text-white pl-3 text-xs bg-slate-300 flex gap-1 sm:gap-3 items-center justify-center rounded-md'>
        <svg className='w-4 h-4'>
            <use href='#check-badge'></use>
        </svg>
        <span  className='text-xs'>{title}</span>
    </div>
  )
}
