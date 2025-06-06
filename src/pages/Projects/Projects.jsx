import React from 'react';
import { Typography, Card, Row, Col, Tag, Space } from 'antd';
import styled from '@emotion/styled';

const { Title, Paragraph } = Typography;

const StyledCard = styled(Card)`
  height: 100%;
  transition: all 0.3s ease;
  background: rgba(147, 176, 113, 0.05);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(147, 176, 113, 0.15);
    background: rgba(147, 176, 113, 0.1);
  }

  .ant-card-head {
    background: rgba(147, 176, 113, 0.1);
  }

  .ant-card-body {
    height: calc(100% - 57px);
    display: flex;
    flex-direction: column;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: '国家自然科学基金项目',
      description: '基于人工智能的医疗图像分析系统研究',
      period: '2024-2027',
      status: '进行中',
      type: '重点项目'
    },
    {
      title: '省级重点实验室项目',
      description: '深度学习在工业自动化中的应用研究',
      period: '2023-2025',
      status: '进行中',
      type: '重点项目'
    },
    // ... existing code ...
  ];

  const getProjectColor = (type) => {
    const colorMap = {
      '重点项目': '#f5222d',
      '一般项目': '#1890ff',
      '横向项目': '#52c41a',
      '其他项目': '#722ed1'
    };
    return colorMap[type] || '#1890ff';
  };

  return (
    <>
      <Title level={2}>项目介绍</Title>
      <Row gutter={[24, 24]}>
        {projects.map((project, index) => (
          <Col xs={24} md={12} lg={8} key={index}>
            <StyledCard
              title={project.title}
              extra={
                <Tag color={project.status === '进行中' ? 'green' : 'blue'}>
                  {project.status}
                </Tag>
              }
              headStyle={{ 
                borderLeft: `4px solid ${getProjectColor(project.type)}`,
                paddingLeft: '12px'
              }}
            >
              <Space direction="vertical" style={{ flex: 1 }}>
                <Paragraph>{project.description}</Paragraph>
                <div>
                  <Tag color="purple">{project.type}</Tag>
                  <Tag color="cyan">{project.period}</Tag>
                </div>
              </Space>
            </StyledCard>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Projects;