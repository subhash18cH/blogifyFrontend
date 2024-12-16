import { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import api from "../services/Api";

const Blogs = () => {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false)
  const fetchBlogs = async () => {
    setLoading(true)
    try {
      const response = await api.get("/blogs/all")
      setBlogs(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchBlogs()
  }, [])
  return (
    <div className='flex justify-center items-center'>
      <div className='w-[800px] flex flex-col  gap-6 mt-12 mb-12'>
        {blogs.map((item) => (
          <BlogItem key={item.id} {...item} id={item.id} />
        ))}
      </div>
    </div>
  )
}

export default Blogs