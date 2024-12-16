import React from 'react'
import { useForm } from 'react-hook-form'
import InputField from '../utils/InputField';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import api from '../services/Api';

const Signup = () => {

  const navigate = useNavigate()
  const { register, handleSubmit, reset, isSubmitting, formState: { errors } } = useForm();

  const onSubmit = async (data) => {

    const { userName, email, password } = data;
    const sendData = {
      userName, password, email
    }
    try {
      const response = await api.post("/auth/public/signup", sendData);
      toast.success("Register successfully");
      reset();
      if (response.data) {
        navigate("/login")
      }

    } catch (error) {
      toast.error("something went wrong");
      console.log(error)
    }

  }

  return (
    <div className='flex justify-center items-center '>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className='text-center text-3xl font-bold my-6'>Create your account</h2>
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
          label="Email"
          id="email"
          placeholder="aman@gmail.com"
          type="email"
          required
          message="*Email is rquired*"
          register={register}
          errors={errors}
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
        <button className='w-96 border-none rounded-md px-4 py-2 mt-10 bg-blue-700 hover:bg-blue-800 text-white font-semibold'>
          {isSubmitting ? <span>Loading..</span> : "Sign up"}
        </button>
      </form>
    </div>
  )
}

export default Signup