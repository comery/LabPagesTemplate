import React, { useState } from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f2f5;
`;

const LoginCard = styled(Card)`
  width: 100%;
  max-width: 400px;
`;

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    
    // 简单的密码验证
    if (values.username === 'admin' && values.password === 'your_passwd') {
      // 登录成功后设置localStorage状态
      localStorage.setItem('isLoggedIn', 'true');
      message.success('登录成功');
      // 导航到管理主页
      navigate('/admin/');
    } else {
      message.error('用户名或密码错误');
    }
    
    setLoading(false);
  };

  return (
    <LoginContainer>
      <LoginCard title="实验室网站管理系统">
        <Form
          name="login"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input 
              prefix={<UserOutlined />} 
              placeholder="用户名" 
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
