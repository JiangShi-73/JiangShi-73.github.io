# jiangshi — 收藏箱

一个用 [Astro](https://astro.build) 搭的静态个人站：收喜欢的东西——**游戏、音乐、剧、角色、照片、画**，顺手写点文章；学业和开发成果单独收在深色的「档案舱」里。

视觉走 NASA-punk「航天局印刷品」路线：米白纸面、墨黑粗规则线、赭红 / 藏青 / 芥末黄三块饱和色、编号与等宽标注；档案舱、角色、画三个页面用同一套版式的深色 token。构建产物是纯静态 HTML，零框架运行时。

**线上地址：<https://jiangshi-73.github.io/>**

> `docs/` 里的截图是旧版预览，仅作留档，可以随时删。

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
  images/            # 头像插画等静态图
  photos/            # 照片（目前是 SVG 占位图，换成自己的 jpg/png 即可）
  covers/            # 音乐专辑封面
  games/             # 游戏封面
  films/             # 剧 / 电影海报
  characters/        # 角色立绘（透明 PNG，方形 contain 不裁切）
  qr.svg / qr.png    # 站点二维码
src/
  config.ts          # ★ 站点信息：名字、简介、邮箱、导航、社交链接、跑马灯
  data/
    photos.ts        # ★ 照片清单
    music.ts         # ★ 歌单（含网易云 ID，行内播放用）
    games.ts         # ★ 游戏清单
    films.ts         # ★ 剧 / 电影 / 动画清单
    characters.ts    # ★ 喜欢的角色
    art.ts           # ★ 画（当前为空，填一条自动上墙）
    work.ts          # ★ 档案舱：学业 + 开发成果
    projects.ts      # 项目详情（当前为空，预留）
  content.config.ts  # 文章集合的 schema
  content/blog/      # ★ 文章：一篇一个 .md
  layouts/BaseLayout.astro   # 双主题（theme="paper" | "dark"）+ 全站脚本
  components/        # Nav / Footer / TrackRow / GameCard / FilmCard /
                     # CharacterCard / PhotoTile / ArtTile / ProjectCard / Arrow
  pages/
    index.astro      # 首页
    games.astro      # 游戏
    music.astro      # 歌单（点击行内播放）
    films.astro      # 剧
    characters.astro # 角色（深色，含预留卡位）
    photos.astro     # 照片墙
    art.astro        # 画（深色，当前为预留区）
    blog/            # 文章列表 + 详情
    work.astro       # 档案舱（深色）
    projects/        # 项目预留页 + 详情
    about.astro      # 关于
    404.astro
  styles/global.css  # ★ 全部样式（顶部 :root 是设计 token）
```

## 改内容

内容全部在 `src/data/*.ts`，页面只负责渲染；加一条数据就自动多一张卡片。

### 1. 站点信息

编辑 `src/config.ts`：站点名、一句话简介、邮箱、位置、社交链接、导航项、跑马灯文字。

### 2. 音乐（行内播放）

```ts
// src/data/music.ts —— 封面放 public/covers/
{ title: '夜如此寂静', artist: 'Кино', note: 'Спокойная ночь，1989',
  cover: '/covers/kino-night.jpg', neteaseId: 26710593 }
```

`neteaseId` 是网易云歌曲 ID：点击曲目会在页内展开官方外链播放器（`music.163.com/outchain`），不跳转、不需要登录。ID 可以从歌曲页网址 `?id=…` 里拿。

### 3. 游戏 / 剧 / 角色 / 画

```ts
// src/data/games.ts —— 封面放 public/games/
{ title: '明日方舟', subtitle: 'ARKNIGHTS', year: '2019',
  platform: 'iOS / Android', note: '一句话感受', cover: '/games/g-arknights.jpg' }

// src/data/films.ts —— 海报放 public/films/，kind：电影 / 剧集 / 动画
{ title: '星际穿越', original: 'Interstellar', kind: '电影', year: '2014',
  cover: '/films/f-interstellar.jpg', note: '一句话感受' }

// src/data/characters.ts —— 立绘放 public/characters/，透明 PNG 效果最好
{ name: '泥岩', source: '明日方舟', note: '精英二立绘', image: '/characters/mudrock-1.png' }

// src/data/art.ts —— 图放 public/art/（目录自建）；当前为空，页面显示预留区
{ title: '画名', src: '/art/xxx.jpg', meta: '作者或媒介', year: '2026' }
```

角色页在数据卡片之后固定留 2 个虚线预留位（`characters.astro` 里的 `reserveSlots`），想多留就改这个数字。

### 4. 档案舱（学业 / 开发）

`src/data/work.ts`：`studies` 一条一个阶段，`works` 一条一个项目（可带 `link`）。页面是深色舱，文案保持克制，不写过程说明。

### 5. 照片

```ts
// src/data/photos.ts —— 图放进 public/photos/
{ src: '/photos/dusk.svg', title: '傍晚六点的天', place: '某地', date: '2026.09' }
```

### 6. 写一篇新文章

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

### 7. 项目详情（预留）

`src/data/projects.ts` 现在是空数组，填一条就自动出现在 `/projects` 和详情页（文件里有模板注释）。

## 发布

仓库：[JiangShi-73/JiangShi-73.github.io](https://github.com/JiangShi-73/JiangShi-73.github.io)（GitHub 用户主页仓库，站点在根路径下，不需要 `base`）。

改完内容推上去就自动发布：

```bash
git add -A
git commit -m "feat: 写了点什么"
git push
```

GitHub Actions（[deploy.yml](.github/workflows/deploy.yml)）自动构建并发布到 Pages，大约 1 分钟生效。提交信息用中文 + 类型前缀（`feat:` / `fix:` / `docs:` / `chore:`）。

### 以后想接自己的域名（jiangshi.com）

代码这边已经准备好，到时候只需要四步：

1. 在域名所在的阿里云账号里改解析：
   - `@`  A 记录 → `185.199.108.153` / `185.199.109.153` / `185.199.110.153` / `185.199.111.153`
   - `www` CNAME → `jiangshi-73.github.io`
2. 把 `astro.config.mjs` 的 `site` 改成 `'https://jiangshi.com'`
3. 新建 `public/CNAME`，内容就一行：`jiangshi.com`
4. 仓库 Settings → Pages → Custom domain 填 `jiangshi.com`，勾上 Enforce HTTPS

推送后等 DNS 生效即可。

## 二维码

指向站点首页的二维码，扫一下直接打开 <https://jiangshi-73.github.io/>：

| 文件 | 用途 |
| --- | --- |
| `public/qr.svg` | 矢量版，线上地址 `/qr.svg`，任意缩放不糊 |
| `public/qr.png` | 1024px PNG，线上地址 `/qr.png`，适合直接发给人 |
| `docs/qr-poster.png` | 带站名和网址的海报版，适合打印或贴出来 |

换域名后要重新生成：把网址换掉，用 `qrcode` 重新导出即可（错误纠正等级 H，留 2 个模块的静区）。

## 设计说明

- **双主题**：`:root` 是米白纸面，`body[data-theme='dark']` 是深色舱，只换 token 不换版式。页面通过 `<BaseLayout theme="dark">` 切换（档案舱 / 角色 / 画）
- **token 命名是历史遗留的反向命名**：`--ink` 是底色、`--paper` 是字色，改值时别被名字骗了
- **颜色**：赭红 `--signal`、藏青 `--navy`、芥末黄 `--mustard` 三块饱和色 + 钢青 `--steel`；所有颜色只走 `:root` 变量，不写死在组件里
- **结构线**：`--bw: 2px` 粗规则线 + 硬偏移阴影（`6px 6px 0`）+ 直角卡片，编号用等宽字体 ghost counter
- **字体**：Archivo Variable（宽度轴撑到 118% 做大标题）+ JetBrains Mono Variable（标注、编号），npm 自托管，不请求外部 CDN
- **深色舱**：扫描线叠层、HUD 括号、票卡式条目
- **动效**：入场位移 + IntersectionObserver 分级延迟（`--d`）；`prefers-reduced-motion` 下全部关闭
- **JavaScript**：BaseLayout 里一个 `<script>`——导航滚动状态、移动端菜单、入场观察、音乐行内播放（点击注入网易云外链 iframe，同一时间只开一个）