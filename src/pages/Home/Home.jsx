import React from 'react';
import { Row, Col, Card, Typography, List, Space, Image } from 'antd';
import { ClockCircleOutlined, FileTextOutlined, EnvironmentOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

const { Title, Paragraph } = Typography;

const StyledHero = styled.div`
  background: linear-gradient(135deg, #0C3547 0%, #10656D 100%);
  padding: 80px 0;
  text-align: center;
  color: white;
  margin-bottom: 40px;
`;

const ContentSection = styled.div`
  margin-bottom: 40px;
`;

const StyledCard = styled(Card)`
  height: 100%;
  transition: all 0.3s ease;
  background: rgba(12, 53, 71, 0.08);
  border: none;
  
  &:hover {
    transform: translateY(-3px);
    background: rgba(16, 101, 109, 0.12);
    box-shadow: 0 4px 12px rgba(16, 101, 109, 0.15);
  }

  .ant-card-head {
    background: rgba(16, 101, 109, 0.1);
    border-bottom: 1px solid rgba(16, 101, 109, 0.15);
  }
`;

const Home = () => {
  // 示例数据
  const news = [
    { id: 1, title: '实验室获得重要研究突破', date: '2024-01-15' },
    { id: 2, title: '新增两项国家自然科学基金项目', date: '2024-01-10' },
    { id: 3, title: '实验室成员在国际会议发表论文', date: '2024-01-05' },
  ];

  const latestPublications = [
    { id: 1, title: '基于深度学习的图像识别研究', journal: 'IEEE Trans.', date: '2024-01' },
    { id: 2, title: '人工智能在医疗领域的应用', journal: 'Nature Communications', date: '2023-12' },
    { id: 3, title: '机器学习算法优化研究', journal: 'Science Advances', date: '2023-11' },
  ];

  const activities = [
    {
      id: 1,
      title: '2024年学术研讨会',
      date: '2024-03-15',
      location: '科技楼102会议室',
      description: '探讨人工智能最新发展趋势',
      cover: 'https://example.com/activity1.jpg'
    },
    {
      id: 2,
      title: '实验室开放日',
      date: '2024-03-20',
      location: '实验大楼3楼',
      description: '向公众展示最新研究成果',
      cover: 'https://example.com/activity2.jpg'
    }
  ];

  return (
    <>
      <StyledHero>
        <Title level={1} style={{ color: 'white', marginBottom: 20 }}>
          欢迎来到我们的研究实验室
        </Title>
        <Paragraph style={{ color: 'white', fontSize: 18 }}>
          致力于前沿科技研究，推动学术创新
        </Paragraph>
      </StyledHero>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <Row gutter={[0, 24]}>
            <Col span={24}>
              <StyledCard title="最新动态">
                <List
                  itemLayout="horizontal"
                  dataSource={news}
                  renderItem={item => (
                    <List.Item>
                      <Space>
                        <ClockCircleOutlined />
                        <span>{item.date}</span>
                        <span>{item.title}</span>
                      </Space>
                    </List.Item>
                  )}
                />
              </StyledCard>
            </Col>
            <Col span={24}>
              <StyledCard title="最新文章">
                <List
                  itemLayout="vertical"
                  dataSource={latestPublications}
                  renderItem={item => (
                    <List.Item>
                      <Space direction="vertical">
                        <Space>
                          <FileTextOutlined />
                          <span>{item.title}</span>
                        </Space>
                        <div style={{ color: '#666' }}>
                          发表于: {item.journal} ({item.date})
                        </div>
                      </Space>
                    </List.Item>
                  )}
                />
              </StyledCard>
            </Col>
          </Row>
        </Col>

        <Col xs={24} md={12}>
          <StyledCard title="最新活动">
            <List
              itemLayout="vertical"
              dataSource={activities}
              renderItem={item => (
                <List.Item>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    {item.cover && (
                      <Image
                        src={item.cover}
                        alt={item.title}
                        style={{ width: '100%', height: 150, objectFit: 'cover' }}
                      />
                    )}
                    <Title level={5}>{item.title}</Title>
                    <Space>
                      <ClockCircleOutlined />
                      <span>{item.date}</span>
                    </Space>
                    <Space>
                      <EnvironmentOutlined />
                      <span>{item.location}</span>
                    </Space>
                    <Paragraph>{item.description}</Paragraph>
                  </Space>
                </List.Item>
              )}
            />
          </StyledCard>
        </Col>
      </Row>
    </>
  );
};

export default Home;