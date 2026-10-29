export interface ProjectSection {
  title: string;
  text: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  cover: string;
  accent: string;
  stack: string[];
  featured?: boolean;
  summary: string;
  links?: ProjectLink[];
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: 'lumen',
    title: 'Lumen 音乐播放器',
    tagline: '把「听歌」这件小事，做成一件顺手的事。',
    year: '2026',
    role: '设计 + 前端',
    cover: '/images/cover-lumen.svg',
    accent: '#7cf0c8',
    stack: ['Electron', 'React', 'Web Audio'],
    featured: true,
    summary:
      '一款本地优先的桌面音乐播放器：歌词逐字滚动、频谱实时渲染，所有数据只存在你自己的电脑里。',
    links: [
      { label: '在线预览', href: '#' },
      { label: '源码', href: '#' },
    ],
    sections: [
      {
        title: '起点',
        text: '我在用的大部分播放器，都在试图把音乐变成推荐流。但我想做的恰恰相反：一个安静的、只属于本地文件夹的播放器，打开就知道该听什么。',
      },
      {
        title: '设计上的取舍',
        text: '主界面只有三样东西：封面、进度、播放列表。其余全部收进快捷键与右键菜单。\n\n配色跟随封面自动提取，深色模式是默认而不是选项——大多数人在夜里听歌。',
      },
      {
        title: '实现',
        text: '渲染层用 React 组织视图，音频链路走 Web Audio API：解码、EQ、可视化都在同一条链上，避免多个 AudioContext 抢资源。\n\n频谱每帧只计算 64 个频段，用 Canvas 绘制，CPU 占用稳定在 2% 以下。',
      },
      {
        title: '结果',
        text: '冷启动到能播歌约 700ms，拖入一个 800 首的文件夹，索引在 3 秒内完成。',
      },
    ],
  },
  {
    slug: 'atlas',
    title: 'Atlas 文档系统',
    tagline: '为 40 人的产品团队，重做一套写得下去、读得进去的文档。',
    year: '2025',
    role: '设计系统 / 信息架构',
    cover: '/images/cover-atlas.svg',
    accent: '#93a7ff',
    stack: ['设计系统', 'Astro', 'MDX'],
    featured: true,
    summary:
      '从零搭建的文档基础设施：统一排版规范、可复用的内容组件，以及一条从写作到发布的自动化流水线。',
    sections: [
      {
        title: '问题',
        text: '文档散落在 6 个地方：Notion、飞书、Confluence、仓库 README、Wiki，还有一堆口口相传。新人入职第一周，有一半时间在找东西。',
      },
      {
        title: '做法',
        text: '先把「什么该写进文档」定义清楚，再谈工具。我们把文档分成三类：概念、任务、参考——每一类有固定的开头结构和排版模板。\n\n排版只保留四级标题和三种强调层级，写作者不需要考虑样式，只需要考虑结构。',
      },
      {
        title: '结果',
        text: '上线 8 周后，站内搜索的成功率从 41% 提升到 78%，重复提问下降了三分之二。',
      },
    ],
  },
  {
    slug: 'northwind',
    title: 'Northwind 数据看板',
    tagline: '让非技术同事，也能一眼看懂业务在发生什么。',
    year: '2025',
    role: '数据可视化',
    cover: '/images/cover-northwind.svg',
    accent: '#ffb27a',
    stack: ['Vue', 'D3', 'TypeScript'],
    featured: true,
    summary:
      '面向运营团队的可视化看板：把 12 张报表收敛成 3 个核心视图，支持任意时间窗口对比。',
    sections: [
      {
        title: '背景',
        text: '原来的看板有 12 张报表，每张都长得不一样，图例颜色随心所欲。运营同学每周一要看 40 分钟才能得出结论。',
      },
      {
        title: '设计原则',
        text: '一张看板只回答一个问题。颜色只用于表达类别，不用于装饰。所有坐标轴从零开始，避免视觉夸大。',
      },
      {
        title: '结果',
        text: '周会准备时间从 40 分钟降到 8 分钟，指标口径的争论少了——因为口径直接写在图表下方。',
      },
    ],
  },
  {
    slug: 'pocket',
    title: 'Pocket 阅读卡片',
    tagline: '一个不会让你越存越焦虑的稍后读工具。',
    year: '2024',
    role: '独立开发',
    cover: '/images/cover-pocket.svg',
    accent: '#c9a7ff',
    stack: ['Astro', 'Supabase', 'PWA'],
    summary:
      '自动清理超过 30 天没读的文章，只留下真正会读的。存进去是承诺，不是囤积。',
    sections: [
      {
        title: '一个反直觉的规则',
        text: '大多数稍后读工具鼓励你存更多。Pocket 每次打开都会先问你：上周存的这些，还读吗？不读就删掉。',
      },
      {
        title: '技术',
        text: '纯静态前端 + Edge Function，阅读进度存在本地，账号同步是可选项。离线也能读已经打开过的文章。',
      },
    ],
  },
  {
    slug: 'forma',
    title: 'Forma 组件库',
    tagline: '一套只有一个目标的设计系统：让新人第一天就能改对的界面。',
    year: '2024',
    role: '设计系统',
    cover: '/images/cover-forma.svg',
    accent: '#d9f57c',
    stack: ['React', 'Radix', 'Storybook'],
    summary: '48 个组件，全部带可交互文档与无障碍检查，覆盖公司 90% 的中后台界面。',
    sections: [
      {
        title: '为什么重做',
        text: '旧组件库的 API 是照着实现写的，不是照着使用者写的。新人最常见的错误是：用错组件、传错属性、再写一堆补丁样式。',
      },
      {
        title: '约束',
        text: '每个组件只暴露必要的属性：布局用容器解决，间距用 token 解决，不再给组件加 margin 参数。',
      },
      {
        title: '结果',
        text: '中后台新页面的开发时间平均缩短 35%，视觉走查的问题从每周 20+ 降到每周 2 到 3 个。',
      },
    ],
  },
  {
    slug: 'signal',
    title: 'Signal 监控面板',
    tagline: '凌晨三点的告警，应该是能看懂的那种。',
    year: '2023',
    role: '前端 + 可视化',
    cover: '/images/cover-signal.svg',
    accent: '#7fd3ff',
    stack: ['Svelte', 'WebSocket', 'Go'],
    summary:
      '实时监控面板：把 30 个技术指标翻译成 5 个业务信号，异常时说清楚「哪里坏了、影响谁」。',
    sections: [
      {
        title: '问题',
        text: '告警数量不是问题，告警质量才是。值班同学每天收到 200 条通知，其中 180 条可以忽略。',
      },
      {
        title: '做法',
        text: '把指标聚合成业务信号，每条告警必须包含：影响范围、可能的根因、最近一次变更。没有这三样，不允许配置。',
      },
      {
        title: '结果',
        text: '有效告警占比从 11% 提升到 64%，平均响应时间缩短了一半。',
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
