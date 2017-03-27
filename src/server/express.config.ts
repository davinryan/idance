import * as express from 'express';
import config from './config';
import {getLogger} from './logger';
const logger = getLogger('express');

export default function expressConfig(app) {

  app.listen(config.port, () => {
    logger.info('Example app listening on port 3000!');
  });
};



