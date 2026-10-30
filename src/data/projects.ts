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

/**
 * 项目 —— 先空着。想加的时候照着下面的模板填一条，
 * 会自动出现在 /projects 列表和详情页里。
 *
 * {
 *   slug: 'my-project',                 // 详情页地址 /projects/my-project
 *   title: '项目名',
 *   tagline: '一句话说明',
 *   year: '2026',
 *   role: '你的角色',
 *   cover: '/images/cover-my-project.svg',   // 图放 public/images/
 *   accent: '#f2c14e',
 *   stack: ['Astro', 'TypeScript'],
 *   featured: true,                      // 是否在首页出现
 *   summary: '详情页开头的摘要',
 *   links: [{ label: '链接', href: 'https://…' }],
 *   sections: [{ title: '背景', text: '正文，空行分段。' }],
 * }
 */
export const projects: Project[] = [];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
