import AnalyticsReports from './AnalyticsReports';

class Services {

  public static getAnalyticsReportsService(): AnalyticsReports {
    return Services.analyticsReport;
  }

  private static analyticsReport: AnalyticsReports = new AnalyticsReports();
}

export default Services;