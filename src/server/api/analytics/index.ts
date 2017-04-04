import AnalyticsReports from './AnalyticsReports'
import * as express from 'express';

const router = express.Router();
const analytics = new AnalyticsReports();

// Analytics API
router.get('/', async(req, res) => {
  if (req.query.type === 'noEntrancesPerSiteSourceForLast30Days') {
    let report = await analytics.getNoEntrancesPerSiteSourceForLast30Days();
    res.json(report)
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