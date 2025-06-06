import React from 'react';
import { Card, Row, Col, Statistic, Button } from 'antd';
import { Link } from 'react-router-dom';
import {
  FileTextOutlined,
  ProjectOutlined,
  TeamOutlined,
  NotificationOutlined,
  CalendarOutlined,
  EyeOutlined,
  LikeOutlined,
  MessageOutlined
} from '@ant-design/icons';

const Dashboard = () => {
  // 模拟统计数据
  const stats = {
    publications: 45,
    projects: 12,
    members: 8,
    news: 23,
    activities: 15
  };

  const managementCards = [
    {
      title: '动态管理',
      description: '管理实验室最新动态和新闻',
      icon: <NotificationOutlined style={{ fontSize: '32px', color: '#1890ff' }} />,
      link: '/admin/news',
      count: stats.news,
      countLabel: '条动态'
    },
    {
      title: '活动管理',
      description: '管理实验室活动和会议',
      icon: <CalendarOutlined style={{ fontSize: '32px', color: '#52c41a' }} />,
      link: '/admin/activities',
      count: stats.activities,
      countLabel: '个活动'
    },
    {
      title: '文章管理',
      description: '管理学术论文和出版物',
      icon: <FileTextOutlined style={{ fontSize: '32px', color: '#fa8c16' }} />,
      link: '/admin/publications',
      count: stats.publications,
      countLabel: '篇文章'
    },
    {
      title: '项目管理',
      description: '管理研究项目和合作项目',
      icon: <ProjectOutlined style={{ fontSize: '32px', color: '#eb2f96' }} />,
      link: '/admin/projects',
      count: stats.projects,
      countLabel: '个项目'
    },
    {
      title: '成员管理',
      description: '管理实验室成员信息',
      icon: <TeamOutlined style={{ fontSize: '32px', color: '#722ed1' }} />,
      link: '/admin/members',
      count: stats.members,
      countLabel: '位成员'
    }
  ];

  return (
    <div style={{ padding: '24px' }}>
      {/* 页面标题 */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#262626', marginBottom: '8px' }}>
          管理主页
        </h1>
        <p style={{ color: '#8c8c8c', fontSize: '16px' }}>
          欢迎使用实验室网站管理系统
        </p>
      </div>

      {/* 总览统计 */}
      <Row gutter={[16, 16]} style={{ marginBottom: '32px' }}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <Statistic
              title="总访问量"
              value={1128}
              prefix={<EyeOutlined />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <Statistic
              title="本月访问"
              value={234}
              prefix={<EyeOutlined />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <Statistic
              title="点赞数"
              value={89}
              prefix={<LikeOutlined />}
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <Statistic
              title="留言数"
              value={45}
              prefix={<MessageOutlined />}
              valueStyle={{ color: '#722ed1' }}
            />
          </Card>
        </Col>
      </Row>

      {/* 管理功能卡片 */}
      <div style={{ marginBottom: '16px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#262626' }}>
          管理功能
        </h2>
      </div>
      
      <Row gutter={[24, 24]}>
        {managementCards.map((card, index) => (
          <Col xs={24} sm={12} lg={8} xl={6} key={index}>
            <Card
              hoverable
              style={{
                minHeight: '240px',
                display: 'flex',
                flexDirection: 'column'
              }}
              bodyStyle={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '20px'
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '12px' }}>
                  {card.icon}
                </div>
                <h3 style={{ 
                  fontSize: '16px', 
                  fontWeight: 'bold', 
                  textAlign: 'center',
                  marginBottom: '8px',
                  lineHeight: '1.4'
                }}>
                  {card.title}
                </h3>
                <p style={{ 
                  color: '#8c8c8c', 
                  textAlign: 'center',
                  fontSize: '12px',
                  marginBottom: '16px',
                  lineHeight: '1.4'
                }}>
                  {card.description}
                </p>
              </div>
              
              <div>
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                  <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#1890ff' }}>
                    {card.count}
                  </div>
                  <div style={{ color: '#8c8c8c', fontSize: '12px', marginTop: '2px' }}>
                    {card.countLabel}
                  </div>
                </div>
                
                <Link to={card.link}>
                  <Button type="primary" block size="small">
                    进入管理
                  </Button>
                </Link>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* 快速操作 */}
      <div style={{ marginTop: '32px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#262626', marginBottom: '16px' }}>
          快速操作
        </h2>
        <Card>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={8}>
              <Link to="/admin/news">
                <Button type="dashed" block size="large">
                  发布新动态
                </Button>
              </Link>
            </Col>
            <Col xs={24} sm={8}>
              <Link to="/admin/publications">
                <Button type="dashed" block size="large">
                  添加新文章
                </Button>
              </Link>
            </Col>
            <Col xs={24} sm={8}>
              <Link to="/admin/members">
                <Button type="dashed" block size="large">
                  添加新成员
                </Button>
              </Link>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;