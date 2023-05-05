import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { fetchenquiry } from '../features/enquiry/enquirySlice'
import {IoMdArrowBack} from "react-icons/io"
import {MdOutlineSecurityUpdateGood} from "react-icons/md"




function EnquiryView() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation();

    const enqid = location.pathname.split("/")[3]

    const enquirystate = useSelector((state) => state.enquiry)

    const {fetchedEnquiry} = enquirystate

    useEffect(() => {
        dispatch(fetchenquiry(enqid))
    }, [])
    
    const backClick = () => {
        navigate(-1)
    }

  return (
    <div className='px-10 py-5'> 
        <div className='flex justify-between items-center'>
            <h3 className='font-sans text-2xl font-bold '>View Enquiry</h3>
            <div className='flex flex-row items-center gap-2'>
                <IoMdArrowBack/>
                <button 
                    onClick={backClick}
                    className='font-semibold'
                >
                    Go back
                </button>
            </div>
        </div>
        <div className='px-5 py-5 space-y-3'>
            <div className='flex flex-row items-center space-x-6 '>
                <p className='font-bold text-lg'>Name : </p>
                <p className='mt-1'>{fetchedEnquiry?.tittle}</p>
            </div>
            <div className='flex flex-row items-center space-x-6'>
                <p className='font-bold text-lg'>Email : </p>
                <p className='mt-1'>{fetchedEnquiry?.email}</p>
            </div>
            <div className='flex flex-row items-center space-x-6'>
                <p className='font-bold text-lg'>Mobile : </p>
                <p className='mt-1'>{fetchedEnquiry?.mobile}</p>
            </div>
            <div className='flex flex-row items-center space-x-6'>
                <p className='font-bold text-lg'>Comments : </p>
                <p className='mt-1'>{fetchedEnquiry?.comments}</p>
            </div>
            <div className='flex flex-row items-center space-x-6'>
                <p className='font-bold text-lg'>Status : </p>
                <select name='' className='form-control form-select w-[50%]' id>
                      <option value="Submitted" defaultChecked >Submitted</option>
                      <option value="Reviewing"  >Reviewing</option>
                      <option value="In Progress" defaultChecked >In Progress</option>
                      <option value="Resolved" defaultChecked >Resolved</option>
                    </select>
            </div>
            <div className='flex flex-row items-center mt-4 gap-2 border border-gray-300 hover:scale-105 w-fit px-2 py-1 rounded-lg'>
                <MdOutlineSecurityUpdateGood/>
                <button 
                    onClick={backClick}
                    className='font-semibold'
                >
                    Update
                </button>
            </div>

        </div>
    </div>
  )
}

export default EnquiryView