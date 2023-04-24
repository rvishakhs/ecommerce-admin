import React, { useEffect, useState } from 'react'
import {  Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProdCategory, getProdCategory } from '../features/products/productCategorySlice';
import { Link } from 'react-router-dom';
import {FiEdit} from 'react-icons/fi'
import {AiOutlineDelete} from 'react-icons/ai'
import moment from 'moment';
import CustomModal from '../components/CustomModal';
import { toast } from 'react-toastify';

function Categorylist() {

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

    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [categoryId, setcategoryId] = useState("");

    const newProductCategory = useSelector((state)=> state.prodCategory)  // Toast related
    const {isSucess, isError, isLoading, deletedProdCat} = newProductCategory //Toast related

    // React Toast section 
    useEffect(()=> {
      if(deletedProdCat && isSucess  ) {
        toast.success('Product Category deleted successfully') 
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
      setcategoryId(data)
      setOpen(true)
  
    }
  
    const deleteFunc = (id) => {
        dispatch(deleteProdCategory(id))
        setTimeout(() => {
          dispatch(getProdCategory())
          setOpen(false)
        }, 100);
  
    }

    useEffect(()=>{
      dispatch(getProdCategory())
    }, [])

    const productCategoryState = useSelector((state)=> state.prodCategory.productcategory)

    console.log(productCategoryState);

    const tabledata = []
        for(let i = 0; i<productCategoryState.length ; i++) {
          tabledata.push({
            key: i + 1,
            name : productCategoryState[i].tittle,
            createdAt : moment( productCategoryState[i].createdAt).format("MMM Do YY"),
            action : (
              <div className='flex flex-row space-x-2'>

                <Link to={`/admin/category/${productCategoryState[i]._id}`}>
                  <FiEdit className='w-5 h-5'/>
                </Link>
                <button onClick={()=> handleClick(productCategoryState[i]._id)}>
                      <AiOutlineDelete className='w-[22px] h-[22px] hover:text-blue-600'/>
                </button>
              
              </div>
            )
            
        })
        }
  return (
    <>
    <div className='mt-3 mx-2 py-2 h-[82vh] overflow-y-scroll '>
        <h2 className='font-bold text-xl tracking-wide px-3 py-2 '>Categories </h2>
        <div className='px-2 py-2 '>
            <Table columns={columns} dataSource={tabledata} tableLayout/>
        </div>
        <CustomModal  title="Delete" open={open} action={()=> deleteFunc(categoryId)}  hideModal={hideModal} content="Are you sure? You want to  delete this product Category" />

    </div>
   </>
  )
}

export default Categorylist