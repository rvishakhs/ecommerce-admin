import React, { useEffect } from 'react'
import {  Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getblogCategory } from '../features/blogs/blogCategorySlice';
import { Link } from 'react-router-dom';
import {FiEdit} from 'react-icons/fi'
import {AiOutlineDelete} from 'react-icons/ai'
import moment from 'moment';


function Blogcategorylist() {

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

    useEffect(()=>{
      dispatch(getblogCategory())
    }, [])

    const blogCategorystate = useSelector((state) => state.blogCategory.blogcategory)

    const tabledata = []
        for(let i = 0; i<blogCategorystate.length ; i++) {
            tabledata.push({
                key: i + 1,
                name : blogCategorystate[i].tittle,
                createdAt :moment( blogCategorystate[i].createdAt).format("MMM Do YY"),
                action : (
                  <div className='flex flex-row space-x-2'>
    
                    <Link to={`/admin/blogcategories/${blogCategorystate[i]._id}`}>
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
        <h2 className='font-bold text-xl tracking-wide px-3 py-2 '>Blogs Category List </h2>
        <div className='px-2 py-2 '>
            <Table columns={columns} dataSource={tabledata} tableLayout/>

        </div>
    </div>
   </>
  )
}

export default Blogcategorylist