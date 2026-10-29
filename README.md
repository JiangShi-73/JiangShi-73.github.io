# Aster — 个人博客 / 作品集

一个用 [Astro](https://astro.build) 搭的静态个人站：作品集 + 博客。
深色、单强调色、极少的 JavaScript，构建产物是纯静态 HTML，可以扔到任何静态托管上。

![首页](docs/preview-home.jpg)

> `docs/` 里是首页、项目页、文章列表的截图，只是预览用，可以随时删。

## 快速开始

```bash
npm install     # 首次
npm run dev     # 本地开发：http://localhost:4321
```

其他命令：

| 命令 | 作用 |
| --- | --- |
| `npm run build` | 构建到 `dist/` |
| `npm run preview` | 预览构建结果 |
| `npm run astro -- --help` | Astro CLI |

## 目录结构

```
public/
  favicon.svg
  images/            # 封面、头像等静态图（SVG，可换成 png/jpg）
src/
  config.ts          # ★ 站点信息：名字、简介、邮箱、导航、社交链接
  data/projects.ts   # ★ 项目数据（卡片 + 详情页内容）
  content.config.ts  # 文章集合的 schema
  content/blog/      # ★ 文章：一篇一个 .md
  layouts/BaseLayout.astro
  components/        # Nav / Footer / ProjectCard
  pages/
    index.astro      # 首页
    projects/        # 项目列表 + 详情
    blog/            # 文章列表 + 详情
    about.astro      # 关于
    404.astro
  styles/global.css  # ★ 全部样式（顶部 :root 是设计变量）
```

## 改内容

### 1. 站点信息

编辑 `src/config.ts`：站点名、一句话简介、邮箱、位置、社交链接、导航项、跑马灯文字。

### 2. 项目

编辑 `src/data/projects.ts`，一个项目一个对象：

```ts
{
  slug: 'lumen',            // 详情页地址 /projects/lumen
  title: 'Lumen 音乐播放器',
  tagline: '一句话副标题',
  year: '2026',
  role: '设计 + 前端',
  cover: '/images/cover-lumen.svg',
  accent: '#7cf0c8',
  stack: ['Electron', 'React'],
  featured: true,           // 是否出现在首页精选
  summary: '详情页开头的摘要',
  links: [{ label: '在线预览', href: 'https://…' }],
  sections: [{ title: '起点', text: '正文段落，空行分段。' }],
}
```

### 3. 写一篇新文章

在 `src/content/blog/` 下新建 `my-post.md`，文件名就是网址（`/blog/my-post`）：

```md
---
title: '文章标题'
description: '列表页和 SEO 用的一句话摘要'
date: 2026-10-30
tags: ['设计', '前端']
draft: false
---

正文用 Markdown 写，支持标题、列表、引用、代码块（自带语法高亮）。
```

字段由 `src/content.config.ts` 校验：漏写 `title`/`description`/`date` 会在构建时报错，不会静默出错。

### 4. 换图

把图片放进 `public/images/`，然后把 `cover` 路径改成新文件名即可（png/jpg 都行）。
现有几张封面是手写的 SVG，可以直接打开改颜色和构图。

### 5. 换配色 / 字体

`src/styles/global.css` 顶部的 `:root` 里：

```css
--accent: #7cf0c8;   /* 主强调色 */
--accent-2: #93a7ff; /* 渐变中间色 */
--accent-3: #ffb27a; /* 渐变尾色 */
--font-sans: ...;
```

## 发布

构建产物是纯静态文件，任选一个：

- **Vercel / Netlify**：导入仓库，框架自动识别为 Astro，直接部署
- **Cloudflare Pages**：构建命令 `npm run build`，输出目录 `dist`
- **GitHub Pages**：需要改 `astro.config.mjs`

```js
export default defineConfig({
  site: 'https://你的域名',
  base: '/仓库名',   // 仅当站点在 xxx.github.io/仓库名 下时才需要
});
```

同时记得把 `site` 换成真实域名，canonical / OG 标签会用到它。

## 设计说明

- 深色单主题，一个强调色 + 两个渐变色相；颗粒质感用内联 SVG 噪声，无额外请求
- 字阶 6 级、间距 4 的倍数、圆角两档——约束越少，改版越快
- 动效统一：进入视口上移 22px、850ms、ease-out；`prefers-reduced-motion` 下全部关闭
- JavaScript 只有一个 <script>：导航滚动状态、移动端菜单、IntersectionObserver 入场
