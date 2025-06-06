import React from 'react';
import { Layout as AntLayout } from 'antd';
import styled from '@emotion/styled';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const { Content } = AntLayout;

const StyledLayout = styled(AntLayout)`
  min-height: 100vh;
`;

const StyledContent = styled(Content)`
  padding: 0 50px;
  margin-top: 64px;
`;

const ContentWrapper = styled.div`
  background: #fff;
  padding: 24px;
  min-height: calc(100vh - 64px - 70px);
`;

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <StyledContent>
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </StyledContent>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;