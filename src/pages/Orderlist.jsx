import React, { useEffect } from 'react'
import {  Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from '../features/Order/OrderSlice';
import { Link } from 'react-router-dom';
import {FiEdit} from 'react-icons/fi'
import {AiOutlineDelete} from 'react-icons/ai'


function Orderlist() {

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
          title: 'Products',
          dataIndex: 'products',
          key: 'Products',
        },
        {
          title: 'OrderId',
          dataIndex: 'orderId',
          key: 'orderId',
        },
        {
          title: 'OrderCreated',
          dataIndex: 'orderCreated',
          key: 'orderCreated',
        },
        {
          title: 'Action',
          dataIndex: 'action',
          key: 'action',
        },
    ]

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getAllOrders())
    }, [])

    const orderstate = useSelector((state) => state.orders.allOrders)

    const tabledata = []
        for(let i = 0; i<orderstate.length ; i++) {
            tabledata.push({
                key: i + 1,
                name : orderstate[i].orderBy.firstname,
                status : orderstate[i].orderStatus,
                products : orderstate[i].products.map((item, index) => {
                  return (
                    <>
                        <p>{item.product.tittle}</p>
                    </>
                  )
                }),
                orderId : orderstate[i]._id,
                orderCreated : new Date(orderstate[i].createdAt).toLocaleString(),
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
        <h2 className='font-bold text-xl tracking-wide px-3 py-2 '>All orders</h2>
        <div className='px-2 py-2 '>
            <Table columns={columns} dataSource={tabledata} tableLayout/>

        </div>
    </div>
   </>
  )
}

export default Orderlist