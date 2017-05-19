'use strict';

const qiniu = require('./lib/qiniu');

module.exports = app => {
    if (app.config.qiniu.app) qiniu(app);
};