# Open Resume

一个基于 Bun + React + Ant Design 的简历编辑与导出工具，提供表单化编辑、实时预览与 PDF 导出。

## 概要

- 左侧为可编辑表单，右侧为实时渲染的简历预览；支持图片上传、工作/教育/项目条目管理。
- 可通过页面顶部的"导出PDF"按钮将预览内容导出为 PDF（使用 html2canvas + jsPDF）。
- 同步滚动已实现，便于在编辑与预览间对照查看。

## 技术栈

- 前端：React 19 + TypeScript
- UI：Ant Design 6
- 运行时/工具：Bun
- PDF 导出：html2canvas + jsPDF

## 项目特色

- **模块化设计**：代码结构清晰，易于维护和扩展
- **类型安全**：完整的 TypeScript 类型定义
- **组件化**：每个功能模块独立封装为组件
- **工具函数分离**：业务逻辑与 UI 逻辑分离

## 快速开始

### 安装依赖

```bash
bun install
```

### 启动开发服务器

本项目在 package.json 中定义了脚本，使用 Bun 运行：

```bash
bun run dev
```

### 构建生产版本

```bash
bun run build
```

### 启动生产服务器

本仓库的 `start` 脚本在 package.json 中定义为在生产环境下使用 Bun 启动内置服务：

```bash
bun run start
```

（在 Windows PowerShell 中直接运行内联环境变量赋值的脚本可能需要调整；建议使用 `bun run start` 来执行 package.json 中的脚本。）

## 项目结构（优化后）

```
open-resume/
├── src/
│   ├── components/          # 可复用组件
│   │   ├── PhotoUpload.tsx  # 照片上传组件
│   │   ├── ContactFields.tsx # 联系方式表单组件
│   │   ├── ExperienceFields.tsx # 工作经历表单组件
│   │   ├── EducationFields.tsx # 教育背景表单组件
│   │   └── ProjectFields.tsx # 项目经历表单组件
│   ├── types/               # TypeScript 类型定义
│   │   └── index.ts         # 简历数据类型定义
│   ├── utils/               # 工具函数
│   │   ├── index.ts         # 工具函数导出
│   │   ├── pdfExport.ts     # PDF 导出功能
│   │   ├── htmlGenerator.ts # HTML 生成器
│   │   └── contentHeightCalculator.ts # 内容高度计算
│   ├── App.tsx              # 主应用组件
│   ├── frontend.tsx         # React 客户端入口
│   ├── index.ts             # Bun HTTP 服务器入口
│   ├── index.html           # HTML 模板
│   └── index.css            # 样式文件
├── package.json             # 脚本与依赖
├── bunfig.toml              # Bun 配置
├── tsconfig.json            # TypeScript 配置
└── README.md
```

## 核心模块说明

### 组件模块 (components/)
- **PhotoUpload**: 支持拖拽上传的照片上传组件
- **ContactFields**: 动态联系方式表单组件
- **ExperienceFields**: 工作经历表单组件
- **EducationFields**: 教育背景表单组件
- **ProjectFields**: 项目经历表单组件

### 工具模块 (utils/)
- **pdfExport**: PDF 导出功能封装
- **htmlGenerator**: HTML 内容生成器
- **contentHeightCalculator**: 内容高度计算和限制检查

### 类型定义 (types/)
- 完整的 TypeScript 接口定义，确保类型安全

## 使用说明

1. 在编辑区填写或添加联系方式、工作经历、教育、技能与项目条目。
2. 右侧会实时渲染当前表单数据，可通过滚动条同步对齐查看。
3. 点击页面顶部的"导出PDF"按钮，页面会使用 `html2canvas` 截图并由 `jsPDF` 生成 A4 PDF 文件。

## 开发指南

### 添加新的简历字段

1. 在 `src/types/index.ts` 中添加新的类型定义
2. 在 `src/components/` 中创建对应的表单组件
3. 在 `src/utils/htmlGenerator.ts` 中添加 HTML 渲染逻辑
4. 在 `src/utils/contentHeightCalculator.ts` 中添加高度计算逻辑
5. 在 `src/App.tsx` 中集成新的组件

### 自定义样式

- 修改 `src/index.css` 文件来自定义整体样式
- 各个组件支持通过 props 传递样式配置

### 扩展功能

项目采用模块化设计，易于扩展新功能：

- 添加新的导出格式（如 Word、图片）
- 集成模板系统
- 添加数据持久化功能
- 集成云存储服务

## 要点 / 已实现特性

- **模块化架构**：代码结构清晰，职责分离
- **表单化编辑**：使用 Ant Design Form + Form.List 实现动态条目
- **图片上传与预览**：支持拖拽上传的图片组件
- **导出为 PDF**：`html2canvas` + `jsPDF`，支持 A4 格式
- **内容限制检查**：实时检测内容是否超过单页限制
- **类型安全**：完整的 TypeScript 支持
- **Bun 开发服务器**：支持 HMR 热更新

## 许可证

MIT License

© 2026 topshihun