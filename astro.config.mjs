import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  devToolbar: { enabled: false },
  // 自定义域名（GitHub Pages + CNAME）
  site: 'https://jiangshi.com',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  // 允许通过临时隧道（localhost.run / pinggy 等）访问本地预览
  vite: {
    server: { allowedHosts: true },
    preview: { allowedHosts: true },
  },
});
