import AnalyticsReports from './api/analyticsReports';
import config from './config';
import * as express from 'express';
import {getLogger} from './logger';
const logger = getLogger('Server');

/**
 * Main Server to Run the back and front end.
 */
class Server {

  /** Main express application. */
  private app: express.Application;

  /** Google Analytics Reports API. */
  private reports: AnalyticsReports;

  /**
   * Default Constructor
   */
  constructor() {
    // Create an express application
    this.app = express();

    // Instantiate Reports API
    this.reports = new AnalyticsReports();

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

    this.app.listen(config.port, () => {
      logger.info('Application now listening on port %s ', config.port);
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
    router.use('/reports', express.static(config.staticContentPath));

    // Analytics API
    router.get('/v1/reports', async(req, res) => {
      let report = await this.reports.getNoEntrancesPerSiteSourceForLast30Days();
      res.json(report)
    });

    // use router middleware
    this.app.use(router);
  }
}

export default Server;