import {
  DashboardOutlined ,
  MenuFoldOutlined,
  MenuUnfoldOutlined,

} from '@ant-design/icons';
import {BsPeople} from "react-icons/bs"
import {AiOutlineDashboard, AiOutlineFileSearch} from "react-icons/ai"
import {CgFolderAdd, CgFolder, CgDuplicate } from "react-icons/cg"
import {BiCategoryAlt} from "react-icons/bi"
import {ImBooks, ImProfile} from "react-icons/im"
import {GiNotebook} from "react-icons/gi"
import {BsBell} from "react-icons/bs"
import {FiLogOut} from "react-icons/fi"
import {TbFileInvoice, TbNotebook, TbCategory, TbListCheck} from "react-icons/tb"
import {MdCategory, MdManageAccounts, MdOutlineColorLens, MdOutlineFormatColorFill} from "react-icons/md"
import {RiLockPasswordLine} from "react-icons/ri"


import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Dropdown, Space } from 'antd';
const { Header, Sider } = Layout;


const Mainui = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate()

 


  return (
    <Layout className='h-screen '>
      <Sider 
        className=''  
        trigger={null} collapsible collapsed={collapsed}>
        <div className="logo " />
        <div className='w-full flex items-center justify-center bg-yellow-400 py-3 px-2 mb-3'>
          {
            collapsed?  (<p className='font-semibold text-xl transition !delay-700 !duration-700 ease-linear '>ES</p>)  : ( <p className='font-semibold text-xl transition !delay-700 !duration-700 ease-linear'>EShoppers</p>)
          }
        </div>
        <Menu
          theme="dark"
          mode="inline"
          className=''
          defaultSelectedKeys={['dashbard']}
          onClick={({key}) => {
            if(key === "signout ") {

            } else {
              navigate(key)
            }
          }} 
          items={[
            {
              key: 'dashbard',
              icon: <AiOutlineDashboard className='w-5 h-5'/>,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <BsPeople className='w-5 h-5' />,
              label: 'Customers',
            },
            {
              key: 'catalogue',
              icon: <BiCategoryAlt className='w-5 h-5' />,
              label: 'Catalogue',
              children : [
                {
                key: 'products',
                icon: <CgFolder className='w-5 h-5' />,
                label: 'products',
              },
                {
                key: 'addproducts',
                icon: <CgFolderAdd className='w-5 h-5' />,
                label: 'Add-products',
              },
                {
                key: 'brands',
                icon: <CgFolder className='w-5 h-5' />,
                label: 'Brands',
              },
                {
                key: 'addbrand',
                icon: <CgFolderAdd className='w-5 h-5' />,
                label: 'Add-Brand',
              },
                {
                key: 'category',
                icon: <MdCategory className='w-5 h-5' />,
                label: 'Category',
              },
                {
                key: 'addcategory',
                icon: <CgDuplicate className='w-5 h-5' />,
                label: 'Add-Category',
              },
                {
                key: 'colors',
                icon: <MdOutlineColorLens className='w-5 h-5' />,
                label: 'Colors',
              },
                {
                key: 'addcolors',
                icon: <MdOutlineFormatColorFill className='w-5 h-5' />,
                label: 'Add-Color',
              },
            ]
            },
            {
              key: 'orders',
              icon: <TbFileInvoice className='w-5 h-5' />,
              label: 'Orders',
            },
            {
              key: 'blog',
              icon: <ImBooks className='w-5 h-5' />,
              label: 'Blog',
              children: [
                {
                  key: 'blogs',
                  icon: <TbNotebook className='w-5 h-5' />,
                  label: 'Blogs',
                },
                {
                  key: 'addblogs',
                  icon: <GiNotebook className='w-5 h-5' />,
                  label: 'Add-Blogs',
                },
                {
                  key: 'blogcategories',
                  icon: <TbListCheck className='w-5 h-5' />,
                  label: 'Blog Categories',
                },
                {
                  key: 'addblogcategories',
                  icon: <GiNotebook className='w-5 h-5' />,
                  label: 'Add-Blog Categories',
                }
              ]
            },
            {
              key: 'enquiry',
              icon: <AiOutlineFileSearch className='w-5 h-5' />,
              label: 'Enquiry',
            },
            {
              key: 'account',
              icon: <MdManageAccounts className='w-5 h-5' />,
              label: 'Account',
              children: [
                {
                  key: 'profile',
                  icon: <ImProfile className='w-5 h-5' />,
                  label: 'Profile',
                },
                {
                  key: 'resetpassword',
                  icon: <RiLockPasswordLine className='w-5 h-5' />,
                  label: 'Reset Password',
                },
                {
                  key: 'logout',
                  icon: <FiLogOut className='w-5 h-5' />,
                  label: 'Logout',
                }
              ]
            },
           
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
          className="px-2 "
        >
          <div className='flex justify-between px-2'>
            <div className='px-2 ml-2 text-2xl mt-2'>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger ',
                onClick: () => setCollapsed(!collapsed),
              })}
            </div>
            <div className='flex '>
                <div 
                  className='flex relative items-center gap-2 dropdown'
                  
                >
                    <BsBell className=' w-6 mt-2 h-6 mr-4 cursor-pointer ' />
                    <div className='absolute w-3 top-[12px] right-[12px] animate-pulse h-3 rounded-full bg-yellow-400'></div>
                </div>
                <div className='flex items-center space-x-1 '>
                  <img 
                    src='https://avatars.githubusercontent.com/u/56556101?v=4'
                    className='w-9 h-10 mt-2 rounded-xl object-contain'
                  />
                  <div 
                    className='flex flex-col mt-2 px-2 '
                    
                  >
                        <p 
                        className='font-medium text-lg text-black tracking-wide'
                        >Visakh SR</p>
                        <p className='font-medium text-base text-gray-500 '>Rvishaks@gmail.com</p>
                    
                  </div>
                    
                </div>
            </div>
          </div>
        </Header>
          <main className='mt-4 mb-2 mx-2'>
              <Outlet />
          </main>
      </Layout>
    </Layout>
  );
};
export default Mainui;