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
          title: 'OrderId',
          dataIndex: 'orderId',
          key: 'orderId',
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
          title: 'Method',
          dataIndex: 'method',
          key: 'method',
        },
        {
          title: 'Amount',
          dataIndex: 'amount',
          key: 'amount',
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
                orderId : orderstate[i].paymentIntent.id,
                name : orderstate[i].orderBy.firstname,
                status : orderstate[i].orderStatus,
                method: orderstate[i].paymentIntent.method,
                amount: orderstate[i].paymentIntent.amount,
                orderCreated : new Date(orderstate[i].createdAt).toLocaleString(),
                action : (
                  <div className='flex flex-row space-x-2 hover:text-blue-300 hover:scale-105'>
                      <FiEdit className='w-5 h-5'/>
                      <Link to={`/admin/orders/${orderstate[i]._id}`}>
                          View Order
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