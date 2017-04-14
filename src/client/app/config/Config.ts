export default class Config {

  private static config = {REPORTS_CONTEXT_ROOT: '/v1/analytics-reports'};

  public static get(key: string) {
    return Config.config[key];
  }
}