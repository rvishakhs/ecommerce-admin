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
import {FiLogOut} from "react-icons/fi"
import {TbFileInvoice, TbNotebook} from "react-icons/tb"
import {MdCategory, MdManageAccounts} from "react-icons/md"
import {RiLockPasswordLine} from "react-icons/ri"

import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;


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
        <div className='w-full flex items-center justify-center bg-yellow-400 py-2 px-2 mb-3'>
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
                key: 'category',
                icon: <MdCategory className='w-5 h-5' />,
                label: 'Category',
              },
                {
                key: 'addcategory',
                icon: <CgDuplicate className='w-5 h-5' />,
                label: 'Add-Category',
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
          className="px-2"
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
export default Mainui;