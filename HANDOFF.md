# 交接说明 · jiangshi 个人站

> 这份文件是给**接手的人 / 另一个 AI agent** 看的。读完这一页就能开始干活，不用翻聊天记录。

---

## 1. 这是什么

一个 **Astro 静态个人站**，定位是「收藏箱」而不是作品集：

- **照片**（8 张占位图）、**音乐**（8 首）、**游戏**（6 个）三个收藏页
- **文章**（5 篇 Markdown）
- **项目区**故意留空，`/projects` 是一块「预留区」提示
- 视觉：**米白纸面 + 墨黑字 + 三块饱和色**（赭红 / 藏青 / 芥末黄），NASA-punk 的印刷品味道

| | |
| --- | --- |
| 线上 | <https://jiangshi-73.github.io/> |
| 仓库 | <https://github.com/JiangShi-73/JiangShi-73.github.io>（分支 `main`） |
| 部署 | GitHub Pages + GitHub Actions（push 即自动构建） |
| 构建产物 | 纯静态 HTML，13 个页面，约 600KB |

---

## 2. 技术栈

- **Astro 7.4.4**，`output: 'static'`，**零框架运行时**（没有 React / Vue / Tailwind）
- **内容集合**：`src/content/blog/*.md`，glob loader + zod schema 校验
- **字体自托管**：`@fontsource-variable/archivo`（用宽度轴做标题）+ `@fontsource-variable/jetbrains-mono`（标注/编号），不请求 Google Fonts
- **样式**：单个 `src/styles/global.css`（约 40KB，CSS 变量 + 手写组件类）
- **JS**：只有一段内联脚本，做导航滚动状态、移动端菜单、IntersectionObserver 入场动画

## 3. 命令

```bash
npm install        # 首次
npm run dev        # 本地开发 http://localhost:4321
npm run build      # 构建到 dist/
npm run preview    # 预览构建结果
```

Windows 上双击根目录的 `启动博客.bat` 也能起本地预览（会自动装依赖并开浏览器）。

## 4. 目录地图

```
astro.config.mjs        site、devToolbar 关闭、markdown 用 shiki github-dark
package.json            只有 3 个依赖：astro + 两个字体包
启动博客.bat            Windows 一键本地预览
.github/workflows/deploy.yml   push main → 构建 → 部署 Pages

public/
  favicon.svg
  images/               头像、准星环、旧封面（部分已不用）
  photos/               照片墙的 8 张图（当前是生成的 SVG 占位）
  games/                游戏封面 6 张
  qr.svg / qr.png       指向首页的二维码

src/
  config.ts             ★ 站点名、简介、邮箱、导航、跑马灯文字
  data/photos.ts        ★ 照片清单
  data/music.ts         ★ 歌单
  data/games.ts         ★ 游戏清单
  data/projects.ts      ★ 项目（空数组，文件里有模板注释）
  content.config.ts     文章 schema
  content/blog/*.md     ★ 文章（5 篇）
  styles/global.css     ★ 全部样式（含设计 token）
  layouts/BaseLayout.astro   字体、meta、脚本、导航页脚
  components/           Nav / Footer / PhotoTile / TrackRow / GameCard / ProjectCard
  pages/
    index.astro         首页：首屏 + 照片 + 音乐 + 游戏 + 项目预留 + 文章
    photos.astro        照片墙
    music.astro         歌单
    games.astro         游戏
    projects/           列表（预留态）+ [slug] 详情
    blog/               列表 + 详情
    about.astro         关于（整页浅色 theme="paper"）
    404.astro
docs/                   预览截图（可删）
```

## 5. 内容怎么改

| 想改什么 | 改哪里 |
| --- | --- |
| 名字 / 简介 / 邮箱 / 导航 / 跑马灯 | `src/config.ts` |
| 加一张照片 | 图丢进 `public/photos/`，在 `src/data/photos.ts` 加一条 |
| 加一首歌 | `src/data/music.ts` 加一条（`link` 可留空） |
| 加一个游戏 | 封面丢进 `public/games/`，`src/data/games.ts` 加一条 |
| 加一个项目 | `src/data/projects.ts`（文件顶部有完整模板注释），填了自动出卡片 + 详情页 |
| 写文章 | `src/content/blog/新文件.md`，frontmatter 要 `title/description/date` |

数据结构示例：

```ts
// photos.ts
{ src: '/photos/dusk.svg', title: '傍晚六点的天', place: '杭州 · 西湖边', date: '2026.09' }

// music.ts
{ title: 'Sunset Lover', artist: 'Petit Biscuit', note: '单曲循环最多的一首', link: 'https://music.163.com/' }

// games.ts
{ title: '死亡搁浅', subtitle: 'DEATH STRANDING', year: '2019', platform: 'PS5 / PC', note: '一句话感受', cover: '/games/g-stranding.svg' }
```

## 6. 设计系统（改配色只看这一节）

全部在 `src/styles/global.css` 顶部的 `:root`：

| 变量 | 值 | 含义 |
| --- | --- | --- |
| `--ink` | `#ece7dc` | 米白纸面（页面底色） |
| `--ink-2` | `#e3ddd0` | 深一档的米色（面板、图片占位底） |
| `--paper` | `#191b1f` | 墨黑（文字色） |
| `--dim` / `--faint` | `#55595f` / `#8a8d93` | 次级 / 弱化文字 |
| `--signal` | `#cf4520` | 赭红（强调、色块） |
| `--navy` | `#22314a` | 藏青（首屏色块、页脚） |
| `--mustard` | `#e0b03a` | 芥末黄（跑马灯、点缀） |

> 注意：变量名是**历史遗留的反向命名**——`--ink` 是底色、`--paper` 是字色。改值时别被名字骗了。

其他约定：

- 栅格：`.wrap` 最大 1360px，左右留白 `--gut`
- 区块：`.section` / `.section--tight`，标题行 `.section-head` 里的编号由 CSS 计数器自动生成（`counter-increment: sec`），加区块不用手改编号
- 色块是版式的一部分：`.hero__panel`（藏青 + 准星）、`.marquee`（芥末黄条）、`.footer`（藏青）、游戏封面底部的纯色带
- 动效：`.reveal` + IntersectionObserver，`style="--d: 120ms"` 控制延迟；`prefers-reduced-motion` 下全部关闭
- 响应式断点：1080px（三列 → 两列）、680px（两列 → 一列、图注改竖排）

## 7. 部署

```
git push origin main
  → .github/workflows/deploy.yml（withastro/action@v3 + actions/deploy-pages@v4）
  → GitHub Pages
```

仓库 Settings → Pages 的 Source 必须是 **GitHub Actions**（不是 Deploy from a branch）。

自定义域名 `jiangshi.com` **没有接**：域名在另一个阿里云账号下，解析改不了。真要接：改 `astro.config.mjs` 的 `site`、加 `public/CNAME`、Settings 填域名并勾 Enforce HTTPS。README 里有四步说明。

## 8. 当前状态（务必知道）

1. **照片和游戏封面都是脚本生成的抽象 SVG 占位图**，不是真实照片。看着像「失焦的天光」但经不起细看。换真图只需替换文件 + 改路径。
2. **音乐条目的 `link` 大多是占位**（指向 music.163.com 首页），需要换成真实链接或删掉。
3. **项目数据是空数组**，`/projects` 显示预留区。
4. **5 篇文章是占位内容**（写的是这个站自己的改造过程），可以保留也可以替换。
5. 二维码 `/qr.svg`、`/qr.png` 指向当前域名；换域名要重新生成。

## 9. 给接手 agent 的约定

- 改完**必须** `npm run build` 通过再交付（当前 13 页构建约 1 秒）
- 配色只改 `:root` 的变量，不要在组件里硬编码颜色
- 不要删 `src/content/blog/` 和 `src/data/` 的现有内容，除非用户明确要求
- 提交信息用中文 + 类型前缀：`feat: …` / `fix: …` / `docs: …` / `chore: …`
- 这台机器 **github.com 时通时断**（`Failed to connect to github.com:443` / `Recv failure`），push 失败重试即可；必要时可用 `git -c http.sslVerify=false push`
- 站内文案是中文，标点用全角，语气克制、别用感叹号

## 10. 值得做的下一步

- [ ] 换成真实照片（建议先在 `public/photos/` 放 4:5 竖图）
- [ ] 补 2–3 个真项目，把「预留区」变成真内容
- [ ] 音乐补真实外链，或者接一个网易云歌单
- [ ] 加 `@astrojs/sitemap` + RSS
- [ ] 图片改 `astro:assets` 做响应式（现在是直接引 `public/`）
