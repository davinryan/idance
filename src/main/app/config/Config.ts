export default class Config {

  private static config = {
  };

  public static get(key: string) {
    return Config.config[key];
  }
}