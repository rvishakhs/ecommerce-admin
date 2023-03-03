import {
  DashboardOutlined ,
  MenuFoldOutlined,
  MenuUnfoldOutlined,

} from '@ant-design/icons';
import {BsPeople} from "react-icons/bs"
import {AiOutlineDashboard} from "react-icons/ai"
import {CgFolderAdd, CgFolder } from "react-icons/cg"
import {BiCategoryAlt} from "react-icons/bi"
import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
const { Header, Sider, Content } = Layout;


const Mainui = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className='h-screen'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo py-2" />
        <p></p>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['dashbard']}
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