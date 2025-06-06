import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, DatePicker, Upload, Space, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, UploadOutlined } from '@ant-design/icons';

const ActivitiesManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Renamed for clarity with 'open' prop
  const [form] = Form.useForm();
  const [editingId, setEditingId] = useState(null);
  const [activities, setActivities] = useState([
    {
      id: 1,
      title: '2024年学术研讨会',
      date: '2024-03-15',
      location: '科技楼102会议室',
      description: '探讨人工智能最新发展趋势',
      cover: 'example.jpg'
    }
  ]);

  const columns = [
    {
      title: '活动标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '时间',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '地点',
      dataIndex: 'location',
      key: 'location',
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
    setIsModalOpen(true); // Use the new state variable
  };

  const handleSave = (values) => {
    const newActivity = {
      id: editingId || Date.now(), // 如果是编辑则使用原id，否则生成新id
      ...values,
      date: values.date.format('YYYY-MM-DD HH:mm:ss')
    };

    if (editingId) {
      setActivities(activities.map(item => 
        item.id === editingId ? newActivity : item
      ));
      message.success('活动更新成功！');
    } else {
      setActivities([...activities, newActivity]);
      message.success('活动添加成功！');
    }

    setIsModalOpen(false); // Use the new state variable
    form.resetFields();
    setEditingId(null);
  };

  const handleDelete = (id) => {
    setActivities(activities.filter(item => item.id !== id));
    message.success('活动删除成功！');
  };

  return (
    <div style={{ padding: '20px' }}>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => setIsModalOpen(true)} // Use the new state variable
        style={{ marginBottom: 16 }}
      >
        添加活动
      </Button>

      <Table 
        columns={columns} 
        dataSource={activities} 
        rowKey="id"
        pagination={{ pageSize: 10 }}
      />

      <Modal
        title={editingId ? "编辑活动" : "添加活动"}
        open={isModalOpen} // Changed from visible to open, and use the new state variable
        onCancel={() => {
          setIsModalOpen(false); // Use the new state variable
          form.resetFields();
          setEditingId(null);
        }}
        footer={null}
        width={800}
      >
        <Form form={form} onFinish={handleSave}>
          <Form.Item
            name="title"
            label="活动标题"
            rules={[{ required: true, message: '请输入活动标题' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="date"
            label="活动时间"
            rules={[{ required: true, message: '请选择活动时间' }]}
          >
            <DatePicker showTime />
          </Form.Item>
          <Form.Item
            name="location"
            label="活动地点"
            rules={[{ required: true, message: '请输入活动地点' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="活动简介"
            rules={[{ required: true, message: '请输入活动简介' }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item
            name="cover"
            label="活动封面"
            valuePropName="fileList"
            getValueFromEvent={e => {
              if (Array.isArray(e)) {
                return e;
              }
              return e?.fileList;
            }}
          >
            <Upload
              listType="picture-card"
              maxCount={1}
              beforeUpload={() => false}
            >
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>上传图片</div>
              </div>
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

export default ActivitiesManagement;