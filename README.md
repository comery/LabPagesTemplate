# Yang Lab 实验室网站

## 项目简介

这是一个基于 React 开发的现代化实验室网站，采用 AI 辅助编程技术构建，专为科研工作者提供个人实验室的专业网站搭建解决方案。网站集成了完整的内容管理系统，支持实验室信息展示、成员管理、项目展示、学术发表等核心功能。

## 🚀 技术栈

- **前端框架**: React 18.2.0
- **UI 组件库**: Ant Design 5.4.6
- **路由管理**: React Router DOM 6.30.1
- **样式方案**: Emotion (CSS-in-JS)
- **构建工具**: Create React App
- **其他依赖**: 
  - React Markdown (Markdown 渲染)
  - Moment.js (时间处理)
  - Ant Design Icons (图标库)

## 📋 功能特性

### 前台展示系统
- **首页**: 实验室概览、最新动态、研究亮点
- **关于我们**: 实验室介绍、研究方向、发展历程
- **团队成员**: 教授、研究生、本科生信息展示
- **研究项目**: 项目展示、进展跟踪
- **学术发表**: 论文列表、研究成果
- **联系我们**: 联系方式、地址信息

### 后台管理系统
- **仪表盘**: 数据统计、快速操作
- **新闻管理**: 实验室动态发布与编辑
- **成员管理**: 团队成员信息维护
- **项目管理**: 研究项目内容管理
- **发表管理**: 学术论文信息管理
- **活动管理**: 学术活动、会议信息
- **权限控制**: 登录验证、访问控制

## 🛠️ 安装与运行

### 环境要求
- Node.js >= 14.0.0
- npm >= 6.0.0

### 安装依赖
```bash
npm install
```

### 开发环境运行
bash
运行
```npm start```
访问 http://localhost:3000 查看网站

### 生产环境构建
bash
运行
```npm run build```
运行测试
bash
运行
```npm test```
📁 项目结构
plaintext

src/├── components/          # 公共组件│   ├── Header/         # 网站头部│   ├── Footer/         # 网站底部│   └── Layout/         # 布局组件├── pages/              # 前台页面│   ├── Home/           # 首页│   ├── About/          # 关于我们│   ├── Members/        # 团队成员│   ├── Projects/       # 研究项目│   ├── Publications/   # 学术发表│   └── Contact/        # 联系我们├── admin/              # 后台管理│   ├── components/     # 管理组件│   └── pages/          # 管理页面├── content/            # 内容文件├── utils/              # 工具函数└── App.jsx             # 主应用组件
🎨 设计特色
响应式设计: 适配桌面端、平板、手机等多种设备
现代化UI: 基于 Ant Design 的专业界面设计
主题色彩: 采用学术风格的深蓝绿色调 (#0C3547, #10656D)
交互体验: 流畅的动画效果和悬停反馈
内容管理: 完整的后台管理系统，支持内容的增删改查
🔧 自定义配置
修改主题色彩
在各个组件的 styled 部分修改颜色变量：

```background: linear-gradient(135deg, #0C3547 0%, #10656D 100%);```

### 添加新页面
在 src/pages/ 目录下创建新的页面组件
在 App.jsx 中添加路由配置
在导航组件中添加菜单项
### 扩展管理功能
在 src/admin/pages/ 目录下创建管理页面
在管理路由中添加新的路径
在管理侧边栏中添加菜单项
### 🚀 部署指南
#### 静态部署
运行 npm run build 生成静态文件
将 build 目录部署到 Web 服务器
配置服务器支持 SPA 路由
#### 推荐部署平台
Vercel: 零配置部署，自动 HTTPS
Netlify: 持续集成，表单处理
GitHub Pages: 免费静态托管
阿里云/腾讯云: 国内访问优化
### 🤖 AI 辅助开发说明
本项目采用 AI 辅助编程技术开发，具有以下优势：

快速原型: AI 协助快速生成页面结构和基础功能
代码质量: 遵循 React 最佳实践和现代开发规范
响应式布局: 自动适配多种屏幕尺寸
组件化设计: 高度模块化，便于维护和扩展
类型安全: 规范的 PropTypes 和错误处理
### 📝 使用许可
本项目采用 MIT 许可证，允许自由使用、修改和分发。

### 🤝 贡献指南
欢迎提交 Issue 和 Pull Request 来改进项目：

Fork 本仓库
创建特性分支 (git checkout -b feature/AmazingFeature)
提交更改 (git commit -m 'Add some AmazingFeature')
推送到分支 (git push origin feature/AmazingFeature)
开启 Pull Request
### 📞 技术支持
如有技术问题或需要定制开发，请通过以下方式联系：

提交 GitHub Issue
发送邮件至项目维护者
查看项目 Wiki 文档