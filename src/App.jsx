import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AdminLayout from './admin/components/AdminLayout';
import PrivateRoute from './admin/components/PrivateRoute';
import Login from './admin/pages/Login';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Publications from './pages/Publications/Publications';
import Projects from './pages/Projects/Projects';
import Members from './pages/Members/Members';
import Contact from './pages/Contact/Contact';
import NewsManagement from './admin/pages/NewsManagement';
import PublicationsManagement from './admin/pages/PublicationsManagement';
import ProjectsManagement from './admin/pages/ProjectsManagement';
import MembersManagement from './admin/pages/MembersManagement';
import ActivitiesManagement from './admin/pages/ActivitiesManagement';
import Dashboard from './admin/pages/Dashboard';
import TestPage from './admin/pages/TestPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<Login />} />
        {/* 启用PrivateRoute进行登录验证 */}
        <Route path="/admin/*" element={
          <PrivateRoute>
            <AdminLayout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/activities" element={<ActivitiesManagement />} />
                <Route path="/news" element={<NewsManagement />} />
                <Route path="/publications" element={<PublicationsManagement />} />
                <Route path="/projects" element={<ProjectsManagement />} />
                <Route path="/members" element={<MembersManagement />} />
                <Route path="/test" element={<TestPage />} />
              </Routes>
            </AdminLayout>
          </PrivateRoute>
        } />
        <Route path="/*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/members" element={<Members />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;