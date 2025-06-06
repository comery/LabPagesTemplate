import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

const { Header: AntHeader } = Layout;

const StyledHeader = styled(AntHeader)`
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;
  display: flex;
  align-items: center;
  padding: 0 50px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(12, 53, 71, 0.06);

  .ant-menu {
    font-size: 16px;
    font-weight: bold;
  }

  .ant-menu-item {
    &:hover {
      background-color: rgba(16, 101, 109, 0.05);
    }
  }

  .ant-menu-item-selected {
    &[data-path="/"] {
      color: #0C3547 !important;
      background-color: rgba(12, 53, 71, 0.1) !important;
    }
    &[data-path="/about"] {
      color: #10656D !important;
      background-color: rgba(16, 101, 109, 0.1) !important;
    }
    &[data-path="/publications"] {
      color: #598F91 !important;
      background-color: rgba(89, 143, 145, 0.1) !important;
    }
    &[data-path="/projects"] {
      color: #93B071 !important;
      background-color: rgba(147, 176, 113, 0.1) !important;
    }
    &[data-path="/members"] {
      color: #EDAE93 !important;
      background-color: rgba(237, 174, 147, 0.1) !important;
    }
    &[data-path="/contact"] {
      color: #DD6670 !important;
      background-color: rgba(221, 102, 112, 0.1) !important;
    }
  }
`;

const Logo = styled(Link)`
  float: left;
  height: 31px;
  margin: 16px 24px 16px 0;
  font-size: 18px;
  font-weight: bold;
  color: #0C3547;
  &:hover {
    color: #10656D;
  }
`;

const Header = () => {
  const location = useLocation();
  
  const menuItems = [
    { key: '/', label: '首页' },
    { key: '/about', label: '实验室介绍' },
    { key: '/publications', label: '发表文章' },
    { key: '/projects', label: '项目介绍' },
    { key: '/members', label: '人员介绍' },
    { key: '/contact', label: '联系我们' },
  ];

  return (
    <StyledHeader>
      <Logo to="/">实验室名称</Logo>
      <Menu
        mode="horizontal"
        selectedKeys={[location.pathname]}
        items={menuItems.map(item => ({
          ...item,
          label: <Link to={item.key}>{item.label}</Link>,
          'data-path': item.key
        }))}
      />
    </StyledHeader>
  );
};

export default Header;