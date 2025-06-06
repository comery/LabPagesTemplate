import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeOutlined,
  FileTextOutlined,
  ProjectOutlined,
  TeamOutlined,
  NotificationOutlined,
  CalendarOutlined
} from '@ant-design/icons';
import styled from '@emotion/styled';

const { Header, Sider, Content } = Layout;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const StyledContent = styled(Content)`
  margin: 24px;
  padding: 24px;
  background: #fff;
  min-height: 280px;
`;

const AdminLayout = ({ children }) => {
  const location = useLocation();

  const menuItems = [
    {
      key: '/admin',
      icon: <HomeOutlined />,
      label: <Link to="/admin">管理主页</Link>,
    },
    {
      key: '/admin/news',
      icon: <NotificationOutlined />,
      label: <Link to="/admin/news">动态管理</Link>,
    },
    {
      key: '/admin/activities',
      icon: <CalendarOutlined />,
      label: <Link to="/admin/activities">活动管理</Link>,
    },
    {
      key: '/admin/publications',
      icon: <FileTextOutlined />,
      label: <Link to="/admin/publications">文章管理</Link>,
    },
    {
      key: '/admin/projects',
      icon: <ProjectOutlined />,
      label: <Link to="/admin/projects">项目管理</Link>,
    },
    {
      key: '/admin/members',
      icon: <TeamOutlined />,
      label: <Link to="/admin/members">成员管理</Link>,
    },
  ];

  return (
    <StyledLayout>
      <Sider width={200} theme="light">
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          style={{ height: '100%', borderRight: 0 }}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <StyledContent>
          {children}
        </StyledContent>
      </Layout>
    </StyledLayout>
  );
};

export default AdminLayout;