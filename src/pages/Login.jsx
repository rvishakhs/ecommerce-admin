import React from 'react'
import { Link } from 'react-router-dom'
import Inputcomponent from '../components/Inputcomponent'
import { Divider } from 'antd';
import  {FaFacebookF}  from "react-icons/fa";
import  {BsGithub}  from "react-icons/bs";
import  {AiOutlineGoogle}  from "react-icons/ai";

function Login() {
  return (
        <>
            <main className='bg-gray-200'>
                <div className='max-w-6xl mx-auto flex items-center h-screen  justify-center'>
                    <div className='flex flex-col justify-center px-6 bg-white w-[450px] h-[550px] py-2 rounded-lg border border-gray-400'>
                        <h2 className='font-bold font-sans leading-10 text-3xl tracking-wider'>Sign In </h2>
                        <p className='font-medium text-gray-500 tracking-wide text-base mt-2'>Login to your account to countinue</p>
                        <div className='py-2 space-y-2 mt-2'>
                            <Inputcomponent type="email" id="inputemail" placeholder="" label="Email address"/>
                            <Inputcomponent type="password" id="password" placeholder="" label="Password"/>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex gap-2 py-1'>
                                <input type="checkbox"  />  
                                <p className='font-normal text-sm'>Remeber Me</p>  
                            </div>
                            <Link to="/forgetpassword" className='tracking-wide font-medium text-sm'>Forget Password?</Link>
                        </div>
                            <button className='bg-yellow-400 py-2 font-medium text-base tracking-wide mt-2 mx-2 rounded-md hover:!border-black'>Sign In</button>
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