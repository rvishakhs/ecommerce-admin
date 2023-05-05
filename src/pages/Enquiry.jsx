import React, { useEffect, useState } from 'react'
import {  Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { deleteenquiry, getenquiry, updateenquiry } from '../features/enquiry/enquirySlice';
import { Link } from 'react-router-dom';
import {FaEye} from 'react-icons/fa'
import {AiOutlineDelete} from 'react-icons/ai'
import CustomModal from '../components/CustomModal';



function Enquiry() {
  const [open, setOpen] = useState(false);
  const [enqid, setenqid] = useState("")

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

    const showModal = () => {
      setOpen(true);
    };
    const hideModal = () => {
      setOpen(false);
    };

    const dispatch = useDispatch()

    useEffect(()=> {
      dispatch(getenquiry())
    }, [])

    const deleteFunc = (id) => {
      dispatch(deleteenquiry(id))
      setTimeout(() => {
        dispatch(getenquiry())
        setOpen(false)
      }, 100);
  }
    const handleClick = (data) => {
      setenqid(data)
      setOpen(true)
    }

    const setStatus = (data, id) => {
      dispatch(updateenquiry({id: id, data: data}))
    }


    const enquirystate = useSelector((state) => state.enquiry.enquiry)

    const tabledata = []
        for(let i = 0; i<enquirystate.length ; i++) {
            tabledata.push({
                key: i+ 1,
                name : enquirystate[i].tittle,
                email : enquirystate[i].email,
                mobile : enquirystate[i].mobile,
                status : (
                  <>
                    <select 
                      name='' 
                      className='form-control form-select' 
                      id=""
                      value={enquirystate[i].enqStatus}
                      defaultValue={enquirystate[i].enqStatus ? enquirystate[i].enqStatus : "Submitted"}
                      onChange={(e) => setStatus(e.target.value, enquirystate[i]._id)}
                    >
                        <option value="Submitted"  >Submitted</option>
                        <option value="Reviewing"  >Reviewing</option>
                        <option value="In Progress"  >In Progress</option>
                        <option value="Resolved"  >Resolved</option>
                    </select>
                  </>
                ),
                action : (
                  <div className='flex flex-row space-x-2'>
                    <Link to={`/admin/enquiry/${enquirystate[i]._id}`}>
                      <FaEye className='w-5 h-5'/>
                    </Link>
                    <button onClick={()=> handleClick(enquirystate[i]._id)}>
                      <AiOutlineDelete className='w-[22px] h-[22px] hover:text-blue-600'/>
                    </button>
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
        <CustomModal  title="Delete" open={open} action={()=> deleteFunc(enqid)}  hideModal={hideModal} content="Are you sure? You want to  delete this Enquiry" />
    </div>
   </>
  )
}

export default Enquiry