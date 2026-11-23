import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  devToolbar: { enabled: false },
  // 当前线上地址（以后接自定义域名时改这里 + 加 public/CNAME）
  site: 'https://jiangshi-73.github.io',
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
