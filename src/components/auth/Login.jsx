import { Divider } from "@mui/material";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import InputField from '../utils/InputField'
import { jwtDecode } from "jwt-decode";
import api from "../services/Api";
import photo from "/src/assets/dev.png"

const Login = () => {
  const navigate = useNavigate()
  const onSubmit = async (value) => {
    const response = await api.post("/auth/public/signin", value);
    toast.success("Login successful")
    reset();
    if (response.status === 200 && response.data.jwtToken) {
      const decodedToken = jwtDecode(response.data.jwtToken)
      const user = {
        userName: decodedToken.sub
      }
      localStorage.setItem("JWT_TOKEN", response.data.jwtToken)
      navigate("/blogs");
    }
  }


  const { register, reset, handleSubmit, isSubmitting, formState: { errors } } = useForm()
  return (


    <div className='flex flex-col justify-center items-center h-[700px] my-7'>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className=''>
          <div className='flex flex-col justify-center items-center'>
            <img src={photo} className="w-16 mb-5" alt="dev logo" />
            <h1 className='text-3xl font-bold mb-1'>Join the DEV Community</h1>
            <p className='font-sans'>DEV Community is a community of 2,181,210 amazing developers</p>
          </div>
          <div className='mt-6 space-y-5 mb-5'>
            <Link to={"#"} className='flex px-4 items-center border border-gray-400 w-[510px] h-12 rounded-lg hover:bg-gray-100'>
              <FcGoogle className='text-xl' />
              <span className='ml-44 font-semibold'>Continue with Google</span>
            </Link>
            <Link to={`${import.meta.env.VITE_GITHUB_LINK}`} className='flex px-4 items-center border border-gray-400 w-[510px] h-12 rounded-lg hover:bg-gray-100'>
              <ImGithub className='text-xl' />
              <span className='ml-44 font-semibold'>Continue with GitHub</span>
            </Link>
          </div>
          <Divider className='font-semibold '>Or</Divider>
        </div>

        <div className='mt-5'>
          <InputField
            width="510px"
            label="User Name"
            id="userName"
            placeholder="aman"
            type="text"
            required
            message="*UserName is rquired*"
            register={register}
            errors={errors}
            min={3}
          />{" "}
          <InputField
            width="510px"
            label="Password"
            id="password"
            placeholder="*******"
            type="password"
            required
            message="*Password is rquired*"
            register={register}
            errors={errors}
            min={7}
          />
        </div>

        <button className='w-[510px] border-none rounded-md px-4 py-3 mt-10 bg-blue-700 hover:bg-blue-800 text-white font-semibold'>
          {isSubmitting ? <span>Loading..</span> : "Log in"}
        </button>

        <div className='w-[450px] mt-5 text-center mb-4'>
          <span className='font-thin text-gray-600 w-auto '>
            By signing up, you are agreeing to our privacy policy, terms of use and code of conduct.
          </span>
        </div>
        <Divider />
        <div className='flex justify-center items-center mt-5'>
          <span className="">New to DEV Community? <Link className='text-blue-600 hover:underline ' to={"/createAccount"}> Create account.</Link></span>
        </div>
      </form>
    </div>
  )
}
export default Login