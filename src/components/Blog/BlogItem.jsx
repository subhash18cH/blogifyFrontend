import React from 'react'
import { truncateText } from '../TruncateText'
import { Link } from 'react-router-dom'

const BlogItem = ({ id, title, ownerName, content }) => {

  return (
    <Link to={`/blog/${id}`}>
      <div className='flex flex-col gap-4 text-xl bg-gray-50 h-44 w-[800px] px-6 py-5 rounded-lg '>
        <h2 className='font-light'>{ownerName}</h2>
        <span className='font-bold text-2xl'>{title}</span>
        <p className='text-gray-500'>{truncateText(content)}</p>
      </div>

    </Link>
  )
}

export default BlogItem