# Open Resume

<div align="center">

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Bun](https://img.shields.io/badge/Bun-1.0+-black?logo=bun&labelColor=000)
![React](https://img.shields.io/badge/React-19.x-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)

一个现代化的简历编辑与导出工具，基于 Bun + React + Ant Design 构建，提供表单化编辑、实时预览、PDF 导出与 JSON 数据导入导出功能。

[🚀 快速开始](#快速开始) • [📖 功能特性](#功能特性) • [🛠️ 技术栈](#技术栈) • [📁 项目结构](#项目结构)

</div>

## ✨ 功能特性

- 📝 **表单化编辑** - 左侧表单实时编辑，右侧实时预览
- 🖼️ **图片上传** - 支持拖拽上传个人照片
- 📄 **PDF 导出** - 一键导出为 A4 格式 PDF 文件
- 📁 **数据导入导出** - 支持 JSON 格式的数据保存和恢复
- 🎯 **悬浮球操作** - 集成所有导出功能的悬浮球组件
- 🔄 **同步滚动** - 编辑区与预览区同步滚动，便于对照查看
- 📱 **响应式设计** - 适配不同屏幕尺寸
- 🎨 **美观界面** - 基于 Ant Design 的现代化 UI
- ⚡ **快速开发** - 使用 Bun 运行时，启动速度极快
- 🔒 **类型安全** - 完整的 TypeScript 支持

## 🛠️ 技术栈

| 技术领域 | 技术选型 |
|---------|---------|
| **前端框架** | React 19 + TypeScript |
| **UI 组件库** | Ant Design 6 |
| **运行时** | Bun 1.0+ |
| **PDF 导出** | html2canvas + jsPDF |
| **数据格式** | JSON（数据导入导出） |
| **构建工具** | Bun Build |
| **开发体验** | Hot Module Replacement (HMR) |

## 🏗️ 架构特色

- **模块化设计** - 代码结构清晰，易于维护和扩展
- **类型安全** - 完整的 TypeScript 类型定义
- **组件化** - 每个功能模块独立封装为组件
- **工具函数分离** - 业务逻辑与 UI 逻辑分离
- **可扩展性** - 易于添加新的字段类型和导出格式

## 🚀 快速开始

### 环境要求

- [Bun](https://bun.sh/) 1.0 或更高版本
- Node.js (可选，Bun 内置兼容)

### 安装依赖

```bash
bun install
```

### 启动开发服务器

```bash
bun run dev
```

开发服务器将在 http://localhost:3000 启动，支持热重载。

### 构建生产版本

```bash
bun run build
```

构建产物将输出到 `dist` 目录。

### 启动生产服务器

```bash
bun run start
```

> 💡 **Windows 用户注意**：在 PowerShell 中运行内联环境变量赋值的脚本可能需要调整，建议使用 `bun run start` 来执行 package.json 中的脚本。

## 📁 项目结构

```
open-resume/
├── src/
│   ├── components/          # 🔧 可复用组件
│   │   ├── PhotoUpload.tsx  # 照片上传组件
│   │   ├── ContactFields.tsx # 联系方式表单组件
│   │   ├── ExperienceFields.tsx # 工作经历表单组件
│   │   ├── EducationFields.tsx # 教育背景表单组件
│   │   ├── ProjectFields.tsx # 项目经历表单组件
│   │   ├── SkillFields.tsx  # 技能表单组件
│   │   └── FloatingActionButton.tsx # 悬浮球操作组件
│   ├── types/               # 📋 TypeScript 类型定义
│   │   └── index.ts         # 简历数据类型定义
│   ├── utils/               # 🛠️ 工具函数
│   │   ├── index.ts         # 工具函数导出
│   │   ├── pdfExport.ts     # PDF 导出功能
│   │   ├── htmlGenerator.ts # HTML 生成器
│   │   ├── contentHeightCalculator.ts # 内容高度计算
│   │   └── jsonExport.ts    # JSON 导入导出功能
│   ├── App.tsx              # 🎯 主应用组件
│   ├── frontend.tsx         # ⚛️ React 客户端入口
│   ├── index.ts             # 🌐 Bun HTTP 服务器入口
│   ├── index.html           # 📄 HTML 模板
│   └── index.css            # 🎨 样式文件
├── .github/                 # 🤖 GitHub Actions 配置
│   └── workflows/
│       └── deploy.yml       # 自动部署配置
├── dist/                    # 📦 构建输出目录
├── package.json             # 📋 脚本与依赖
├── bunfig.toml              # ⚙️ Bun 配置
├── tsconfig.json            # 🔧 TypeScript 配置
└── README.md                # 📖 项目文档
```

## 🔧 核心模块说明

### 组件模块 (`src/components/`)

| 组件 | 功能描述 |
|------|----------|
| **PhotoUpload** | 支持拖拽上传的照片上传组件 |
| **ContactFields** | 动态联系方式表单组件 |
| **ExperienceFields** | 工作经历表单组件 |
| **EducationFields** | 教育背景表单组件 |
| **ProjectFields** | 项目经历表单组件 |
| **SkillFields** | 技能表单组件 |
| **FloatingActionButton** | 悬浮球操作组件，集成PDF/TOML导入导出功能 |

### 工具模块 (`src/utils/`)

| 工具函数 | 功能描述 |
|----------|----------|
| **pdfExport** | PDF 导出功能封装（html2canvas + jsPDF） |
| **jsonExport** | JSON 格式数据导入导出功能 |
| **htmlGenerator** | HTML 内容生成器 |
| **contentHeightCalculator** | 内容高度计算和单页限制检查 |

### 类型定义 (`src/types/`)

- 完整的 TypeScript 接口定义，确保类型安全
- 包含 `ResumeData`、`Contact`、`Experience`、`Education`、`Project`、`Skill` 等接口

## 📖 使用说明

### 基本使用流程

1. **填写基本信息** - 在左侧表单中填写姓名、个人简介等基本信息
2. **上传个人照片** - 通过拖拽或点击上传个人照片
3. **添加联系方式** - 填写邮箱、电话、社交媒体等联系方式
4. **完善工作经历** - 添加工作经历条目，支持多段经历
5. **填写教育背景** - 添加教育经历信息
6. **展示技能项目** - 填写技能和项目经历
7. **实时预览** - 右侧区域实时显示简历效果
8. **使用悬浮球操作** - 点击右下角悬浮球进行导出操作

### 悬浮球操作指南

项目右下角提供了悬浮球操作组件，点击后展开以下功能：

- **PDF 导出** - 导出为 A4 格式 PDF 文件
- **JSON 导出** - 保存简历数据为 JSON 格式文件
- **JSON 导入** - 从 JSON 文件恢复简历数据

#### JSON 数据格式说明

JSON 文件包含完整的简历数据结构，便于：
- **数据备份** - 保存当前简历状态
- **版本控制** - 管理不同版本的简历
- **数据迁移** - 在不同设备间同步简历数据
- **跨平台兼容** - JSON 格式广泛支持，无需额外依赖

JSON 文件示例片段：
```json
{
  "name": "张三",
  "summary": "个人简介内容...",
  "contacts": [
    {
      "type": "邮箱",
      "value": "zhangsan@example.com",
      "isLink": true
    }
  ],
  "experience": [
    {
      "company": "ABC科技有限公司",
      "position": "前端开发工程师",
      "period": "2023.01 - 至今",
      "description": "工作描述..."
    }
  ]
}
```

### 高级功能

- **动态表单** - 支持动态添加/删除多个工作经历、教育背景等条目
- **内容验证** - 实时检测内容是否超过单页限制
- **同步滚动** - 编辑区与预览区同步滚动，便于对照查看

## 🛠️ 开发指南

### 添加新的简历字段

1. **定义类型** - 在 `src/types/index.ts` 中添加新的类型定义
2. **创建组件** - 在 `src/components/` 中创建对应的表单组件
3. **HTML 渲染** - 在 `src/utils/htmlGenerator.ts` 中添加 HTML 渲染逻辑
4. **高度计算** - 在 `src/utils/contentHeightCalculator.ts` 中添加高度计算逻辑
5. **集成组件** - 在 `src/App.tsx` 中集成新的组件

### 自定义样式

- 修改 `src/index.css` 文件来自定义整体样式
- 各个组件支持通过 props 传递样式配置
- 支持 CSS 变量和主题定制

### 扩展功能

项目采用模块化设计，易于扩展新功能：

- **导出格式** - 添加 Word、图片等新的导出格式
- **模板系统** - 集成多种简历模板选择
- **数据持久化** - 添加本地存储或数据库支持
- **云存储** - 集成云存储服务（如 AWS S3、阿里云 OSS）
- **国际化** - 添加多语言支持
- **主题系统** - 支持深色/浅色主题切换

## ✅ 已实现特性

- ✅ **模块化架构** - 代码结构清晰，职责分离
- ✅ **表单化编辑** - 使用 Ant Design Form + Form.List 实现动态条目
- ✅ **图片上传与预览** - 支持拖拽上传的图片组件
- ✅ **PDF 导出** - `html2canvas` + `jsPDF`，支持 A4 格式
- ✅ **JSON 导入导出** - 支持简历数据的保存和恢复
- ✅ **悬浮球操作** - 集成所有导出功能的悬浮球组件
- ✅ **内容限制检查** - 实时检测内容是否超过单页限制
- ✅ **类型安全** - 完整的 TypeScript 支持
- ✅ **热重载** - 开发服务器支持 HMR
- ✅ **响应式设计** - 适配不同屏幕尺寸
- ✅ **同步滚动** - 编辑区与预览区同步滚动

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目基于 MIT 许可证开源 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

感谢以下开源项目的支持：

- [React](https://reactjs.org/) - 用户界面库
- [Ant Design](https://ant.design/) - 企业级 UI 设计语言
- [Bun](https://bun.sh/) - 快速的全能 JavaScript 运行时
- [html2canvas](https://html2canvas.hertzen.com/) - 网页截图库
- [jsPDF](https://parall.ax/products/jspdf) - PDF 生成库

---

<div align="center">

**Open Resume** © 2026 topshihun，基于 MIT 许可证发布。

[⬆ 返回顶部](#open-resume)

</div>