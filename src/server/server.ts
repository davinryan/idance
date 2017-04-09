import analyticsReports from './api/analytics-reports';
import config from './config';
import * as express from 'express';
import * as apicache from 'apicache'
import {getLogger} from './logger';
const logger = getLogger('Server');
const cache = apicache.middleware;

/**
 * Main Server to Run the back and front end.
 */
class Server {

  /** Main express application. */
  private app: express.Application;

  /**
   * Default Constructor
   */
  constructor() {
    // Create an express application
    this.app = express();

    // Configure the application
    this.config();

    // Configure routes
    this.routes();
  }

  /**
   * Any express configuration.
   */
  private config() {
    logger.info('Configuring Server');

    // Configure Express
    this.app.listen(config.get('PORT'), () => {
      logger.info('Application now listening on port %s ', config.get('PORT'));
    });

    // Configure Caching
    const onlyStatus200 = (req, resp) => {
      return resp.statusCode === 200
    };
    const cacheSuccesses = cache(config.get('CACHE_TIMEOUT') + ' hours', onlyStatus200);
    this.app.use(cacheSuccesses);
  }

  /**
   * Any express routing configuration.
   */
  private routes() {
    logger.info('Configuring Server Routes');

    let router: express.Router;
    router = express.Router();

    // Analytics Page
    router.use('/analytics-reports', express.static(config.get('STATIC_CONTENT_PATH')));

    // Add Analytics API
    router.use('/v1/analytics-reports', analyticsReports);

    // use router middleware
    this.app.use(router);
  }
}

export default Server;