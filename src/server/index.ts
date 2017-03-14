import * as express from 'express';
import config from './config';
import {getLogger} from './logger';

const logger = getLogger('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

logger.info(config.staticContentPath);

app.use('/reports', express.static(config.staticContentPath));

app.listen(config.port, () => {
  logger.info('Example app listening on port 3000!');
});
