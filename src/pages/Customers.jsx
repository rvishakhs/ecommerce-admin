import React, { useEffect } from 'react'
import {  Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getusers } from '../features/customers/customersSlice';

function Customers() {

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
          title: 'Status',
          dataIndex: 'status',
          key: 'Status',
        },
        {
            title: 'Product',
            dataIndex: 'product',
            key: 'Product',
          },
    ]

    const tabledata = []
        for(let i = 0; i<50 ; i++) {
            tabledata.push({
                key: i,
                name : `Harry potter ${i}`,
                product : `item ${i}`,
                status : `London Canon street ${i}`
            })
        }
        const dispatch = useDispatch()
          useEffect(()=> {
            dispatch(getusers())
          }, [])

          const state = useSelector((state) => state.users)

          console.log(state);
  return (
    <>
    <div className='mt-3 mx-2 py-2 h-[82vh] overflow-y-scroll '>
        <h2 className='font-bold text-xl tracking-wide px-3 py-2 '>All Customers</h2>
        <div className='px-2 py-2 '>
            <Table columns={columns} dataSource={tabledata} tableLayout/>

        </div>
    </div>
   </>
  )
}

export default Customers