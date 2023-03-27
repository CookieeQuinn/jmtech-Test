import pageRouter from './routers.js';
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  outputPath: 'build',
  // 部署到GitHub Page时:
  // publicPath: 'https://cookieequinn.github.io/jmtech-Test/',
  // 开发时
  // publicPath: '/',
  history: { type: 'hash' },
  fastRefresh: {},
  routes: pageRouter,
  // 部署到GitHub Page时:
  links: [{ rel: 'icon', href: './favicon.ico.svg' }],
  // links: [{ rel: 'icon', href: '/favicon.ico.svg' }],
});
