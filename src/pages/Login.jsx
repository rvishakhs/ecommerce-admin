import React from 'react'
import Inputcomponent from '../components/Inputcomponent'

function Login() {
  return (
        <>
            <main className='bg-gray-200'>
                <div className='max-w-6xl mx-auto flex items-center h-screen  justify-center'>
                    <div className='flex flex-col justify-center px-6 bg-white w-[450px] h-[500px] py-2 rounded-lg border border-gray-400'>
                        <h2 className='font-bold font-sans leading-10 text-3xl tracking-wider'>Sign In </h2>
                        <p className='font-medium text-gray-500 tracking-wide text-base mt-2'>Login to your account to countinue</p>
                        <div className='py-2 space-y-2 mt-2'>
                            <Inputcomponent type="email" id="inputemail" placeholder="" label="Email address"/>
                            <Inputcomponent type="password" id="password" placeholder="" label="Password"/>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex gap-2'>
                                <input type="checkbox"  />  
                                <p className='font-normal text-sm'>Remeber Me</p>  
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
  )
}

export default Login