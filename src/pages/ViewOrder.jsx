import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {IoMdArrowBack} from "react-icons/io"
import {  Table } from 'antd';
import { getUserOrders } from '../features/Order/OrderSlice';

const ViewOrder = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation();

    const userOrder = useSelector((state) => state.orders)

    const {orderDetails} = userOrder

    const userid = location.pathname.split("/")[3]

    console.log(orderDetails);

    const backClick = () => {
        navigate(-1)
    }


    useEffect(() => {
        dispatch(getUserOrders(userid))
    }, [])
    const columns = [
        {
          title: 'Slno',
          dataIndex: 'key',
          key: 'slno',
        },
        {
          title: 'Products',
          dataIndex: 'products',
          key: 'products',
        },
        {
          title: 'Brand',
          dataIndex: 'brand',
          key: 'brand',
        },
        {
          title: 'Qty',
          dataIndex: 'Qty',
          key: 'Qty',
        },
        {
          title: 'Price',
          dataIndex: 'Price',
          key: 'Price',
        },
        {
          title: 'Color',
          dataIndex: 'Color',
          key: 'Color',
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'Status',
        },
        
    ]
    const tabledata = []
    for(let i = 0; i<orderDetails?.products.length ; i++) {
        tabledata.push({
            key: i + 1,
            products : orderDetails.products[i].product.tittle,
            brand : orderDetails.products[i].product.brand,
            Qty : orderDetails.products[i].count,
            Price : orderDetails.products[i].price,
            Color : orderDetails.products[i].color,
            Status : orderDetails?.paymentIntent.status
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