export default class Config {

  private static config = {
    REPORTS_CONTEXT_ROOT: '/v1/analytics-reports',

    // Service timeout in milliseconds
    SERVICE_TIMEOUT: 5000
  };

  public static get(key: string) {
    return Config.config[key];
  }
}