import React from 'react'

export default function SelectFiled({lable , option}) {
  return (
    <div className="flex flex-col">
      <label htmlFor="#">{lable}</label>
      <select name="" id="" className='w-full mt-3'>
        {option.map(item => (
          <option>{item.name}</option>

        ))}
      </select>
    </div>
  )
}
