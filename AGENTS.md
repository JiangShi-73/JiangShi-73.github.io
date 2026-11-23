# 项目约定（给 coding agent）

这是一个 **Astro 静态个人站**：照片 / 音乐 / 游戏 / 文章，米白 + 色块的 NASA-punk 风格。
完整背景见 `HANDOFF.md`，这里只放**每次动手都要遵守的规则**。

## 命令

```bash
npm install     # 首次
npm run dev     # http://localhost:4321
npm run build   # 必须通过再交付
```

## 硬性规则

1. **配色只改** `src/styles/global.css` 顶部 `:root` 的变量（`--ink` `--paper` `--signal` `--navy` `--mustard`），不要在组件里硬编码颜色。
   注意 `--ink` 是底色、`--paper` 是字色（历史命名，别按字面理解）。
2. **内容数据走** `src/data/*.ts`，页面只负责渲染。不要在 `.astro` 里写死条目。
3. **不要删除** `src/content/blog/` 和 `src/data/` 的现有内容，除非用户明确要求。
4. **新增区块**用 `<section class="section">` + `.section-head`，编号由 CSS 计数器自动生成，不要手写数字。
5. **提交信息**：中文 + 类型前缀，例如 `feat: 照片墙支持横竖混排`、`fix: 手机端图注换行`。
6. 站内文案是中文，标点用全角，语气克制（不要感叹号）。

## 关键文件

| 文件 | 作用 |
| --- | --- |
| `src/config.ts` | 站点名、简介、邮箱、导航、跑马灯 |
| `src/data/photos.ts` | 照片 |
| `src/data/music.ts` | 音乐（含网易云 ID，行内播放） |
| `src/data/games.ts` | 游戏 |
| `src/data/films.ts` | 剧 / 电影 / 动画 |
| `src/data/characters.ts` | 角色 |
| `src/data/art.ts` | 画（当前为空） |
| `src/data/work.ts` | 档案舱：学业 + 开发成果 |
| `src/data/projects.ts` | 项目（当前为空，文件内有模板） |
| `src/styles/global.css` | 全部样式 + 设计 token |
| `src/layouts/BaseLayout.astro` | 字体、meta、脚本、导航页脚 |
| `src/components/` | Nav / Footer / PhotoTile / TrackRow / GameCard / ProjectCard |

## 图片

静态图放 `public/photos/` 和 `public/games/`，路径写进数据文件。
现在的图都是**生成的 SVG 占位图**，不是真照片——换图时直接替换文件、改路径即可。

## 网络

这台机器连 github.com 不稳定，push 报 `Failed to connect` / `Recv failure` 时重试几次即可；
必要时用 `git -c http.sslVerify=false push`。
