# Open Resume

一个基于 Bun + React + Ant Design 的简历编辑与导出工具，提供表单化编辑、实时预览与 PDF 导出。

## 概要

- 左侧为可编辑表单，右侧为实时渲染的简历预览；支持图片上传、工作/教育/项目条目管理。
- 可通过页面顶部的“导出PDF”按钮将预览内容导出为 PDF（使用 html2canvas + jsPDF）。
- 同步滚动已实现，便于在编辑与预览间对照查看。

## 技术栈

- 前端：React 19
- UI：Ant Design 6
- 运行时/工具：Bun
- PDF 导出：html2canvas + jsPDF

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

## 项目结构（关键文件）

```
open-resume/
├── src/
│   ├── App.tsx          # 主应用：编辑表单、实时预览、导出 PDF
│   ├── frontend.tsx     # React 客户端入口（挂载点 + HMR 支持）
│   ├── index.ts         # Bun HTTP 服务器入口，用于静态和简单 API 路由
│   ├── index.html       # HTML 模板
│   └── components/      # 按模块划分的简历组件（Header, Summary, Education, 等）
├── package.json         # 脚本与依赖（含 antd, html2canvas, jspdf 等）
├── bunfig.toml          # Bun 配置
├── tsconfig.json
└── README.md
```

## 使用说明

1. 在编辑区填写或添加联系方式、工作经历、教育、技能与项目条目。
2. 右侧会实时渲染当前表单数据，可通过滚动条同步对齐查看。
3. 点击页面顶部的“导出PDF”按钮，页面会使用 `html2canvas` 截图并由 `jsPDF` 生成 A4 PDF 文件。

## 要点 / 已实现特性

- 表单化编辑（使用 Ant Design Form + Form.List 实现动态条目）
- 图片上传与预览（`src/components/PhotoUpload`）
- 导出为 PDF（`html2canvas` + `jsPDF`，入口元素 id 为 `resume-preview`）
- Bun 开发服务器支持 HMR

## 许可证

MIT License

© 2026 topshihun