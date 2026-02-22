# Open Resume

一个基于 Bun + React + Ant Design 的简历生成器，支持实时编辑和 PDF 导出功能。

## 功能特点

- 🎨 **实时预览**：左边编辑，右边实时显示 PDF 渲染效果
- 📋 **结构化编辑**：包含姓名、职位、联系方式、个人简介、工作经历、教育背景、技能等模块
- 📄 **PDF 导出**：一键导出简历为 PDF 文件
- 🔄 **滚动同步**：左右两边滚动条同步，方便查看和修改
- 🎯 **响应式设计**：适配不同屏幕尺寸
- 📦 **基于 Bun**：使用 Bun 进行依赖管理和运行

## 技术栈

- **前端框架**：React 18
- **构建工具**：Bun
- **UI 组件库**：Ant Design
- **PDF 生成**：html2canvas + jsPDF

## 快速开始

### 安装依赖

```bash
bun install
```

### 启动开发服务器

```bash
bun dev
```

### 构建生产版本

```bash
bun run build
```

### 启动生产服务器

```bash
bun start
```

## 项目结构

```
open-resume/
├── src/
│   ├── App.tsx          # 主应用组件
│   ├── frontend.tsx     # React 应用入口
│   ├── index.ts         # 后端服务器入口
│   ├── index.css        # 全局样式
│   └── index.html       # HTML 模板
├── bunfig.toml          # Bun 配置文件
├── package.json         # 项目配置和依赖
├── tsconfig.json        # TypeScript 配置
└── README.md            # 项目说明
```

## 使用方法

1. 在左边编辑区填写你的简历信息
2. 右边会实时显示预览效果
3. 点击右上角的「导出PDF」按钮，将简历导出为 PDF 文件

## 许可证

MIT License

© 2026 topshihun