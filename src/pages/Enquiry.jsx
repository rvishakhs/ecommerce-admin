import React, { useEffect } from 'react'
import {  Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getenquiry } from '../features/enquiry/enquirySlice';
import { Link } from 'react-router-dom';
import {FiEdit} from 'react-icons/fi'
import {AiOutlineDelete} from 'react-icons/ai'



function Enquiry() {

    const columns = [
        {
          title: 'Slno',
          dataIndex: 'key',
          key: 'slno',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Mobile',
          dataIndex: 'mobile',
          key: 'mobile',
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
        },
        {
          title: 'Action',
          dataIndex: 'action',
          key: 'action',
        },
        
    ]

    const dispatch = useDispatch()

    useEffect(()=> {
      dispatch(getenquiry())
    }, [])

    const enquirystate = useSelector((state) => state.enquiry.enquiry)

    console.log(enquirystate);

    const tabledata = []
        for(let i = 0; i<enquirystate.length ; i++) {
            tabledata.push({
                key: i+ 1,
                name : enquirystate[i].tittle,
                email : enquirystate[i].email,
                mobile : enquirystate[i].mobile,
                status : (
                  <>
                    <select name='' className='form-control form-select' id>
                      <option value="">Set Status</option>
                    </select>
                  </>
                ),
                action : (
                  <div className='flex flex-row space-x-2'>
                    <Link to="/">
                      <FiEdit className='w-5 h-5'/>
                    </Link>
                    <Link to="/">
                      <AiOutlineDelete className='w-[22px] h-[22px]'/>
                    </Link>
                  </div>
                )
            })
        }
  return (
   <>
    <div className='mt-3 mx-2 py-2 h-[82vh] overflow-y-scroll '>
        <h2 className='font-bold text-xl tracking-wide px-3 py-2 '>Enquiry Details</h2>
        <div className='px-2 py-2 '>
            <Table columns={columns} dataSource={tabledata} tableLayout/>

        </div>
    </div>
   </>
  )
}

export default Enquiry