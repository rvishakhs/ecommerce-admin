import React from 'react'
import {  Table } from 'antd';

function Enquiry() {

    const columns = [
        {
          title: 'Slno',
          dataIndex: 'Sl no',
          key: 'slno',
        },
        {
          title: 'Name',
          dataIndex: 'Name',
          key: 'Name',
        },
        {
          title: 'Status',
          dataIndex: 'Status',
          key: 'Status',
        },
        {
            title: 'Product',
            dataIndex: 'Product',
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
  return (
   <>
    <div className='mt-3 mx-2 py-2'>
        <h2 className='font-bold text-xl tracking-wide '>Enquiry Details</h2>
        <div className='px-2 py-2'>
            <Table columns={columns} dataSource={tabledata} />

        </div>
    </div>
   </>
  )
}

export default Enquiry