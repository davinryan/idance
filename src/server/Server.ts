import analyticsReports from './api/analytics-reports';
import config from './config';
import * as express from 'express';
import {getLogger} from './logger';
import * as path from 'path';
const logger = getLogger('Server');

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
  }

  /**
   * Any express routing configuration.
   */
  private routes() {
    logger.info('Configuring Server Routes');

    let router: express.Router;
    router = express.Router();

    // Analytics Page
    const staticContentLocation = path.join(__dirname, config.get('STATIC_CONTENT_PATH'));
    logger.info('################## ', staticContentLocation);
    router.use(config.get('REPORTS_CONTEXT_ROOT'), express.static(staticContentLocation));

    // Always return the main index.html, so react-router render the route in the client
    router.get(staticContentLocation + '/*', (req, res) => {
      res.sendFile(staticContentLocation + '/index.html');
    });

    // Add Analytics API
    router.use('/v1/analytics-reports', analyticsReports);

    // use router middleware
    this.app.use(router);
  }
}

export default Server;