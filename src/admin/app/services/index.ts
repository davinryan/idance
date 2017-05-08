import AnalyticsReports from './AnalyticsReports';

class Services {

  private static analyticsReport: AnalyticsReports = new AnalyticsReports();

  public static getAnalyticsReportsService(): AnalyticsReports {
    return Services.analyticsReport;
  }
}

export default Services;