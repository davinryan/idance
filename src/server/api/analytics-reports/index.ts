import AnalyticsReports from './AnalyticsReports'
import * as express from 'express';

const router = express.Router();
const analytics = new AnalyticsReports();

// Analytics API
router.get('/', async(req, res) => {
  if (req.query.type === 'noEntrancesPerSiteSource') {
    res.json(await analytics.getNoEntrancesPerSiteSource(req.query.startDate));
  } else if (req.query.type === 'mostPopularDeviceByCategory') {
    res.json(await analytics.getMostPopularDeviceByCategory(req.query.startDate));
  } else if (req.query.type === 'mostPopularDeviceByDeviceType') {
    res.json(await analytics.getMostPopularDeviceByDeviceType(req.query.startDate));
  } else if (req.query.type === 'mostPopularBrowser') {
    res.json(await analytics.getMostPopularBrowser(req.query.startDate));
  } else if (req.query.type === 'mostPopularExistPage') {
    res.json(await analytics.getMostPopularExistPage(req.query.startDate));
  } else {
    res.json({
      usage: 'To use this service set a parameter called \'type\' to one of the following types',
      types: [
        {
          type: 'noEntrancesPerSiteSourceForLast30Days',
          description: 'Reports on the number of hits per site source used to enter the main site',
          exampleUsage: '?type\=noEntrancesPerSiteSourceForLast30Days'
        }
      ]
    });
  }
});

export default router;