import config from './config';
import * as express from 'express';
import {getLogger} from './logger';
const logger = getLogger('Server');

class Server {

  private app: express.Application;

  constructor() {
    this.app = express();

    // Configure the application
    this.config();

    // Configure routes
    this.routes();
  }

  private config() {
    logger.info('Configuring Server');

    this.app.listen(config.port, () => {
      logger.info('Application now listening on port %s ', config.port);
    });
  }

  private routes() {
    logger.info('Configuring Server Routes');

    let router: express.Router;
    router = express.Router();

    // Analytics Page
    router.use('/reports', express.static(config.staticContentPath));

    // use router middleware
    this.app.use(router);
  }
}

export default Server;