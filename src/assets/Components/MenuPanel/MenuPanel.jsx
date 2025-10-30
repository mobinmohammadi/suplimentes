import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuPanel() {
  return (
    <div className='p-5 '>
        <Link>
            پنل کاربری
        </Link>
        <Link>
            سفارشات من
        </Link>
        <Link>
             علاقه مندی های من
        </Link>
        <Link>
             خروج از حساب
        </Link>
    </div>
  )
}
