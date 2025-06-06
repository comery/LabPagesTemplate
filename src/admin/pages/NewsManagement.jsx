import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, Space, DatePicker, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import MarkdownEditor from '../components/MarkdownEditor';
import moment from 'moment';

const NewsManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [editingId, setEditingId] = useState(null);
  // 添加数据状态管理
  const [newsData, setNewsData] = useState([
    {
      id: 1,
      title: '示例新闻标题',
      date: '2024-01-15',
      content: '这是一条示例新闻内容...'
    }
  ]);

  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '发布日期',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space>
          <Button
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            编辑
          </Button>
          <Button
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
          >
            删除
          </Button>
        </Space>
      ),
    },
  ];

  const handleEdit = (record) => {
    setEditingId(record.id);
    // 处理日期格式
    const formData = {
      ...record,
      date: record.date ? moment(record.date) : null
    };
    form.setFieldsValue(formData);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setNewsData(newsData.filter(item => item.id !== id));
    message.success('删除成功！');
  };

  const handleSave = (values) => {
    // 处理日期格式
    const formattedValues = {
      ...values,
      date: values.date ? values.date.format('YYYY-MM-DD') : null
    };

    if (editingId) {
      // 编辑现有新闻
      setNewsData(newsData.map(item => 
        item.id === editingId 
          ? { ...item, ...formattedValues }
          : item
      ));
      message.success('更新成功！');
    } else {
      // 添加新新闻
      const newNews = {
        id: Date.now(), // 简单的ID生成
        ...formattedValues
      };
      setNewsData([...newsData, newNews]);
      message.success('添加成功！');
    }

    // 关闭模态框并重置表单
    setIsModalOpen(false);
    form.resetFields();
    setEditingId(null);
  };

  const handleAddNew = () => {
    setEditingId(null);
    form.resetFields();
    setIsModalOpen(true);
  };

  return (
    <>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={handleAddNew}
        style={{ marginBottom: 16 }}
      >
        添加新闻
      </Button>

      <Table 
        columns={columns} 
        dataSource={newsData} 
        rowKey="id"
        pagination={{ pageSize: 10 }}
      />

      <Modal
        title={editingId ? "编辑新闻" : "添加新闻"}
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
          form.resetFields();
          setEditingId(null);
        }}
        footer={null}
        width={1200}
      >
        <Form form={form} layout="vertical" onFinish={handleSave}>
          <Form.Item
            name="title"
            label="标题"
            rules={[{ required: true, message: '请输入标题' }]}
          >
            <Input placeholder="请输入新闻标题" />
          </Form.Item>
          <Form.Item
            name="date"
            label="发布日期"
            rules={[{ required: true, message: '请选择发布日期' }]}
          >
            <DatePicker style={{ width: '100%' }} placeholder="请选择发布日期" />
          </Form.Item>
          <Form.Item
            name="content"
            label="内容"
            rules={[{ required: true, message: '请输入内容' }]}
          >
            <MarkdownEditor />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                保存
              </Button>
              <Button onClick={() => {
                setIsModalOpen(false);
                form.resetFields();
                setEditingId(null);
              }}>
                取消
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default NewsManagement;