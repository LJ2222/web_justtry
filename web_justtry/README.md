# 说明文档

## 项目结构说明

这个项目是一个现代化的个人作品集网站，基于 React 和 Vite 构建。

### 文件结构

```
src/
├── pages/           # 页面组件
│   ├── Cases.jsx    # 案例展示页
│   ├── Cases.css
│   ├── Tools.jsx    # 工具页面
│   ├── Tools.css
│   ├── About.jsx    # 关于页面
│   └── About.css
├── components/      # 通用组件
│   ├── Header.jsx   # 导航栏
│   └── Header.css
├── App.jsx          # 主应用组件
├── App.css
├── main.jsx         # 应用入口
└── index.css        # 全局样式
```

## 功能特性

### 🎨 案例页 (Cases)
- 展示你的项目作品
- 响应式网格布局
- 悬停效果和项目卡片
- 支持项目标签和描述

### 🛠️ 工具页 (Tools)
- **JSON 工具**：格式化和压缩 JSON
- **标签页切换**：支持多个工具
- **复制功能**：一键复制输出结果
- **错误提示**：友好的错误信息

### 👤 关于页 (About)
- 个人介绍和头像
- 技能展示
- 工作经验
- 教育背景
- 联系方式

### 📱 响应式设计
- 完全适配移动设备
- 汉堡菜单导航
- 流体布局和自适应网格

### 🎯 特点
- 单页应用 (SPA) 结构
- 现代化的设计风格
- 快速的性能
- 易于扩展和定制
- 未来可轻松转换为微信小程序

## 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

然后访问 `http://localhost:5173` 即可在浏览器中查看。

### 构建生产版本

```bash
npm run build
```

构建后的文件位于 `dist/` 目录，可以部署到任何静态服务器。

## 定制指南

### 修改项目信息

1. **修改标题**：编辑 `index.html` 中的 `<title>` 标签

2. **添加案例**：编辑 `src/pages/Cases.jsx`，修改 `projects` 数组

3. **修改关于内容**：编辑 `src/pages/About.jsx` 中的文本

4. **自定义样式**：修改各页面的 `.css` 文件

5. **更改颜色主题**：在各 CSS 文件中搜索 `#3498db`（主色）替换为你的颜色

### 添加新工具

在 `src/pages/Tools.jsx` 中：

1. 添加新的状态变量
2. 创建工具函数
3. 在 JSX 中添加新的标签页和功能区

## 微信小程序迁移

由于项目使用 React 和标准 Web API，可以通过以下框架轻松迁移：

- **Taro**：一个开发框架，可同时开发多端应用
- **React Native**：用于开发移动应用
- **uni-app**：与 Taro 类似的跨平台框架

只需调整导入和某些 API 调用即可。

## 技术栈

- **前端框架**：React 18
- **构建工具**：Vite
- **样式**：CSS3（支持 Grid、Flexbox）
- **编程语言**：JavaScript/JSX

## 浏览器兼容性

- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Edge（最新版）

## 常见问题

**Q: 如何添加联系方式？**
A: 编辑 `src/pages/About.jsx` 中的联系链接，修改邮箱和 GitHub 地址。

**Q: 如何自定义颜色？**
A: 在 CSS 文件中替换颜色值。主要颜色为 `#3498db`（蓝色）和 `#2c3e50`（深灰色）。

**Q: 可以添加动画吗？**
A: 可以！在 CSS 文件中添加 `@keyframes` 和 `animation` 属性。

## 部署

### GitHub Pages
```bash
npm run build
# 将 dist 文件夹内容推送到 gh-pages 分支
```

### Vercel（推荐）
1. 关联 GitHub 仓库
2. Vercel 会自动构建和部署

### Netlify
1. 关联 GitHub 仓库
2. 设置构建命令：`npm run build`
3. 设置发布目录：`dist`

## 许可证

MIT
