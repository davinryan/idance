export default class Config {

  public static get(key: string) {
    return Config.config[key];
  }

  private static config = {
    REPORTS_CONTEXT_ROOT: '/v1/analytics-reports',

    // Service timeout in milliseconds
    SERVICE_TIMEOUT: 5000
  };
}