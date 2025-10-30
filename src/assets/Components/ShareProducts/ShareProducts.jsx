import React from 'react'

export default function ShareProducts({cancellActionsForShareProducts}) {
    return (
        <div className=' shadow-2xl w-[90%] right-[5%]  transition-all top-[25%]  flex flex-col z-40 gap-5 rounded-md pt-3 pb-3 pr-5 pl-5 fixed bg-white'>
            <div className="flex justify-between items-center">
                <span>اشتراک گذاری در شبکه های اجتماعی
                </span>
                <svg onClick={() => cancellActionsForShareProducts()} className='w-8 h-8 cursor-pointer'>
                    <use href='#x-mark'></use>
                </svg>
            </div>
            <div className="& > *:w-9 & > *:rounded-sm & > *:p-2 & > *:h-9 flex gap-2">
                <svg className='sm:w-7 sm:h-7 w-5 h-5 bg-sky-600 text-white'>
                    <use href="#telegram"></use>
                </svg>
                <svg className='sm:w-7 sm:h-7 w-5 h-5 bg-green-600 '>
                    <use href="#whatsapp"></use>
                </svg>
                <svg className='sm:w-7 sm:h-7 w-5 h-5 text-white bg-sky-600'>
                    <use href="#instagram"></use>
                </svg>
                <svg className='sm:w-7 sm:h-7 w-5 h-5 bg-amber-600'>
                    <use href="#twitter"></use>
                </svg>

            </div>
            <div className="">
                <label htmlFor="email" className=''>ارسال به ایمیل</label>
                <div className="relative border-1 mt-6 rounded-md border-solid h-12 sm:h-14 flex items-center border-slate-300">
                    <input type="text" className='w-[70%] mr-8 text-sm h-full outline-0 ' />
                    <svg className='w-5 h-5 sm:w-8 sm:h-8 absolute right-2'>
                        <use href='#email'></use>
                    </svg>
                    <button className="absolute left-2 outline-0 pt-2 pb-2  sm:pt-2 sm:pb-2 sm:pr-6 sm:text-sm sm:pl-6 pr-4 pl-4 text-white bg-rose-600 cursor-pointer text-xs hover:bg-red-700 transition-all rounded-sm ">ارسال</button>
                </div>

            </div>
            <div className=""></div>
        </div>
    )
}
