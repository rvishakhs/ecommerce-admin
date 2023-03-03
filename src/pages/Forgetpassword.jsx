import React from 'react'
import { Link } from 'react-router-dom'
import Inputcomponent from '../components/Inputcomponent'
import { Divider } from 'antd';
import {BiArrowBack} from "react-icons/bi"


function Forgetpassword() {
  return (
        <>
            <main className='bg-gray-200 '>
                <div className='max-w-6xl mx-auto flex items-center h-screen md:h-screen justify-center'>
                    <div className='flex flex-col justify-center px-6 bg-white md:w-[450px] w-[380px] h-[550px] py-2 rounded-lg border border-gray-400'>
                        <h2 className='font-bold font-sans leading-10 text-3xl tracking-wider'>Forget Password </h2>
                            <p className='font-medium text-gray-500 tracking-wide text-base mt-2'>Enter your recover email address to reset password</p>
                                <div className='py-3 space-y-2 mt-2'>
                                    <Inputcomponent type="email" id="inputemail" placeholder="" label="Email address"/>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                <BiArrowBack />
                                <Link to="/login">

                                    <p className='font-medium text-sm py-2'>Back to Login </p>
                                </Link>
                                </div>    
                        <button className='bg-yellow-400 py-2 font-medium text-base tracking-wide mt-2   rounded-md hover:!border-black'>Reset Password</button>
                        <div>
                            <Divider plain>New User</Divider>
                            
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

export default Forgetpassword