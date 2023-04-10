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
          sorter: (a, b) => a.name.length - b.name.length, 
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'Email',
        },
        {
          title: 'Mobile',
          dataIndex: 'mobile',
          key: 'Mobile',
        },
      ]
        const dispatch = useDispatch()
          useEffect(()=> {
            dispatch(getusers())
          }, [])
          //  Assigning avaialbe data using state
          const customerstate = useSelector((state) => state.customer.customer )

          // Table creation using feched customer data
          const tabledata = []
           for(let i = 0; i<customerstate.length ; i++) {
            tabledata.push({
                key: i + 1,
                name : customerstate[i].firstname + " " + customerstate[i].lastname,
                email : customerstate[i].email,
                mobile : customerstate[i].mobile
            })
          }


  return (

    <>
    <div className='mt-3 mx-2 py-2 h-[82vh] overflow-y-scroll '>
        <h2 className='font-bold text-xl tracking-wide px-3 py-2 '>All Customers</h2>
        <div className='px-2 py-2 '>
            <Table columns={columns} dataSource={tabledata}  tableLayout/>

        </div>
    </div>
   </>
  )
}

export default Customers