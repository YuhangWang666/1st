const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy.createProxyMiddleware('/api', {    // 'qwl'  需要转发的请求
        target: 'http://192.168.18.164:9999/',
        changeOrigin: true,
    }));
};
