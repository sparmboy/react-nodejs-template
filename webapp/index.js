const config = require('@react-nodejs-template/server/config');
const logger = require('@react-nodejs-template/server/logger');
const ExpressServer = require('@react-nodejs-template/server/expressServer');
const express = require('express');

const launchServer = async () => {
  try {
    this.expressServer = new ExpressServer(config.URL_PORT, config.OPENAPI_YAML);
    this.expressServer.app.use(express.static('../ui/build'));
    this.expressServer.launch();
    logger.info('Express server running');
  } catch (error) {
    logger.error('Express Server failure', error.message);
    await this.close();
  }
};

launchServer().catch(e => logger.error(e));
