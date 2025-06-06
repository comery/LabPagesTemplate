import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, Select, Upload, Space, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const MembersManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [editingId, setEditingId] = useState(null);
  const [members, setMembers] = useState([
    {
      id: 1,
      name: '张教授',
      title: '教授',
      research: '人工智能',
      email: 'zhang@example.com',
      avatar: null
    },
    {
      id: 2,
      name: '李博士',
      title: '博士生',
      research: '机器学习',
      email: 'li@example.com',
      avatar: null
    }
  ]);

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '职称/身份',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '研究方向',
      dataIndex: 'research',
      key: 'research',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
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
    const newMember = {
      id: editingId || Date.now(),
      ...values
    };

    if (editingId) {
      setMembers(members.map(item => 
        item.id === editingId ? newMember : item
      ));
      message.success('成员更新成功！');
    } else {
      setMembers([...members, newMember]);
      message.success('成员添加成功！');
    }

    setIsModalOpen(false);
    form.resetFields();
    setEditingId(null);
  };

  const handleDelete = (id) => {
    setMembers(members.filter(item => item.id !== id));
    message.success('成员删除成功！');
  };

  return (
    <div style={{ padding: '20px' }}>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={handleAdd}
        style={{ marginBottom: 16 }}
      >
        添加成员
      </Button>
      <Table 
        columns={columns} 
        dataSource={members} 
        rowKey="id"
        pagination={{ pageSize: 10 }}
      />
      <Modal
        title={editingId ? "编辑成员" : "添加成员"}
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
            name="name"
            label="姓名"
            rules={[{ required: true, message: '请输入姓名' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="title"
            label="职称/身份"
            rules={[{ required: true, message: '请选择职称/身份' }]}
          >
            <Select>
              <Option value="教授">教授</Option>
              <Option value="副教授">副教授</Option>
              <Option value="讲师">讲师</Option>
              <Option value="博士生">博士生</Option>
              <Option value="硕士生">硕士生</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="research"
            label="研究方向"
            rules={[{ required: true, message: '请输入研究方向' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="邮箱"
            rules={[
              { required: true, message: '请输入邮箱' },
              { type: 'email', message: '请输入有效的邮箱地址' }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="avatar"
            label="头像"
          >
            <Upload>
              <Button icon={<UploadOutlined />}>上传头像</Button>
            </Upload>
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

export default MembersManagement;