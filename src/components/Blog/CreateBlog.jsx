import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import InputField from "../utils/InputField"
import { useState } from "react"
import { MdNoteAlt } from "react-icons/md"
import 'react-quill/dist/quill.snow.css';
import api from "../services/Api"

const CreateBlog = () => {

  const { register, reset, handleSubmit, isSubmitting, formState: { errors } } = useForm()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onClickHandler = async (content) => {
    setLoading(true)
    try {
      await api.post("/blogs", content)
      reset()
      toast.success("Blog published successfully")
      navigate("/blogs")
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }

  }
  return (
    <div className='w-[1000px]'>

      <div className='flex justify-center items-center text-slate-700 gap-2 text-2xl font-semibold mt-6'>
        <h1 className=''>Create new Post</h1>
        <MdNoteAlt className='text-4xl' />
      </div>

      <div className='ml-80 mt-8'>
        <form className='w-[510px]' onSubmit={handleSubmit(onClickHandler)}>

          <InputField

            height="100px"
            label="Enter the Title"
            id="title"
            placeholder="Spring boot"
            type="text"
            required
            message="*Title is rquired*"
            register={register}
            errors={errors}
          /><br />
          <div className='flex flex-col'>
            <label htmlFor='content'>Enter the content</label>
            <textarea
              {...register("content", { required: "This field is required" })}
              rows="5"
              cols="40" className="border px-2 h-32 mt-2 border-gray-400 rounded-md" id="content">

            </textarea>
          </div>
          <button disabled={loading} className=' mt-7 border-none w-[510px] px-3 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700'>{loading ? <span>Publishing....</span> : "Publish"}</button>
        </form>
      </div>


    </div>
  )
}

export default CreateBlog