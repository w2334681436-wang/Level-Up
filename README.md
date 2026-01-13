🚀 LevelUp AI Coach (考研飞升计划)
"Gamify Your Growth, AI Your Potential."

一个基于 React + Vite 构建的沉浸式、游戏化考研备考助手。它不仅仅是一个番茄钟，更是一个运行在浏览器中的“伪软件”（PWA），结合了 DeepSeek/Gemini 等大模型能力，充当您的全天候私人考研教练。

(建议替换为实际的软件截图)

✨ 核心亮点
本项目采用 PWA (Progressive Web App) 技术，虽是网页，但可像原生软件一样安装在桌面/手机，离线运行，无后台残留。

🎮 游戏化专注系统
沉浸式计时器：支持专注、休息、无限加时（Overtime）三种模式。

XP 经验值系统：每专注 1 分钟获得 1 点经验，实时升级（Lv.1 -> Lv.Max），带有酷炫的环形进度条和粒子特效。

黄金加时模式：专注结束后可进入“黄金加时”，触发全屏金色粒子特效，奖励翻倍。

禅模式 (Zen Mode)：一键隐藏所有 UI，仅保留极简计时与 AI 生成的励志金句。

🤖 AI 智能导师 (AI Coach)
多模型支持：内置支持 DeepSeek、Gemini、豆包、Kimi 等主流大模型（兼容 OpenAI 格式）。

全息档案记忆：AI 会自动读取你的每日学习日志、历史时长和科目进度，进行针对性复盘。

每日自动复盘：每天首次打开，AI 会自动分析昨天的战况并给出建议。

视觉分析：支持上传题目或笔记图片，让 AI (DeepSeek-Vision/Gemini) 进行多模态分析讲解。

深度思考模式：一键开启“深度思考”，获取更硬核的逻辑推导（适合数学/408）。

🛠️ 极客功能
悬浮窗挂机 (PiP)：利用画中画技术实现“不死后台”悬浮窗，看网课时也能时刻看到倒计时。

数据完全掌控：

本地存储（Local Storage），隐私安全。

支持 JSON 格式导出/导入 完整备份（含设置、历史、进度）。

高度客制化：

自定义背景设定（告诉 AI 你的本科背景、目标院校）。

自定义提示音（上传 MP3）。

自定义 AI 人设与对话气泡颜色。

🏗️ 技术栈 (Tech Stack)
核心框架: React 19 + Vite

语言: TypeScript

样式: Tailwind CSS (配合 Cyberpunk 暗黑风 UI)

图标: Lucide React

PWA 能力: Vite PWA Plugin + Service Workers (支持离线缓存、安装到桌面)

部署: Vercel (已配置 vercel.json 路由重写)

⚡️ 快速开始 (Quick Start)
1. 本地运行
确保您的电脑已安装 Node.js (推荐 v18+)。

Bash

# 1. 克隆或下载代码
git clone [your-repo-url]
cd level-up

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev
打开浏览器访问 http://localhost:3000 即可看到界面。

2. 部署到 Vercel (推荐)
本项目已配置 vercel.json，可直接一键部署：

将代码上传至 GitHub。

登录 Vercel，Import 该仓库。

保持默认设置，点击 Deploy。

获得一个永久免费的 https://your-app.vercel.app 域名。

📱 如何安装为“伪软件” (PWA)
本应用设计为一次打开，永久驻留。

Windows / Mac (Chrome & Edge)
在浏览器中打开部署好的链接。

点击地址栏右侧的 "安装 LevelUp AI Coach" 图标（或点击浏览器菜单 -> 保存并分享 -> 安装）。

完成！ 现在它拥有独立的桌面图标、独立窗口，像原生 EXE/DMG 软件一样运行，且启动速度极快。

iOS / Android
使用 Safari (iOS) 或 Chrome (Android) 打开链接。

点击“分享”按钮 -> “添加到主屏幕”。

它将作为一个独立 APP 出现在你的手机桌面上，支持全屏运行。

⚙️ 配置指南
首次使用请点击左上角的 设置 (Settings) 图标进行初始化：

配置 AI：

选择服务商（推荐 SiliconFlow/DeepSeek 或 Google Gemini）。

填入对应的 API Key（数据仅保存在本地浏览器，不会上传服务器）。

可选：设置自定义 Base URL。

个人档案：

在“个人背景档案”中填入你的情况（如：“双非跨考浙大计算机，数学基础差”），AI 会据此调整建议策略。

科目进度：

在主页右侧面板，手动输入或让 AI 自动更新你的四门课进度（英语、政治、数学、专业课）。

📂 项目结构
Plaintext

.
├── public/              # 静态资源 (PWA图标, manifest, sw)
│   ├── icon_final.svg   # 桌面图标
│   └── service-worker.js # PWA 离线缓存逻辑
├── src/
│   ├── App.tsx          # 核心应用逻辑 (计时器, AI聊天, 状态管理)
│   ├── index.tsx        # 入口文件
│   └── index.css        # Tailwind 全局样式
├── index.html           # HTML 模板
├── vite.config.ts       # Vite 配置
├── vercel.json          # Vercel 路由配置 (解决 SPA 刷新 404 问题)
└── package.json         # 依赖管理
🤝 贡献与反馈
这是一个个人自用项目，旨在帮助考研党提升效率。如果你有新的 Feature 想法（比如接入 Notion 或 增加番茄钟统计图表），欢迎 Fork 或提交 PR！

祝你一战成硕，高分上岸！ Level Up! 🚀

<div align="center"> <sub>Built with ❤️ by React & DeepSeek</sub> </div>
