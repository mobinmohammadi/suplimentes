import React from 'react'
import SectionsTitle from '../SectionsTitle/SectionsTitle'
import ArticlesItems from '../ArticlesItems/ArticlesItems'
import { allArticles } from '../../../Data.js'

export default function ArticlesSections() {
  return (
    <div className='bg-white pt-4 pb-4 pr-3 pl-3 container-custom'>
        <div className="flex justify-between text-xs ">
        <SectionsTitle title="همه مقاله ها"/>
        <div className='flex justify-center gap-1 text-red-600 items-center'>
            <svg className='w-5 h-5 '>
                <use href='#plus'></use>
            </svg>
            <span className='mb-1 '>نمایش بیشتر</span>
        </div>
        </div>
        <div className="bg-white  mt-10 grid grid-cols-1 x:grid-cols-2 xs:grid-cols-3 mmd:grid-cols-4 gap-2">
            {allArticles.slice(0,4  ).map(articles => (

            <ArticlesItems key={articles.id} {...articles}/>
            ))}

        </div>
    </div>
  )
}
