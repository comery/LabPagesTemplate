import React from 'react';

const TestPage = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <h1 style={{ color: 'red', fontSize: '24px' }}>测试页面 - 如果你能看到这个，说明路由正常工作</h1>
      <div style={{ marginTop: '20px' }}>
        <p>当前时间: {new Date().toLocaleString()}</p>
        <p>当前URL: {window.location.href}</p>
        <p>localStorage状态: {localStorage.getItem('isLoggedIn') || 'null'}</p>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={() => {
            localStorage.setItem('isLoggedIn', 'true');
            alert('已设置登录状态');
          }}
          style={{ marginRight: '10px', padding: '10px' }}
        >
          设置登录状态
        </button>
        
        <button 
          onClick={() => {
            localStorage.clear();
            alert('已清除localStorage');
          }}
          style={{ padding: '10px' }}
        >
          清除localStorage
        </button>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <h3>测试链接:</h3>
        <ul>
          <li><a href="/admin">/admin (管理主页)</a></li>
          <li><a href="/admin/test">/admin/test (当前测试页)</a></li>
          <li><a href="/admin/login">/admin/login (登录页)</a></li>
        </ul>
      </div>
    </div>
  );
};

export default TestPage;