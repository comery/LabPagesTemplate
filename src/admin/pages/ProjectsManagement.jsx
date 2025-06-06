import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, Select, DatePicker, Space, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import MarkdownEditor from '../components/MarkdownEditor';
import moment from 'moment';

const { Option } = Select;
const { RangePicker } = DatePicker;

const ProjectsManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [editingId, setEditingId] = useState(null);
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: '人工智能算法优化研究',
      type: '国家级',
      status: '进行中',
      period: '2023-01-01 至 2025-12-31',
      description: '研究深度学习算法的优化方法'
    },
    {
      id: 2,
      title: '智能制造系统开发',
      type: '省部级',
      status: '已结题',
      period: '2022-06-01 至 2024-05-31',
      description: '开发基于AI的智能制造系统'
    }
  ]);

  const columns = [
    {
      title: '项目名称',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '项目类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '项目状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '起止时间',
      dataIndex: 'period',
      key: 'period',
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
    // 处理日期范围数据
    const formData = { ...record };
    if (record.period && record.period.includes('至')) {
      const dates = record.period.split(' 至 ');
      formData.period = [moment(dates[0]), moment(dates[1])];
    }
    form.setFieldsValue(formData);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setEditingId(null);
    form.resetFields();
    setIsModalOpen(true);
  };

  const handleSave = (values) => {
    const newProject = {
      id: editingId || Date.now(),
      ...values,
      period: values.period ? 
        `${values.period[0].format('YYYY-MM-DD')} 至 ${values.period[1].format('YYYY-MM-DD')}` : 
        ''
    };

    if (editingId) {
      setProjects(projects.map(item => 
        item.id === editingId ? newProject : item
      ));
      message.success('项目更新成功！');
    } else {
      setProjects([...projects, newProject]);
      message.success('项目添加成功！');
    }

    setIsModalOpen(false);
    form.resetFields();
    setEditingId(null);
  };

  const handleDelete = (id) => {
    setProjects(projects.filter(item => item.id !== id));
    message.success('项目删除成功！');
  };

  return (
    <div style={{ padding: '20px' }}>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={handleAdd}
        style={{ marginBottom: 16 }}
      >
        添加项目
      </Button>

      <Table 
        columns={columns} 
        dataSource={projects} 
        rowKey="id"
        pagination={{ pageSize: 10 }}
      />

      <Modal
        title={editingId ? "编辑项目" : "添加项目"}
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
          form.resetFields();
          setEditingId(null);
        }}
        footer={null}
        width={800}
      >
        <Form form={form} onFinish={handleSave}>
          <Form.Item
            name="title"
            label="项目名称"
            rules={[{ required: true, message: '请输入项目名称' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="type"
            label="项目类型"
            rules={[{ required: true, message: '请选择项目类型' }]}
          >
            <Select>
              <Option value="国家级">国家级</Option>
              <Option value="省部级">省部级</Option>
              <Option value="横向">横向</Option>
              <Option value="其他">其他</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="status"
            label="项目状态"
            rules={[{ required: true, message: '请选择项目状态' }]}
          >
            <Select>
              <Option value="进行中">进行中</Option>
              <Option value="已结题">已结题</Option>
              <Option value="待启动">待启动</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="period"
            label="起止时间"
            rules={[{ required: true, message: '请选择起止时间' }]}
          >
            <RangePicker />
          </Form.Item>
          <Form.Item
            name="description"
            label="项目描述"
          >
            <Input.TextArea rows={4} placeholder="请输入项目描述" />
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

export default ProjectsManagement;