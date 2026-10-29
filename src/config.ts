/**
 * 站点配置 —— 想改名字、简介、链接，基本只需要动这个文件。
 */
export const site = {
  // 品牌名（会出现在导航、页脚、浏览器标题里）
  name: 'Aster',
  // 首页大标题上方的眉标
  eyebrow: '独立设计 & 前端 · 2026',
  // 一句话介绍（SEO 描述也用它）
  description: '一个把想法做成界面的地方：项目、笔记，以及关于设计与代码的一些思考。',
  author: 'Aster',
  email: 'hello@example.com',
  location: '中国 · 杭州',
  // 页脚与关于页的社交链接
  socials: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'X / Twitter', href: 'https://x.com/' },
    { label: '小红书', href: 'https://www.xiaohongshu.com/' },
  ],
  nav: [
    { label: '首页', href: '/' },
    { label: '项目', href: '/projects' },
    { label: '文章', href: '/blog' },
    { label: '关于', href: '/about' },
  ],
  // 首页跑马灯的滚动文字
  marquee: [
    '界面设计',
    '前端工程',
    '设计系统',
    '动效',
    '独立开发',
    '写作',
    '产品思维',
  ],
};
