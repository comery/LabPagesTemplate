import React from 'react';
import { Typography, Card, Row, Col } from 'antd';
import styled from '@emotion/styled';

const { Title, Paragraph } = Typography;

const StyledSection = styled.div`
  margin-bottom: 40px;
`;

const StyledCard = styled(Card)`
  transition: all 0.3s ease;
  background: rgba(16, 101, 109, 0.05);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(16, 101, 109, 0.15);
    background: rgba(16, 101, 109, 0.1);
  }

  .ant-card-head {
    background: rgba(16, 101, 109, 0.1);
  }
`;

const About = () => {
  return (
    <>
      <StyledSection>
        <Title level={2}>实验室介绍</Title>
        <StyledCard>
          <Paragraph>
            我们的实验室致力于[研究领域]的前沿研究，拥有一支专业的研究团队。
            实验室配备了先进的研究设备和完善的实验环境，为科研工作提供了坚实的基础。
          </Paragraph>
        </StyledCard>
      </StyledSection>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={8}>
          <StyledCard title="研究方向">
            <ul>
              <li>方向一：xxx</li>
              <li>方向二：xxx</li>
              <li>方向三：xxx</li>
            </ul>
          </StyledCard>
        </Col>
        <Col xs={24} md={8}>
          <StyledCard title="实验室成果">
            <ul>
              <li>发表SCI论文xx篇</li>
              <li>获得国家专利xx项</li>
              <li>承担国家级项目xx项</li>
            </ul>
          </StyledCard>
        </Col>
        <Col xs={24} md={8}>
          <StyledCard title="合作交流">
            <ul>
              <li>国际合作项目xx个</li>
              <li>校企合作项目xx个</li>
              <li>学术交流活动xx次</li>
            </ul>
          </StyledCard>
        </Col>
      </Row>
    </>
  );
};

export default About;