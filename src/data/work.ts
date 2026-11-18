export interface StudyItem {
  period: string;
  title: string;
  desc: string;
}

export interface WorkItem {
  name: string;
  stack: string;
  desc: string;
  link?: string;
}

/** 学业经历。当前为占位，等真实内容替换 */
export const studies: StudyItem[] = [
  {
    period: '—',
    title: '学校与专业',
    desc: '还空着，等整理好再放进来。',
  },
  {
    period: '—',
    title: '在学的课程',
    desc: '还空着，等整理好再放进来。',
  },
];

/** 开发成果。当前为占位，等真实内容替换 */
export const works: WorkItem[] = [
  {
    name: '这个站本身',
    stack: 'Astro / TypeScript / CSS',
    desc: '零框架运行时的静态收藏箱：内容集合、双主题、自托管字体，push 即部署。',
    link: 'https://github.com/weiyuan-qianfu/weiyuan-qianfu.github.io',
  },
  {
    name: '其余项目',
    stack: '—',
    desc: '还空着，等想放的再放进来。',
  },
];