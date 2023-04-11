import React, { useEffect } from 'react'
import {  Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getblogs } from '../features/blogs/blogSlice';
import { Link } from 'react-router-dom';
import {FiEdit} from 'react-icons/fi'
import {AiOutlineDelete} from 'react-icons/ai'

function Bloglist() {

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
          title: 'Category',
          dataIndex: 'category',
          key: 'category',
          sorter: (a, b) => a.category.length - b.category.length,
        },
        {
            title: 'Authur',
            dataIndex: 'authur',
            key: 'authur',
            sorter: (a, b) => a.authur.length - b.authur.length,
        },
        {
            title: 'NumOfViews',
            dataIndex: 'numOfViews',
            key: 'numOfViews',
            sorter: (a, b) => a.numOfViews - b.numOfViews,
        },
        {
          title: 'Action',
          dataIndex: 'action',
          key: 'action',
        },
    ]

    const dispatch = useDispatch()

    useEffect(()=> {
      dispatch(getblogs())
    }, [])


    const blogstate = useSelector((state) => state.blogs.blog)

    console.log(blogstate);
    const tabledata = []
        for(let i = 0; i<blogstate.length ; i++) {
            tabledata.push({
                key: i + 1,
                name : blogstate[i].tittle,
                category : blogstate[i].category,
                authur : blogstate[i].Authur,
                numOfViews : blogstate[i].numOfViews,
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
        <h2 className='font-bold text-xl tracking-wide px-3 py-2 '>Blogs List </h2>
        <div className='px-2 py-2 '>
            <Table columns={columns} dataSource={tabledata} tableLayout/>

        </div>
    </div>
   </>
  )
}

export default Bloglist