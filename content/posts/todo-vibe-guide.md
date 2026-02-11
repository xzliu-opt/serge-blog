---
title: "Vibe Coding 实践指南：从 Antigravity 到专属域名发布"
date: "2026-02-11"
excerpt: "探索如何利用 Antigravity IDE 驱动的 Vibe coding 模式，结合 GitHub、Vercel 与 Spaceship，快速实现从创意到全球访问的完整闭环。内含实战案例：ToDo List。"
author: "Serge"
---

## 效率的进化：Vibe Coding

现在的开发范式正在发生根本性的变化。所谓的 **Vibe Coding**，本质上是让开发者从繁琐的语法和配置中解脱出来，转而通过高层次的逻辑意图（Prompt）来驱动开发。

在我的实践中，**Antigravity IDE** 展现了极其强大的工程化能力。它不仅仅是一个编辑器，更是将构思转化为现实的加速器。

## 核心思维：提示词的艺术

工具虽然强大，但输入的质量决定了输出的高度。我总结出一个核心心得：**提示词（Prompt）是连接创意与代码的桥梁。**

在将指令输入 Antigravity IDE 之前，我会先利用 **Gemini** 这样的强大大模型对原始想法进行润色，将其转化为更专业、结构更清晰的提示词。这种“AI 辅助 AI”的模式，能显著提升生成代码的健壮性和美学设计感。

---

## 🚀 实战案例：ToDo List

为了验证这套流程，我构建并发布了一个极致简约的 **ToDo List** 应用。

* **访问地址**：[www.liuxiaozhi.org](https://www.liuxiaozhi.org/)
* **设计理念**：延续 Apple 极简美学，去除一切冗余，只保留任务管理的核心逻辑。
* **技术栈**：由 Antigravity 生成，通过 Vercel 部署，并成功解析了我在 Spaceship 购买的专属域名。

这个项目证明了：**只要提示词足够精准，个人开发者可以在几分钟内交付具有工业设计感的工具。**

---

## 完整实施流程

要将一个本地运行的 Vibe Coding 项目分享给全世界，需要跑通以下链路：

### 1. 基础设施准备
* **代码托管库**：[GitHub](https://github.com/)（版本控制与自动化部署的基础）。
* **开发工具**：**Antigravity IDE**（我的主力 Vibe Coding 工具）。
* **部署平台**：[Vercel](https://vercel.com/)（零配置构建，与 GitHub 完美对接）。
* **专属域名**：[Spaceship](https://www.spaceship.com/)（购买个性化域名的首选）。

### 2. 同步与构建
无论你是在 Antigravity 中完成的本地开发，还是使用在线平台，最终的核心步骤都是将项目 **同步到 GitHub**。
- 在 Vercel 中点击 `Add New Project`。
- 找到 GitHub 上对应的仓库并点击 `Import`。
- Vercel 会自动识别 Next.js 框架并完成初次部署。

### 3. 域名绑定（让它变酷）
初次部署后的 Vercel 链接通常很长。为了专业感，我们需要绑定专属域名：
1.  **Vercel 端**：在项目 `Settings -> Domains` 中输入你的域名，获取系统生成的 `Type` 和 `Value`（通常是 CNAME 记录）。
2.  **Spaceship 端**：进入 `Domain Manager -> Nameservers & DNS -> Advanced DNS`。
3.  **对应填入**：将 Vercel 提供的记录值在 Spaceship 中一一对应填入。

## 减法之道

正如 Dieter Rams 所言：“少，但是更好。” 

Vibe Coding 不仅仅是快，它更给了我们专注于“设计思维”而非“搬砖细节”的自由。正如我在 [ToDo List](https://www.liuxiaozhi.org/) 中所追求的那样，极致的简约往往需要更深邃的思考。

---
**参考来源：**
* 思路参考自 X 博文：[sodawhite_dev 的分享](https://x.com/sodawhite_dev/status/2012342307690086771)