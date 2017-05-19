'use strict';

const assert = require('assert');
const qiniu = require('co-qiniu');

module.exports = app => {
  app.addSingleton('qiniu', createOneClient);
};

const createOneClient = (config, app) => {
  assert(config.ak && config.sk, '[egg-qiniu] ak sk is required on config');
  app.coreLogger.info('[egg-qiniu] init %s', config.ak);

  qiniu.config({
    ACCESS_KEY: config.ak,
    SECRET_KEY: config.sk,
  });

  return qiniu;
};
