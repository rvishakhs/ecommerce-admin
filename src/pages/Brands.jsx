import React, { useEffect, useState } from 'react'
import {  Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteBrand, getbrands } from '../features/brand/brandSlice';
import { Link, useLocation } from 'react-router-dom';
import {FiEdit} from 'react-icons/fi'
import {AiOutlineDelete} from 'react-icons/ai'
import moment from 'moment';
import CustomModal from '../components/CustomModal';
import { toast } from 'react-toastify';



function Brands() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [brandId, setbrandId] = useState("");

  //  Toast notification
  const newBrand = useSelector((state)=> state.brand)  // Toast related
  const {isSucess, isError, isLoading, deletedBrand} = newBrand //Toast related

  // React Toast section 
 useEffect(()=> {
  if(isSucess && deletedBrand ) {
    toast.success('Brand deleted successfully') 
  } 
  if(isError ) {
    toast.error('Oops !! Something went wrong');
  }
}, [isSucess, isError, isLoading])


  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };

  const handleClick = (data) => {
    setbrandId(data)
    setOpen(true)

  }

  const deleteFunc = (id) => {
      dispatch(DeleteBrand(id))
      setTimeout(() => {
        dispatch(getbrands())
        setOpen(false)
      }, 100);
  }

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
          sorter: (a, b) => a.name.length - b.name.length, 
        },
        {
          title: 'CreatedAt',
          dataIndex: 'createdAt',
          key: 'createdAt',
        },
        {
          title: 'Action',
          dataIndex: 'action',
          key: 'action',
        },
        
    ]
    useEffect(()=>{
      dispatch(getbrands())
    }, [])

    const brandState = useSelector((state)=> state.brand.brand)

    
    const tabledata = []
        for(let i = 0; i<brandState.length ; i++) {
            tabledata.push({
                key: i + 1,
                name : brandState[i].tittle,
                createdAt : moment( brandState[i].createdAt).format("MMM Do YY"),
                action : (
                  <div className='flex flex-row space-x-2'>
                    <Link to={`/admin/brands/${brandState[i]._id}`}>
                      <FiEdit className='w-5 h-5'/>
                    </Link>
                    <button onClick={()=> handleClick(brandState[i]._id)}>
                      <AiOutlineDelete className='w-[22px] h-[22px] hover:text-blue-600'/>
                    </button>
                  </div>
                )
                
            })
        }
  return (
    <>
    <div className='mt-3 mx-2 py-2 h-[82vh] overflow-y-scroll '>
        <h2 className='font-bold text-xl tracking-wide px-3 py-2 '>Brands </h2>
        <div className='px-2 py-2 '>
            <Table columns={columns} dataSource={tabledata} tableLayout/>
        </div>
        <CustomModal  title="Delete" open={open} action={()=> deleteFunc(brandId)}  hideModal={hideModal} content="Are you sure? You want to  delete this brand" />
    </div>
   </>
  )
}

export default Brands