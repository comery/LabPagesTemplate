import React from 'react';
import { Typography, Card, Avatar, Row, Col, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

const { Title, Paragraph } = Typography;

const StyledCard = styled(Card)`
  text-align: center;
  margin-bottom: 24px;
  transition: all 0.3s ease;
  background: rgba(237, 174, 147, 0.05);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(237, 174, 147, 0.15);
    background: rgba(237, 174, 147, 0.1);
  }

  .ant-card-head {
    background: rgba(237, 174, 147, 0.1);
  }
`;

const Members = () => {
  const members = {
    professors: [
      {
        name: '张教授',
        title: '实验室主任',
        research: '人工智能、机器学习',
        email: 'zhang@example.com'
      },
      // ... existing code ...
    ],
    students: [
      {
        name: '李某',
        type: '博士研究生',
        research: '深度学习',
        grade: '2022级'
      },
      // ... existing code ...
    ]
  };

  return (
    <>
      <Title level={2}>实验室成员</Title>
      
      <Title level={3}>指导教师</Title>
      <Row gutter={[24, 24]}>
        {members.professors.map((professor, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <StyledCard>
              <Space direction="vertical" align="center">
                <Avatar size={100} icon={<UserOutlined />} />
                <Title level={4}>{professor.name}</Title>
                <Paragraph>{professor.title}</Paragraph>
                <Paragraph>研究方向：{professor.research}</Paragraph>
                <Paragraph>邮箱：{professor.email}</Paragraph>
              </Space>
            </StyledCard>
          </Col>
        ))}
      </Row>

      <Title level={3}>研究生</Title>
      <Row gutter={[24, 24]}>
        {members.students.map((student, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <StyledCard>
              <Space direction="vertical" align="center">
                <Avatar size={64} icon={<UserOutlined />} />
                <Title level={5}>{student.name}</Title>
                <Paragraph>{student.type}</Paragraph>
                <Paragraph>{student.grade}</Paragraph>
                <Paragraph>研究方向：{student.research}</Paragraph>
              </Space>
            </StyledCard>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Members;