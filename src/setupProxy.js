/* eslint-disable no-unused-expressions */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/countries',
    createProxyMiddleware({
      target: 'https://api.printful.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/pics',
    createProxyMiddleware({
      target: 'https://picsum.photos',
      changeOrigin: true,
    })
  );

  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
    })
  );
};
