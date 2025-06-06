import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, Space, Select, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Option } = Select;

const PublicationsManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [editingId, setEditingId] = useState(null);
  const [publications, setPublications] = useState([
    {
      id: 1,
      title: 'Deep Learning for Computer Vision',
      authors: '张三, 李四, 王五',
      journal: 'IEEE Transactions on Pattern Analysis',
      year: '2024',
      doi: '10.1109/TPAMI.2024.001'
    },
    {
      id: 2,
      title: 'Machine Learning in Healthcare',
      authors: '李四, 张三',
      journal: 'Nature Medicine',
      year: '2023',
      doi: '10.1038/s41591-023-001'
    }
  ]);

  const columns = [
    {
      title: '论文标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '作者',
      dataIndex: 'authors',
      key: 'authors',
    },
    {
      title: '期刊/会议',
      dataIndex: 'journal',
      key: 'journal',
    },
    {
      title: '发表年份',
      dataIndex: 'year',
      key: 'year',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space>
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)}>
            编辑
          </Button>
          <Button danger icon={<DeleteOutlined />} onClick={() => handleDelete(record.id)}>
            删除
          </Button>
        </Space>
      ),
    },
  ];

  const handleEdit = (record) => {
    setEditingId(record.id);
    form.setFieldsValue(record);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setEditingId(null);
    form.resetFields();
    setIsModalOpen(true);
  };

  const handleSave = (values) => {
    const newPublication = {
      id: editingId || Date.now(),
      ...values
    };

    if (editingId) {
      setPublications(publications.map(item => 
        item.id === editingId ? newPublication : item
      ));
      message.success('论文更新成功！');
    } else {
      setPublications([...publications, newPublication]);
      message.success('论文添加成功！');
    }

    setIsModalOpen(false);
    form.resetFields();
    setEditingId(null);
  };

  const handleDelete = (id) => {
    setPublications(publications.filter(item => item.id !== id));
    message.success('论文删除成功！');
  };

  return (
    <div style={{ padding: '20px' }}>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={handleAdd}
        style={{ marginBottom: 16 }}
      >
        添加论文
      </Button>

      <Table 
        columns={columns} 
        dataSource={publications} 
        rowKey="id"
        pagination={{ pageSize: 10 }}
      />

      <Modal
        title={editingId ? "编辑出版物" : "添加出版物"}
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
          form.resetFields();
          setEditingId(null);
        }}
        footer={null}
      >
        <Form form={form} onFinish={handleSave}>
          <Form.Item
            name="title"
            label="论文标题"
            rules={[{ required: true, message: '请输入论文标题' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="authors"
            label="作者"
            rules={[{ required: true, message: '请输入作者' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="journal"
            label="期刊/会议"
            rules={[{ required: true, message: '请输入期刊/会议名称' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="year"
            label="发表年份"
            rules={[{ required: true, message: '请输入发表年份' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="doi"
            label="DOI"
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              保存
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default PublicationsManagement;