import React from 'react'
import {BsThreeDotsVertical, BsArrowUpRight} from "react-icons/bs"
import { Column } from '@ant-design/plots';

function Adminanel() {
    const data = [
        {
          type: '家具家电',
          sales: 38,
        },
        {
          type: '粮油副食',
          sales: 52,
        },
        {
          type: '生鲜水果',
          sales: 61,
        },
        {
          type: '美容洗护',
          sales: 145,
        },
        {
          type: '母婴用品',
          sales: 48,
        },
        {
          type: '进口食品',
          sales: 38,
        },
        {
          type: '食品饮料',
          sales: 38,
        },
        {
          type: '家庭清洁',
          sales: 38,
        },
      ];
      const config = {
        data,
        xField: 'type',
        yField: 'sales',
        label: {
          // 可手动配置 label 数据标签位置
          position: 'middle',
          // 'top', 'bottom', 'middle',
          // 配置样式
          style: {
            fill: '#FFFFFF',
            opacity: 0.6,
          },
        },
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
        meta: {
          type: {
            alias: '类别',
          },
          sales: {
            alias: '销售额',
          },
        },
      };

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
            <div className="px-5 py-5">

                <Column {...config} />
            </div>
        </div>

    </div>
  )
}

export default Adminanel