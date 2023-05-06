import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {IoMdArrowBack} from "react-icons/io"
import {  Table } from 'antd';

const ViewOrder = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation();

    const orderstate = useSelector((state) => state.orders.allOrders)

    const userid = location.pathname.split("/")[3]


    const backClick = () => {
        navigate(-1)
    }


    useEffect(() => {
        dispatch(getUserOrders())
    }, [])
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
                  <Link to={`/admin/orders/${orderstate[i].orderBy._id}`}>
                      View Order
                  </Link>
                  
              </div>
            )

        })
    }

  return (
    <div className='px-5 py-5'>
        <div className='flex justify-between items-center'>
            <h3 className='font-sans text-2xl font-bold '>View Order</h3>
            <div className='flex flex-row items-center gap-2'>
                <IoMdArrowBack/>
                <button 
                    onClick={backClick}
                    className='font-semibold'
                >
                    Go back
                </button>
            </div>
        </div>
        <div className='mt-3 mx-2 py-2 h-[82vh] overflow-y-scroll '>
        <div className='px-2 py-2 '>
            <Table columns={columns} dataSource={tabledata} tableLayout/>

        </div>
    </div>
    </div>
  )
}

export default ViewOrder