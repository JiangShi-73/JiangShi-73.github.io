/**
 * 站点配置 —— 想改名字、简介、链接，基本只需要动这个文件。
 */
export const site = {
  // 品牌名（会出现在导航、页脚、浏览器标题里）
  name: 'jiangshi',
  // 首页大标题上方的眉标
  eyebrow: '照片 · 音乐 · 游戏 · 2026',
  // 一句话介绍（SEO 描述也用它）
  description: '一个收集喜欢的东西的地方：照片、音乐、游戏，还有一些写下来的字。',
  author: 'jiangshi',
  email: '2107210738@qq.com',
  location: '中国 · 杭州',
  // 页脚与关于页的社交链接
  socials: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'X / Twitter', href: 'https://x.com/' },
    { label: '小红书', href: 'https://www.xiaohongshu.com/' },
  ],
  nav: [
    { label: '首页', href: '/' },
    { label: '照片', href: '/photos' },
    { label: '音乐', href: '/music' },
    { label: '游戏', href: '/games' },
    { label: '文章', href: '/blog' },
    { label: '关于', href: '/about' },
  ],
  // 首页跑马灯的滚动文字
  marquee: [
    '照片',
    '音乐',
    '游戏',
    '散步',
    '雨天',
    '深夜',
    '旧相机',
    '循环播放',
    '存档',
  ],
};
