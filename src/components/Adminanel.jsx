import React from 'react'
import {BsThreeDotsVertical, BsArrowUpRight} from "react-icons/bs"
import { Column } from '@ant-design/plots';
import { Space, Table, Tag } from 'antd';

function Adminanel() {

  // Dummy data for Chart
    const data = [
        {
          type: 'January',
          sales: 38,
        },
        {
          type: 'February',
          sales: 52,
        },
        {
          type: 'March',
          sales: 61,
        },
        {
          type: 'April',
          sales: 145,
        },
        {
          type: 'May',
          sales: 48,
        },
        {
          type: 'June',
          sales: 38,
        },
        {
          type: 'July',
          sales: 38,
        },
        {
          type: 'August',
          sales: 38,
        },
        {
          type: 'September',
          sales: 45,
        },
        {
          type: 'October',
          sales: 30,
        },
        {
          type: 'November',
          sales: 28,
        },
        {
          type: 'December',
          sales: 25,
        },
      ];
      const config = {
        data,
        xField: 'type',
        yField: 'sales',
        color: "#FDDA0D",
        
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
        meta: {
          type: {
            alias: 'month',
          },
          sales: {
            alias: 'Income',
          },
        },
      };

  // Dummy data for Table

  const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const tabledata = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]

  return (
    <div className='flex flex-col px-6 py-2 h-[82vh] overflow-y-scroll'>
        {/* Tittle Section */}
        <div className='py-3'>   
            <h2 className='font-bold  text-3xl tracking-wide'>DashBoard</h2>
        </div>
        {/* Top Section */}
        <div className='flex gap-2 justify-between items-center'>
            <div className='bg-white px-3 py-3 rounded-md flex-grow space-y-4'>
                <div className='flex justify-between items-center '>
                    <p className='font-medium text-base text-gray-500'>Total Sales</p>
                    <BsThreeDotsVertical  className='cursor-pointer hover:scale-110'/>
                </div>
                <div className='flex justify-between'>
                    <p className='font-bold text-2xl mt-2'>$1100</p>
                    <div className='flex flex-col'>
                        <div className='flex flex-row space-x-1 items-center justify-end'>
                            <BsArrowUpRight className='text-green-500 w-5 h-5'/>
                            <p className='font-medium text-base text-green-500 tracking-wide leading-7'>37.4 %</p>
                        </div>
                        <p className='text-sm text-gray-500 font-medium'>Compared to April 2021</p>
                    </div>
                </div>
            </div>
            <div className='bg-white px-3 py-3 rounded-md flex-grow space-y-4'>
                <div className='flex justify-between items-center '>
                    <p className='font-medium text-base text-gray-500'>Total Sales</p>
                    <BsThreeDotsVertical  className='cursor-pointer hover:scale-110'/>
                </div>
                <div className='flex justify-between'>
                    <p className='font-bold text-2xl mt-2'>$1100</p>
                    <div className='flex flex-col'>
                        <div className='flex flex-row space-x-1 items-center justify-end'>
                            <BsArrowUpRight className='text-green-500 w-5 h-5'/>
                            <p className='font-medium text-base text-green-500 tracking-wide leading-7'>37.4 %</p>
                        </div>
                        <p className='text-sm text-gray-500 font-medium'>Compared to April 2021</p>
                    </div>
                </div>
            </div>
            <div className='bg-white px-3 py-3 rounded-md flex-grow space-y-4'>
                <div className='flex justify-between items-center '>
                    <p className='font-medium text-base text-gray-500'>Total Sales</p>
                    <BsThreeDotsVertical  className='cursor-pointer hover:scale-110'/>
                </div>
                <div className='flex justify-between'>
                    <p className='font-bold text-2xl mt-2'>$1100</p>
                    <div className='flex flex-col'>
                        <div className='flex flex-row space-x-1 items-center justify-end'>
                            <BsArrowUpRight className='text-green-500 w-5 h-5'/>
                            <p className='font-medium text-base text-green-500 tracking-wide leading-7'>37.4 %</p>
                        </div>
                        <p className='text-sm text-gray-500 font-medium'>Compared to April 2021</p>
                    </div>
                </div>
            </div>


        </div>
        {/* Bottom Section */}
        <div>
            <div className="px-4 py-2 my-4 rounded-lg bg-white">
                <h2 className='font-bold text-2xl tracking-wide  font-sans mb-2 px-2 py-2'>Income</h2> 
                <Column {...config} />
            </div>
            <div className="px-4 py-2 my-4 rounded-lg bg-white">
                <h2 className='font-bold text-2xl tracking-wide  font-sans mb-2 px-2 py-2'>Sales Details</h2> 
                <Table columns={columns} dataSource={tabledata} />
            </div>
        </div>

    </div>
  )
}

export default Adminanel