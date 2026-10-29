# jiangshi — 个人博客 / 作品集

一个用 [Astro](https://astro.build) 搭的静态个人站：作品集 + 博客。
视觉走「工业科幻 HUD」路线——细线网格、瞄准环、等宽标注、单一信号黄；构建产物是纯静态 HTML，可以扔到任何静态托管上。

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

**线上地址：<https://jiangshi-73.github.io/>**
仓库：[JiangShi-73/JiangShi-73.github.io](https://github.com/JiangShi-73/JiangShi-73.github.io)（这是 GitHub 的"用户主页仓库"，所以站点在根路径下，不需要 `base`）

改完内容推上去就自动发布：

```bash
git add -A
git commit -m "写了点什么"
git push
```

GitHub Actions（[deploy.yml](.github/workflows/deploy.yml)）会自动构建并发布，大约 1 分钟生效。

### 以后想接自己的域名（jiangshi.com）

代码这边已经准备好，到时候只需要四步：

1. 在**域名所在的那个阿里云账号**里改解析：
   - `@`  A 记录 → `185.199.108.153` / `185.199.109.153` / `185.199.110.153` / `185.199.111.153`
   - `www` CNAME → `jiangshi-73.github.io`
2. 把 `astro.config.mjs` 的 `site` 改成 `'https://jiangshi.com'`
3. 新建 `public/CNAME`，内容就一行：`jiangshi.com`
4. 仓库 Settings → Pages → Custom domain 填 `jiangshi.com`，勾上 Enforce HTTPS

推送后等 DNS 生效即可。

## 设计说明

- **视觉语言**：近黑底 + 骨白字 + 唯一信号黄（`--signal`），所有分隔用 1px 细线，卡片/按钮全部直角
- **字体**：Archivo Variable（用宽度轴撑到 118%，做大标题和数字）+ JetBrains Mono（标注、日期、编号），通过 npm 自托管，不请求外部 CDN
- **结构**：每个区块以「细线 + 编号 + 英文标签」的标题行开场，编号由 CSS 计数器自动生成（`counter-increment: sec`），加区块不用手改
- **装饰**：首页瞄准环是手写 SVG（刻度由脚本生成），90 秒转一圈；颗粒用内联噪声；顶部一条彩色光带
- **动效**：入场位移 18px / 800ms / ease-out；`prefers-reduced-motion` 下全部关闭
- **JavaScript** 只有一个 <script>：导航滚动状态、移动端菜单、IntersectionObserver 入场
