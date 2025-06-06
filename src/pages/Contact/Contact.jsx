import React from 'react';
import { Typography, Card, Row, Col, Space } from 'antd';
import { 
  EnvironmentOutlined, 
  PhoneOutlined, 
  MailOutlined 
} from '@ant-design/icons';
import styled from '@emotion/styled';

const { Title, Paragraph } = Typography;

const StyledCard = styled(Card)`
  margin-bottom: 24px;
  border-color: #DD6670;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(221, 102, 112, 0.15);
  }
`;

const IconText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

const Contact = () => {
  return (
    <>
      <Title level={2}>联系我们</Title>
      
      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <StyledCard title="联系方式">
            <Space direction="vertical" size="large">
              <IconText>
                <EnvironmentOutlined style={{ fontSize: 24 }} />
                <Paragraph>
                  地址：XX省XX市XX区XX路XX号
                  XX大学XX楼XXX室
                </Paragraph>
              </IconText>
              
              <IconText>
                <PhoneOutlined style={{ fontSize: 24 }} />
                <Paragraph>电话：123-4567-8900</Paragraph>
              </IconText>
              
              <IconText>
                <MailOutlined style={{ fontSize: 24 }} />
                <Paragraph>邮箱：contact@example.com</Paragraph>
              </IconText>
            </Space>
          </StyledCard>
        </Col>
        
        <Col xs={24} md={12}>
          <StyledCard title="交通指南">
            <Paragraph>
              地铁路线：
              - X号线到XX站X号出口，步行约X分钟
            </Paragraph>
            <Paragraph>
              公交路线：
              - XXX路公交车到XX站
              - XXX路公交车到XX站
            </Paragraph>
          </StyledCard>
        </Col>
      </Row>
    </>
  );
};

export default Contact;