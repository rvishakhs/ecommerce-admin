import React, { useEffect, useState } from 'react'
import {  Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {FiEdit} from 'react-icons/fi'
import {AiOutlineDelete} from 'react-icons/ai'
import moment from 'moment';
import { deleteCoupon, getcoupons } from '../features/coupon/couponSlice';
import CustomModal from '../components/CustomModal';
import { toast } from 'react-toastify';
import { resetState } from '../features/colors/colorSlice';


function Couponlisting() {

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [couponId, setcouponId] = useState("");

  const coupons = useSelector((state)=> state.coupons)  // Toast related
 const {isSucess, isError, isLoading, deletedcoupon} = coupons //Toast related

// React Toast section 
useEffect(()=> {
  if(isSucess && deletedcoupon ) {
    toast.success('Coupon deleted successfully') 
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
    setcouponId(data)
    setOpen(true)

  }

  const deleteFunc = (id) => {
      dispatch(deleteCoupon(id))
      setTimeout(() => {
        dispatch(getcoupons())
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
          title: 'Coupon Name',
          dataIndex: 'name',
          key: 'name',
          sorter: (a, b) => a.name.length - b.name.length, 
        },
        {
          title: 'Expires In',
          dataIndex: 'expires_in',
          key: 'expires_in',
        },
        {
          title: 'Discount ',
          dataIndex: 'discount',
          key: 'discount',
        },
        {
          title: 'Action',
          dataIndex: 'action',
          key: 'action',
        },
        
    ]

    useEffect(()=>{
      dispatch(getcoupons())
    }, [])

    const couponstate = useSelector((state)=> state.coupons.coupon)

    
    const tabledata = []
        for(let i = 0; i<couponstate.length ; i++) {
            tabledata.push({
                key: i + 1,
                name : couponstate[i].tittle,
                expires_in : moment( couponstate[i].expiry).format("MMM Do YY"),
                discount : couponstate[i].discount,
                action : (
                  <div className='flex flex-row space-x-2'>

                    <Link to={`/admin/coupons/${couponstate[i]._id}`}>
                      <FiEdit className='w-5 h-5'/>
                    </Link>
                    <button onClick={()=> handleClick(couponstate[i]._id)}>
                      <AiOutlineDelete className='w-[22px] h-[22px] hover:text-blue-600'/>
                    </button>
                  
                  </div>
                )
                
            })
        }
  return (
    <>
    <div className='mt-3 mx-2 py-2 h-[82vh] overflow-y-scroll '>
        <h2 className='font-bold text-xl tracking-wide px-3 py-2 '>Coupons </h2>
        <div className='px-2 py-2 '>
            <Table columns={columns} dataSource={tabledata} tableLayout/>
        </div>
        <CustomModal  title="Delete" open={open} action={()=> deleteFunc(couponId)}  hideModal={hideModal} content="Are you sure? You want to  delete this coupon" />

    </div>
   </>
  )
}

export default Couponlisting