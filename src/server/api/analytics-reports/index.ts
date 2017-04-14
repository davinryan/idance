import AnalyticsReports from './AnalyticsReports'
import * as express from 'express';
import config from '../../config';
import * as apicache from 'apicache';
const cache = apicache.middleware;
const onlyStatus200 = (req, resp) => {
  return resp.statusCode === 200
};
const cacheSuccesses = cache(config.get('CACHE_TIMEOUT') + ' hours', onlyStatus200);
const router = express.Router();
const analytics = new AnalyticsReports();

// Analytics API
router.get('/', cache(cacheSuccesses), async(req, res) => {
  if (req.query.type === 'noEntrancesPerSiteSource') {
    res.json(await analytics.getNoEntrancesPerSiteSource(req.query.startDate));
  } else if (req.query.type === 'mostPopularDeviceByCategory') {
    res.json(await analytics.getMostPopularDeviceByCategory(req.query.startDate));
  } else if (req.query.type === 'mostPopularDeviceByDeviceType') {
    res.json(await analytics.getMostPopularDeviceByDeviceType(req.query.startDate));
  } else if (req.query.type === 'mostPopularBrowser') {
    res.json(await analytics.getMostPopularBrowser(req.query.startDate));
  } else if (req.query.type === 'mostPopularExitPage') {
    res.json(await analytics.getMostPopularExitPage(req.query.startDate));
  } else {
    res.json({
      usage: 'To use this service set a parameter called \'type\' to one of the following types',
      types: [
        {
          type: 'noEntrancesPerSiteSource',
          description: 'Reports on the number of hits per site source used to enter the main site',
          exampleUsage: '?type\=noEntrancesPerSiteSourceForLast30Days&startDate=30daysAgo'
        },
        {
          type: 'mostPopularDeviceByCategory',
          description: 'Reports on the number of hits per Device by category (desktop, mobile etc...) used to enter the main site',
          exampleUsage: '?type\=mostPopularDeviceByCategory&startDate=30daysAgo'
        },
        {
          type: 'mostPopularDeviceByDeviceType',
          description: 'Reports on the number of hits per device type (Android, Windows etc...) used to enter the main site',
          exampleUsage: '?type\=mostPopularDeviceByDeviceType&startDate=30daysAgo'
        },
        {
          type: 'mostPopularBrowser',
          description: 'Reports on the number of hits per browser type used to enter the main site',
          exampleUsage: '?type\=mostPopularBrowser&startDate=30daysAgo'
        },
        {
          type: 'mostPopularExitPage',
          description: 'Reports on the number of hits per exit page used to enter the main site',
          exampleUsage: '?type\=mostPopularExitPage&startDate=30daysAgo'
        }
      ]
    });
  }
});

export default router;