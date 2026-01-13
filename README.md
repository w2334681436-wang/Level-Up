# 🚀 LevelUp AI Coach (考研飞升计划)
> "Gamify Your Growth, AI Your Potential."

一个基于 **React + Vite** 构建的沉浸式、游戏化考研备考助手。它不仅仅是一个番茄钟，更是一个运行在浏览器中的“伪软件”(PWA)，结合了 DeepSeek/Gemini 等大模型能力，充当您的全天候私人考研教练。

(建议替换为实际的软件截图)

## ✨ 核心亮点
* **PWA (Progressive Web App) 技术**：虽是网页，但可像原生软件一样安装在桌面/手机，离线运行，无后台残留。
* **沉浸式体验**：拥有独立的桌面图标、独立窗口，像原生 EXE/DMG 软件一样运行，启动速度极快。

## 🎮 游戏化专注系统
* **沉浸式计时器**：支持 专注、休息、无限加时 (Overtime) 三种模式。
* **XP 经验值系统**：每专注 1 分钟获得 1 点经验，实时升级 (Lv.1 -> Lv.Max)，带有酷炫的环形进度条和粒子特效。
* **黄金加时模式**：专注结束后可进入“黄金加时”，触发全屏金色粒子特效，奖励翻倍。
* **禅模式 (Zen Mode)**：一键隐藏所有 UI，仅保留极简计时与 AI 生成的励志金句。

## 🤖 AI 智能导师 (AI Coach)
* **多模型支持**：内置支持 **DeepSeek**、**Gemini**、豆包、Kimi 等主流大模型（兼容 OpenAI 格式）。
* **全息档案记忆**：AI 会自动读取你的每日学习日志、历史时长和科目进度，进行针对性复盘。
* **每日自动复盘**：每天首次打开，AI 会自动分析昨天的战况并给出建议。
* **视觉分析**：支持上传题目或笔记图片，让 AI (DeepSeek-Vision/Gemini) 进行多模态分析讲解。

## 🛠️ 技术栈 (Tech Stack)
* **核心框架**: React 19 + Vite
* **语言**: TypeScript
* **样式**: Tailwind CSS (配合 Cyberpunk 暗黑风 UI)
* **图标**: Lucide React
* **PWA 能力**: Vite PWA Plugin + Service Workers (支持离线缓存、安装到桌面)
* **部署**: Vercel (已配置 `vercel.json` 路由重写)

---

## ⚡ 快速开始 (Quick Start)

### 1. 克隆或下载代码
确保您的电脑已安装 Node.js (推荐 v18+)。

```bash
git clone [your-repo-url]
cd level-up
