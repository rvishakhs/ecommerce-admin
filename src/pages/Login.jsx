import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Inputcomponent from '../components/Inputcomponent'
import { Divider } from 'antd';
import  {FaFacebookF}  from "react-icons/fa";
import  {BsGithub}  from "react-icons/bs";
import  {AiOutlineGoogle}  from "react-icons/ai";
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { login } from '../features/auth/authSlice';

function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    // Yup validation
    let schema = Yup.object().shape({
        email: Yup.string().email().required("Please enter a valid email address"),
        password : Yup.string().required(" * Please enter your password")
      });

    // Implymenting formik
    const formik = useFormik({
        initialValues: {
          email: '',
          password : '',
        },
        validationSchema : schema,
        onSubmit: (values) => {
          dispatch(login(values))  
          alert(JSON.stringify(values, null, 2));
        },
      });

      const {user , isError ,isLoading , isSucess, message } = useSelector((state) => state.auth)
      useEffect(() => {
        if(user || isSucess) {
            navigate("admin") 
        } else {
            alert("Admin login failed")
        }
      
      }, [user , isError ,isLoading , isSucess, message])
      
  return (
        <>
            <main className='bg-gray-200 '>
                <div className='max-w-6xl mx-auto flex items-center h-screen md:h-screen justify-center'>
                    <div className='flex flex-col justify-center px-6 bg-white md:w-[450px] w-[380px] h-[550px] py-2 rounded-lg border border-gray-400'>
                        <h2 className='font-bold font-sans leading-10 text-3xl tracking-wider'>Sign In </h2>
                        <p className='font-medium text-gray-500 tracking-wide text-base mt-2'>Login to your account to countinue</p>
                            <form action='' onSubmit={formik.handleSubmit}>
                                <div className='py-2 space-y-2 mt-2'>
                                    <Inputcomponent 
                                        type="email" 
                                        name="email" 
                                        id="inputemail" 
                                        placeholder="" 
                                        label="Email address"
                                        val={formik.values.email} 
                                        onCH={formik.handleChange("email")}

                                    />
                                    <div className='text-sm text-red-400'>
                                        {formik.touched.email && formik.errors.email ? (
                                            <div>{formik.errors.email}</div>
                                        ) : null}
                                    </div>
                                    <Inputcomponent 
                                        type="password" 
                                        name="password"
                                        id="password" 
                                        placeholder="" 
                                        label="Password"
                                        val={formik.values.password} 
                                        onCH={formik.handleChange("password")}
                                    />
                                    <div className='text-sm text-red-400'>
                                        {formik.touched.password && formik.errors.password ? (
                                            <div>{formik.errors.password}</div>
                                        ) : null}
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex gap-2 py-1'>
                                            <input type="checkbox"  />  
                                            <p className='font-normal text-sm'>Remeber Me</p>  

                                        </div>
                                        <Link to="/forgetpassword" className='tracking-wide font-medium text-sm'>Forget Password?</Link>
                                    </div>
                                    <div className='w-full'> 
                                            <button 
                                                className='bg-yellow-400 w-full py-2  font-medium text-base tracking-wide mt-2 mx-2 rounded-md hover:!border-black'
                                                type='submit'
                                            >Sign In
                                            </button>
                                    </div>
                                </div>
                             </form>
                        <div>
                            <Divider plain>Or Continue with</Divider>
                            <div className='flex gap-2 flex-row justify-around py-2'>
                                <div className='flex gap-2 px-3 py-2  items-center border border-gray-400 rounded-lg hover:bg-gray-200'>
                                    <AiOutlineGoogle/>
                                    <button className='text-base font-medium tracking-wide'>Google</button>
                                </div>
                                <div className='flex gap-2 px-3 py-2  items-center border border-gray-400 hover:bg-gray-200 rounded-lg'>
                                    <FaFacebookF/>
                                    <button className='text-base font-medium tracking-wide'>Facebook</button>
                                </div>
                                <div className='flex gap-2 px-3 py-2  items-center border border-gray-400 hover:bg-gray-200 rounded-lg'>
                                    <BsGithub/>
                                    <button className='text-base font-medium tracking-wide'>GitHub</button>
                                </div>
                            </div>
                            <div className='mx-auto mt-2 px-2'>
                                <p className='text-sm font-normal '>Don't have an account 
                                    <Link to="/signup">   &nbsp;                             
                                        <span className='text-blue-500 font-medium'>Create an Account?</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
  )
}

export default Login