import React, { useEffect } from 'react'
import {  Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../features/products/productSlice';
import { Link } from 'react-router-dom';
import {FiEdit} from 'react-icons/fi'
import {AiOutlineDelete} from 'react-icons/ai'

function Productlist() {

    const columns = [
        {
          title: 'Slno',
          dataIndex: 'key',
          key: 'slno',
        },
        {
          title: 'Tittle',
          dataIndex: 'tittle',
          key: 'tittle',
          sorter: (a, b) => a.tittle.length - b.tittle.length, 
        },
        {
          title: 'Category',
          dataIndex: 'category',
          key: 'category',
          sorter: (a, b) => a.category.length - b.category.length,
        },
        {
          title: 'Brand',
          dataIndex: 'brand',
          key: 'brand',
          sorter: (a, b) => a.brand.length - b.brand.length,
        },
        {
          title: 'Quantity',
          dataIndex: 'quantity',
          key: 'quantity',
        },
        {
          title: 'Sold',
          dataIndex: 'sold',
          key: 'sold',
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
          sorter: (a, b) => a.price - b.price,
        },
        {
          title: 'Rating',
          dataIndex: 'totalrating',
          key: 'totalrating',
        },
        {
          title: 'Action',
          dataIndex: 'action',
          key: 'action',
        },
    ]

    const dispatch = useDispatch()
          useEffect(()=> {
            dispatch(getProducts())
          }, [])
          //  Assigning avaialbe data using state
          const productstate = useSelector((state) => state.product.product )

          // Change table data according to product state
    const tabledata = []
        for(let i = 0; i<productstate.length ; i++) {
            tabledata.push({
                key: i + 1,
                tittle : productstate[i].tittle,
                category : productstate[i].category,
                brand : productstate[i].brand,
                quantity : productstate[i].quantity,
                sold : productstate[i].sold,
                price : productstate[i].price,
                totalrating : productstate[i].totalrating,
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
        <h2 className='font-bold text-xl tracking-wide px-3 py-2 '>Products Available</h2>
        <div className='px-2 py-2 '>
            <Table columns={columns} dataSource={tabledata} tableLayout/>

        </div>
    </div>
   </>
  )
}

export default Productlist