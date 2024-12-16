import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../services/Api'

const SingleBlog = () => {

  const navigate = useNavigate()
  const { blogId } = useParams()
  const [blog, setBlog] = useState(null)

  const fetchSingleBlog = async () => {
    const response = await api.get(`/blogs/${blogId}`)
    setBlog(response.data)
  }
  const handlegoBack = () => {
    navigate(-1)
  }
  useEffect(() => {
    fetchSingleBlog()
  }, [])

  if (!blog) {
    return <div>Loading...</div>
  }

  return (
    <div className='flex justify-center items-center my-10'>
      <div className='flex flex-col gap-10 text-xl bg-gray-50 h-auto w-[800px] px-6 py-5 rounded-lg shadow-md '>
        <h2 className='font-light'>{blog.ownerName}</h2>
        <span className='font-bold text-2xl'>{blog.title}</span>
        <p className='text-gray-500'>{blog.content}</p>
        <button onClick={handlegoBack} className=' mt-7 border-none w-[100px] px-3 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700'>Go Back</button>
      </div>
    </div>
  )
}

export default SingleBlog