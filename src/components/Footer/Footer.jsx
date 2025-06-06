import React from 'react';
import { Layout } from 'antd';
import styled from '@emotion/styled';

const { Footer: AntFooter } = Layout;

const StyledFooter = styled(AntFooter)`
  text-align: center;
  background: #f0f2f5;
`;

const Footer = () => {
  return (
    <StyledFooter>
      © {new Date().getFullYear()} 实验室名称. All Rights Reserved.
    </StyledFooter>
  );
};

export default Footer;