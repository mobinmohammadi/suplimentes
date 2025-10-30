import React from 'react'
import { Link } from 'react-router-dom'

export default function CateguryItme({img , name , link}) {
  return (
    <Link to={link} className='flex w-[97px] x:w-[110px] justify-center gap-2 items-center text-center flex-col itmes-center'>
        <img className='w-[100px] xs:w-[120px] ' src={img} alt={name} />
        <span className='text-[10px] xs:text-xs sm:text-sm '>{name}</span>
    </Link>
  )
}
