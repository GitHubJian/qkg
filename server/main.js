'use strict';
const koa = require('koa');
const koaBody = require('koa-body');
const { logger } = require('./utils');
const {
    serverConfig: { isDevlopment }
} = require('./../config');

const {
    assetProxyMiddleware,
    webpackMiddleware,
    authMiddleware
} = require('./middlewares');

module.exports = ({ port = 8418 }) => {
    const app = new koa();

    app.use(koaBody({ patchKoa: true }));

    //app.use(authMiddleware());

    if (isDevlopment) {
        webpackMiddleware(app);
    } else {
        app.use(assetProxyMiddleware());
    }

    app.listen(port, () => {
        logger.info(`✨ 服务已启动 http://localhost:${port}`);
    });
};
