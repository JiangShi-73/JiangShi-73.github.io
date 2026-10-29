---
title: '用 Astro 把内容站做到几乎零 JS'
description: '内容站不需要 React。记录一次用 Astro 重写博客的取舍与收益。'
date: 2026-08-02
tags: ['前端', 'Astro']
---

内容站的本质是：把 Markdown 变成 HTML。这句话听起来简单，但市面上大多数方案会在中间塞进一整套运行时。

Astro 的思路是反过来的：默认输出静态 HTML，只有你显式标记的组件才会被水合。对一个博客来说，这个「零」几乎是字面意义上的。

## 内容集合

Astro 5 之后，内容集合的写法变成了显式加载器：

```ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
```

好处是 schema 变成了硬约束：日期格式写错、标签漏写，构建时直接报错，而不是等到页面上显示 `Invalid Date`。

## 交互怎么办

我的交互需求只有三个：滚动入场、移动端菜单、导航栏滚动时的背景变化。

这三个加起来不到 60 行原生 JavaScript，写在布局文件里，直接被 Astro 打包内联。没有框架、没有 hydration、没有 hydration mismatch。

## 结果

- 首页 HTML 约 18 KB（gzip 后）
- 首屏 JS 约 3 KB
- Lighthouse 性能 100 分

真正的收益不是分数，而是「不会再坏」：没有状态、没有副作用，改版时不用考虑 fetch 竞态和缓存失效。

## 什么时候它不合适

如果你需要实时协作、复杂表单、客户端路由，Astro 会让你一直和框架较劲。它擅长的是：内容多、交互少、SEO 重要。认清这一点，比选哪个框架都重要。
