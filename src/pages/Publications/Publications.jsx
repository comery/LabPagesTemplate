import React from 'react';
import { Typography, Card, List, Tag, Space } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

const { Title } = Typography;

const StyledCard = styled(Card)`
  margin-bottom: 24px;
  transition: all 0.3s ease;
  background: rgba(89, 143, 145, 0.05);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(89, 143, 145, 0.15);
    background: rgba(89, 143, 145, 0.1);
  }

  .ant-card-head {
    background: rgba(89, 143, 145, 0.1);
  }
`;

const Publications = () => {
  const publications = [
    {
      year: '2024',
      papers: [
        {
          title: '基于深度学习的图像识别研究',
          authors: '张三, 李四, 王五',
          journal: 'IEEE Transactions on Pattern Analysis and Machine Intelligence',
          impact: 'SCI Q1',
          doi: '10.1109/TPAMI.2024.xxx'
        },
        // ... existing code ...
      ]
    },
    {
      year: '2023',
      papers: [
        {
          title: '人工智能在医疗领域的应用研究',
          authors: '李四, 王五, 赵六',
          journal: 'Nature Communications',
          impact: 'SCI Q1',
          doi: '10.1038/ncomms.2023.xxx'
        },
        // ... existing code ...
      ]
    }
  ];

  return (
    <>
      <Title level={2}>发表文章</Title>
      {publications.map(yearGroup => (
        <StyledCard key={yearGroup.year} title={`${yearGroup.year}年发表论文`}>
          <List
            itemLayout="vertical"
            dataSource={yearGroup.papers}
            renderItem={paper => (
              <List.Item
                extra={
                  <Tag color="blue">{paper.impact}</Tag>
                }
              >
                <List.Item.Meta
                  avatar={<FileTextOutlined style={{ fontSize: 24 }} />}
                  title={paper.title}
                  description={
                    <Space direction="vertical">
                      <div>作者：{paper.authors}</div>
                      <div>期刊：{paper.journal}</div>
                      <div>DOI：{paper.doi}</div>
                    </Space>
                  }
                />
              </List.Item>
            )}
          />
        </StyledCard>
      ))}
    </>
  );
};

export default Publications;