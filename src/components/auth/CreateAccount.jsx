import { FcGoogle } from "react-icons/fc"
import { ImGithub } from "react-icons/im"
import { MdMail } from "react-icons/md"
import { Link } from "react-router-dom"
import photo from "/src/assets/dev.png"

const CreateAccount = () => {
  return (
    <div className='flex flex-col justify-center items-center my-5'>

      <img src={photo} className="w-16" alt="dev logo" />

      <div className='flex flex-col justify-center items-center mt-6'>
        <h1 className='text-3xl font-bold mb-1'>Join the DEV Community</h1>
        <p className='font-sans'>DEV Community is a community of 2,181,210 amazing developers</p>
      </div>

      <div className='mt-6 space-y-5'>
        <Link to={"#"} className='flex px-4 items-center border border-gray-400 w-[510px] h-12 rounded-lg hover:bg-gray-100'>
          <FcGoogle className='text-xl' />
          <span className='ml-44 font-semibold'>Sign up with Google</span>
        </Link>
        <Link to={`${import.meta.env.VITE_GITHUB_LINK}`} className='flex px-4 items-center border border-gray-400 w-[510px] h-12 rounded-lg hover:bg-gray-100 '>
          <ImGithub className='text-xl' />
          <span className='ml-44 font-semibold'>Sign up with GitHub</span>
        </Link>
        <Link to={"/signup"} className='flex px-4 items-center border border-gray-400 w-[510px] h-12 rounded-lg hover:bg-gray-100'>
          <MdMail className='text-xl' />
          <span className='ml-44 font-semibold'>Sign up with Email</span>
        </Link>

      </div>

      <div className='w-[450px] mt-5 text-center'>
        <span className='font-thin text-gray-600 w-auto '>
          By signing up, you are agreeing to our privacy policy, terms of use and code of conduct.
        </span>
        <hr className='my-5 border border-t-1' />
      </div>

      <span>Already have an account? <Link className='text-blue-600 hover:underline' to={"/login"}>Log in.</Link></span>
    </div>
  )
}

export default CreateAccount